require('newrelic');
//variables to import modules
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const jwt = require('jsonwebtoken');
const multer = require('multer');

// Load environment variables from .env file
dotenv.config();
const app = express();

//Port and student id from env file
const PORT = process.env.PORT || 3000;
const ID = process.env.STUDENT_ID;

//connect to mongoDB from env file
mongoose.connect(process.env.mongoUrl);

// print if connected to db
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// User schema
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  bio: String,
  profilePic: String,
});

//Post schema
const postSchema = new mongoose.Schema({
  posted_by: String,
  date: { type: Date, default: Date.now },
  title: String,
  featured_image: String,
  description: String,
  location: String,
  budget: Number,
  days: Number,
  likes: { type: Number, default: 0 },
  comments: [{
    username: String,
    text: String,
  }],
});

//Message schema
const MessageSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  data: { type: String, required: true },
  time: { type: Date, default: Date.now }
});


//Multer storage to save image in /public/img/uploads
const storage = multer.diskStorage({
  destination: './public/img/uploads/',
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

//User model
const User = mongoose.model('User', userSchema);

//Post Model
const Post = mongoose.model('Post', postSchema);

//Message model
const Message = mongoose.model('Message', MessageSchema);

// Middleware for parsing JSON in requests
app.use(bodyParser.json());

// Middleware for enabling CORS
app.use(cors());

// Middleware for parsing form data
app.use(express.json());

// Signup route
app.post(`/${ID}/signup`, async (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists.' });
  }

  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = new User({
    username,
    password: hashedPassword,
  });

  // Save the user to the database
  await newUser.save();

  res.status(201).json({ message: 'User created successfully.' });
});

// Login route
app.post(`/${ID}/login`, async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    // Compare password with the hashed password in db
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    // Generate and send JWT token upon successful login
    const token = jwt.sign({ id: user._id, username: user.username }, 'your-secret-key', { expiresIn: '1h' });
    res.status(200).json({ token, message: 'Login successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Logout route
app.post(`/${ID}/logout`, (req, res) => {
  res.json({ message: 'Logout successful' });
});

// Profile route
app.get(`/${ID}/profile`, authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Exclude password from the response
    const { password, ...userData } = user.toObject();

    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
 //verify token and send user data
  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.user = user;
    next();
  });
}


//new post route
app.post(`/${ID}/newPost`, async (req, res) => {
  try {
    const {
      posted_by,
      title,
      featured_image,
      description,
      location,
      budget,
      days,
    } = req.body;
    const newPost = new Post({
      posted_by,
      title,
      featured_image,
      description,
      location,
      budget,
      days,
    });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

//get all posts route
app.get(`/${ID}/posts`, async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.status(200).json(allPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

//upload image to /public/img/uploads
app.post(`/${ID}/upload`, upload.single('image'), (req, res) => {
    try {
      const uploadedImage = req.file;
      const imagePath = `/public/img/uploads/${uploadedImage.filename}`;
      res.json({ success: true, featured_image: imagePath });
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).json({ success: false, error: 'Failed to upload image' });
    }
  });

//update profile route
app.put(`/${ID}/updateProfile`, authenticateToken, async (req, res) => {
    try {
      const userId = req.user.id;
  
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

//route to like a post
app.post(`/${ID}/likePost`, async (req, res) => {
    try {
      const { postId } = req.body;
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      post.likes += 1;
      await post.save();
      res.status(200).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  //new comment route
app.post(`/${ID}/newComment`, async (req, res) => {
  try {
    const { postId, username, text } = req.body;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    post.comments.push({ username, text });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//get user posts 
app.get(`/${ID}/myPosts`, authenticateToken, async (req, res) => {
  try {
    const posts = await Post.find({ posted_by: req.user.username });
    // Return the posts
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//get all users
app.get(`/${ID}/users`, authenticateToken, async (req, res) => {
  try {
    // Fetch all user profiles excluding the password
    const users = await User.find({}, '-password');

    // Return the user profiles
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//get all messages
app.post(`/${ID}/messages`, (req, res) => {
  const { sender, receiver, data } = req.body;
  const newMessage = new Message({ sender, receiver, data });
  newMessage.save()
    .then(message => res.json(message))
    .catch(err => console.log(err));
});

//get messages of logged in user
app.get(`/${ID}/chats`, authenticateToken, (req, res) => {
  const { username } = req.user; 
  
  Message.find({ $or: [{ sender: username }, { receiver: username }] })
    .then(messages => res.json(messages))
    .catch(err => console.log(err));
});

//get all locations
app.get(`/${ID}/allLocations`, async (req, res) => {
    try {
      const uniqueLocations = await Post.distinct('location');
      res.json(uniqueLocations);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
});
//get 4 top locations
app.get(`/${ID}/topLocations`, async (req, res) => {
  try {
    const locations = await Post.aggregate([
      { 
        $group: { 
          _id: '$location', 
          postCount: { $sum: 1 },
          featured_image: { $first: '$featured_image' } 
        } 
      }, 
      { $sort: { postCount: -1 } }, 
      { $limit: 4 } 
    ]);
    res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

//get 4 top posts
app.get(`/${ID}/topPosts`, async (req, res) => {
  try {
    const topPosts = await Post.aggregate([
      { $sort: { likes: -1 } }, 
      { $limit: 4 }
    ]);

    res.json(topPosts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});


app.use(express.static('public'));
app.use('/public', express.static('public'));

//route to index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

