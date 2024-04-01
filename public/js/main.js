//variable for posts
let posts = [];

document.addEventListener("DOMContentLoaded", async () => {
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    navigateTo(window.location.hash);
});

window.addEventListener("hashchange", () => {
  navigateTo(window.location.hash);
});
//handle hash change
function navigateTo(hash) {
  switch (hash) {
      case "#/signup":
          SignupPage();
          break;
      case "#/login":
          LoginPage();
          break;
      case "#/dashboard":
          DashboardPage();
          break;    
      case "#/contact":
          ContactPage();
          break;
      case "#/about":
          AboutPage();
          break;
      case "#/trips":
          TripsPage();
          break;
      case "#/create-post":
          CreatePostPage();
          break;
      case "#/profile":
            ProfilePage();
            break;
      case "#/chats":
            ChatsPage();
            break;
      case "#/editProfile":
            EditProfilePage();
            break;
      case "#/users":
            Users();
            break;
      case hash.match(/#\/profile\/.*/g)?.[0]:
            usersProfile();
            break;
      case hash.match(/#\/post\/.*/g)?.[0]:
        PostDetailsPage();
        break;
      default:
          HomePage();
          break;
  }
}
//load content on index.html
function loadPage(content) {
  const app = document.getElementById("app");
  app.innerHTML = content;
}

//homepage
function HomePage() {
  const home = `    <div id="homepage" class="page bg-cover bg-center bg-no-repeat min-h-screen" style="background-image: url('./public/img/bg-blue.svg')">
  <!-- Header starts -->
   <nav class="flex items-center justify-center bg-cover px-4 py-2">
       <div class="flex items-center justify-center lg:my-0 my-4 bg-black/70 rounded-lg lg:rounded-3xl lg:justify-between max-w-7xl w-full">
           <a href="#/" class="w-[80%] lg:w-[25%] lg:py-0 py-4"><img src="./public/img/logo.png" /></a>
           <div class="hidden lg:flex items-center px-4 py-4 w-[70%] justify-between space-x-4 text-white text-xl">
               <a href="#/trips" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">All Trips</a>
               <a href="#/about" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">About</a>
               <a href="#/contact" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Contact Us</a>
               <a href="#/signup" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Signup</a>
               <a href="#/login" class="bg-[#4facf7] px-4 py-1 rounded-xl hover:bg-cyan-700 ease-in-out duration-400 cursor-pointer">Login</a>
           </div>
       </div>
   </nav>
   <!-- Header ends -->
   <!-- Hero Section starts  -->
   <div class="flex items-center justify-center px-4">
       <div class="flex flex-col lg:flex-row text-white items-center justify-center max-w-7xl w-full lg:my-8">
           <div class="flex items-center w-[90%] lg:w-[60%] min-h-72">
               <div class="flex flex-col space-y-6">
                   <div class="text-5xl font-medium my-6">Explore Beyond Boundaries - Your Journey Awaits!</div>
                   <div class="text-xl">Discover the Treasures of Travel"</div>
                   <div>
                       <a href="#/login" class="border-2 border-white hover:bg-white hover:text-black ease-in-out duration-500 cursor-pointer font-medium px-4 py-2 rounded-3xl my-6">Post your adventure</a>
                   </div>
                   <div class="text-xl font-medium mt-6 mb-4">Follow us</div>
                   <div class="flex space-x-4 items-center justify-start">
                       <a href="https://facebook.com" class="text-3xl hover:text-cyan-500 hover:scale-105 ease-in-out duration-500"><ion-icon name="logo-facebook"></ion-icon></a>
                       <a href="https://twitter.com" class="text-3xl hover:text-cyan-500 hover:scale-105 ease-in-out duration-500"><ion-icon name="logo-twitter"></ion-icon></a>
                       <a href="https://instagram" class="text-3xl hover:text-cyan-500 hover:scale-105 ease-in-out duration-500"><ion-icon name="logo-instagram"></ion-icon></a>
                       <a href="https://reddit.com" class="text-3xl hover:text-cyan-500 hover:scale-105 ease-in-out duration-500"><ion-icon name="logo-reddit"></ion-icon></a>
                   </div>
               </div>
           </div>
               <div class="flex items-center justify-center w-[90%] lg:w-[40%] lg:min-h-96 overflow-hidden">
                   <img class="h-full w-full" src="./public/img/hero1.png" />
               </div>
       </div>
   </div>
</div>
<!-- Hero Section ends -->

</div>`;
  loadPage(home);
}
//about us page
function AboutPage() {
  const about = `<div id="" class="page bg-cover bg-center bg-no-repeat min-h-screen" style="background-image: url('./public/img/bg-blue.svg')">
  <!-- Header starts -->
   <nav class="flex items-center justify-center bg-cover px-4 py-2">
       <div class="flex items-center justify-center lg:my-0 my-4 bg-black/70 rounded-lg lg:rounded-3xl lg:justify-between max-w-7xl w-full">
           <a href="#/" class="w-[80%] lg:w-[25%] lg:py-0 py-4"><img src="./public/img/logo.png" /></a>
           <div class="hidden lg:flex items-center px-4 py-4 w-[70%] justify-between space-x-4 text-white text-xl">
               <a href="#/trips" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">All Trips</a>
               <a href="#/about" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">About</a>
               <a href="#/contact" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Contact Us</a>
               <a href="#/signup" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Signup</a>
               <a href="#/login" class="bg-[#4facf7] px-4 py-1 rounded-xl hover:bg-cyan-700 ease-in-out duration-400 cursor-pointer">Login</a>
           </div>
       </div>
   </nav>
   <!-- Header ends -->
    <div class="flex items-center justify-center text-2xl text-[#4facf7] bg-white px-2 py-1 rounded-lg font-bold ">About Us</div>
   </div>`;
  loadPage(about);
}
//contact us page
function ContactPage() {
  const contact = `<div id="" class="page bg-cover bg-center bg-no-repeat min-h-screen" style="background-image: url('./public/img/bg-blue.svg')">
  <!-- Header starts -->
   <nav class="flex items-center justify-center bg-cover px-4 py-2">
       <div class="flex items-center justify-center lg:my-0 my-4 bg-black/70 rounded-lg lg:rounded-3xl lg:justify-between max-w-7xl w-full">
           <a href="#/" class="w-[80%] lg:w-[25%] lg:py-0 py-4"><img src="./public/img/logo.png" /></a>
           <div class="hidden lg:flex items-center px-4 py-4 w-[70%] justify-between space-x-4 text-white text-xl">
               <a href="#/trips" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">All Trips</a>
               <a href="#/about" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">About</a>
               <a href="#/contact" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Contact Us</a>
               <a href="#/signup" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Signup</a>
               <a href="#/login" class="bg-[#4facf7] px-4 py-1 rounded-xl hover:bg-cyan-700 ease-in-out duration-400 cursor-pointer">Login</a>
           </div>
       </div>
   </nav>
   <!-- Header ends -->
   <div class="flex items-center justify-center text-2xl text-[#4facf7] bg-white px-2 py-1 rounded-lg font-bold ">Contact Us</div>
   </div>`;
  loadPage(contact);
}
//trips page
function TripsPage() {
  const trips = `<div id="" class="page bg-cover bg-center bg-no-repeat min-h-screen" style="background-image: url('./public/img/bg-blue.svg')">
  <!-- Header starts -->
   <nav class="flex items-center justify-center bg-cover px-4 py-2">
       <div class="flex items-center justify-center lg:my-0 my-4 bg-black/70 rounded-lg lg:rounded-3xl lg:justify-between max-w-7xl w-full">
           <a href="#/" class="w-[80%] lg:w-[25%] lg:py-0 py-4"><img src="./public/img/logo.png" /></a>
           <div class="hidden lg:flex items-center px-4 py-4 w-[70%] justify-between space-x-4 text-white text-xl">
               <a href="#/trips" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">All Trips</a>
               <a href="#/about" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">About</a>
               <a href="#/contact" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Contact Us</a>
               <a href="#/signup" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Signup</a>
               <a href="#/login" class="bg-[#4facf7] px-4 py-1 rounded-xl hover:bg-cyan-700 ease-in-out duration-400 cursor-pointer">Login</a>
           </div>
       </div>
   </nav>
   <!-- Header ends -->
   <div class="flex items-center justify-center text-2xl text-[#4facf7] bg-white px-2 py-1 rounded-lg font-bold ">All Trips</div>
   </div>`;
  loadPage(trips);
}
//signup page
function SignupPage() {
  const signup = `    <div class="bg-cover bg-center bg-no-repeat min-h-screen" style="background-image: url('../src/img/bg-white.svg')">
  <!-- Signup Section starts  -->
  <div class="flex items-center justify-center">
      <div class="flex lg:flex-row flex-col-reverse items-center justify-between w-full">
          <div class=" flex items-start justify-center bg-green-600 h-screen w-full lg:w-[30%]">
              <div class="flex-col flex w-full items-center justify-center">
                  <a href="#/" class="w-[80%] my-10">
                      <img src="../img/logo.png" />
                  </a>
                  <div class="text-white text-2xl font-medium ">Signup for TrekTeller</div>
                  <form class="w-[80%] px-10 py-6 lg:py-12 bg-white shadow-2xl shadow-gray-800 rounded-xl my-8">
    <div class="text-lg my-2 font-medium text-gray-500">Username</div>
    <input id="signupUsername" type="text" placeholder="username" class="w-full rounded border-2 border-gray-400 px-3 py-2 text-gray-500 focus:outline-none" />
    <div class="text-lg my-2 font-medium text-gray-500">Password</div>
    <input id="signupPassword" type="password" placeholder="**********" class="w-full rounded border-2 border-gray-400 px-3 py-2 text-gray-500 focus:outline-none" />
    <div class="text-lg my-2 font-medium text-gray-500">Confirm Password</div>
    <input id="confirmPassword" type="password" placeholder="**********" class="w-full rounded border-2 border-gray-400 px-3 py-2 text-gray-500 focus:outline-none" />
    <div class="flex items-center justify-center">
        <button type="button" onclick="signup()" class="bg-green-600 w-full py-2 rounded-xl text-white my-4 hover:bg-[#006ad5] ease-in-out duration-500 cursor-pointer">Signup</button>
    </div>
    <a href="#/login" class="text-green-600 text-center flex items-center justify-center hover:text-[#006ad5] hover:underline">Already have an account? Login</a>
</form>
              </div>
          </div>
          <div class="flex items-center justify-center lg:h-screen w-full lg:w-[70%] overflow-hidden bg-white">
              <div class="flex-col flex items-center justify-center">
                  <a href="#/" class="hover:text-black text-green-600 text-5xl font-bold text-center">Welcome to TrekTeller</a>
                  <div class="my-2 text-gray-500 text-xl text-center">Marking Time with Memorable Journeys</div>
                  <div class="lg:w-[50%] w-[60%]">
                      <img class="" src="../img/signup.jpg"/>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- Signup Section ends -->
</div>`;
  loadPage(signup);
}
//login page
function LoginPage() {
  const login = `<div class="bg-cover bg-center bg-no-repeat min-h-screen" style="background-image: url('../src/img/bg-white.svg')">
  <!-- Login Section starts  -->
  <div class="flex items-center justify-center">
      <div class="flex lg:flex-row flex-col-reverse items-center justify-between w-full">
          <div class=" flex items-start justify-center bg-[#006ad5] h-screen w-full lg:w-[30%]">
              <div class="flex-col flex w-full items-center justify-center">
                  <a href="#/" class="w-[80%] my-16">
                      <img src="../img/logo.png" />
                  </a>
                  <div class="text-white text-2xl font-medium ">Login to TrekTeller</div>
                  <div class="text-xs text-gray-300">Credentials for demo</div>
                  <div class="text-xs text-gray-300">Username: dristibhugun</div>
                  <div class="text-xs text-gray-300">Password: dristi</div>
                  <form class="w-[80%] px-10 py-6 lg:py-12 bg-white shadow-2xl shadow-gray-800 rounded-xl my-8">
                      <div class="text-lg my-2 font-medium text-gray-500">Username</div>
                      <input id="loginUsername" required type="text" placeholder="username" class="w-full rounded border-2 border-gray-400 px-3 py-2 text-gray-500   focus:outline-none" />
                      <div class="text-lg my-2 font-medium text-gray-500">Password</div>
                      <input id="loginPassword" required type="password" placeholder="**********" class="w-full rounded border-2 border-gray-400 px-3 py-2 text-gray-500   focus:outline-none" />
                      <div class="flex items-center justify-center">
                          <button type="button" onclick="login()" class="bg-[#006ad5] w-full py-2 rounded-xl text-white my-4 hover:bg-green-600 ease-in-out duration-500 cursor-pointer">Login</button>
                      </div>
                      <a href="#/signup" class="text-gray-500 text-center flex items-center justify-center hover:text-green-600 hover:underline">Don't have an account? Signup</a>
                  </form>
              </div>
          </div>
          <div class="flex items-center justify-center h-screen w-full lg:w-[70%] overflow-hidden bg-white">
              <div class="flex-col flex items-center justify-center">
                  <a href="#/" class="hover:text-black text-[#006ad5] text-5xl font-bold text-center">Welcome to TrekTeller</a>
                  <div class="my-2 text-gray-500 text-xl text-center">Marking Time with Memorable Journeys</div>
                  <div class="lg:w-[40%] w-[60%]">
                      <img class="" src="../img/login.jpg"/>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- Login Section ends -->
</div>`;
  loadPage(login);
}
//dashboard page
function DashboardPage() {
  const dashboard = `  <div class="max-h-screen overflow-hidden">
  <!-- Header starts -->
   <nav class="flex items-center justify-center bg-cover bg-blue-900 h-16">
       <div class="flex items-center justify-center lg:my-0 my-4  rounded-lg lg:rounded-3xl lg:justify-between max-w-7xl w-full">
           <div class="w-[80%] lg:w-[25%] lg:py-0 py-4"><img src="../img/logo.png" /></div>
           <div class="flex items-center bg-white rounded overflow-hidden border">
              <input id="searchBar" class="px-2 h-8 py-1 focus:outline-none text-gray-600" type="text" placeholder="Search Posts" />
              <div onclick="search()" class="bg-white px-2 py-1 bg-white hover:bg-blue-900 hover:text-white rounded-tr rounded-br ease-in duration-400 cursor-pointer text-xl text-blue-900"><ion-icon class="" name="search-outline"></ion-icon></div>
            </div>
           <div class="hidden lg:flex items-center px-4 py-4 w-[50%] justify-between space-x-4 text-white text-xl">
               <a href="#/users" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Users</a>
               <a href="#/create-post" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Post a Story</a>
               <a href="#/chats" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Chats</a>
               <a href="#/profile" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Profile</a>
               <button type="button" onclick="logout()" class="bg-[#006ad5] px-4 py-1 rounded-xl hover:bg-cyan-700 ease-in-out duration-400 cursor-pointer">Logout</button>
           </div>
       </div>
   </nav>
  <!-- Header ends -->
  <!-- Dashboard Section starts  -->
  <div class="h-screen overflow-y-scroll scrollbar-hide flex-col flex lg:flex-row">
      <div class="bg-gray-100 lg:w-[20%] flex flex-col items-center p-2 justify-start px-6 lg:border-r-4 min-h-40 overflow-scroll scrollbar-hide lg:border-b-0 border-b-2 border-blue-900">
        <div class="font-medium my-2 text-blue-900">Search by budget</div>
        <div class="flex space-x-1">
          <input type="text" placeholder="1000" id="filter_budget" class="text-blue-900 w-[65%] border-gray-500 border-2 rounded-md px-2 focus:outline-none"/>
          <Button onclick="filterPostsByBudget()" class="bg-green-600 text-white px-2 py-1 rounded-md hover:bg-blue-900 ease-in duration-500">Filter</Button>
        </div>
        <div class="font-medium my-2 text-blue-900">Search by days</div>
        <div class="flex space-x-1">
          <input type="text" placeholder="5" id="filter_days" class="text-blue-900 w-[65%] border-gray-500 border-2 rounded-md px-2 focus:outline-none"/>
          <Button onclick="filterPostsByDays()" class="bg-yellow-600 text-white px-2 py-1 rounded-md hover:bg-blue-900 ease-in duration-500">Filter</Button>
        </div>
        <div class="font-medium my-2 text-blue-900 border-b-2 border-blue-900 w-full">Popular Locations</div>
        <div class="flex-wrap flex space-x-2">
  ${locations.map(location => `
    <div onclick="filterPostsByLocation('${location}')" class="font-medium my-2 text-white px-2 py-1 border-2 rounded-xl hover:bg-lime-800 bg-blue-900 ease-in duration-500 cursor-pointer">${location}</div>`).join('')}
</div>
        <div class="font-medium my-2 text-blue-900 border-b-2 border-blue-900 w-full">Sort By</div>
        <div class="flex-wrap flex space-x-2">
          <div onclick="sortPostsByMinLikes()" class="font-medium flex items-center my-2 text-green-800 cursor-pointer ease-in duration-500 hover:scale-105 px-2 py-1 border-2 rounded-xl border-green-800">
            <ion-icon name="arrow-up-outline"></ion-icon>
            <div>Likes</div>
          </div>
          <div onclick="sortPostsByMaxLikes()" class="font-medium flex items-center my-2 text-fuchsia-600 cursor-pointer ease-in duration-500 hover:scale-105 px-2 py-1 border-2 rounded-xl border-fuchsia-600">
            <ion-icon name="arrow-down-outline"></ion-icon>
            <div>Likes</div>
          </div>
          <div onclick="sortPostsByMaxComments()" class="font-medium flex items-center my-2 text-violet-600 cursor-pointer ease-in duration-500 hover:scale-105 px-2 py-1 border-2 rounded-xl border-violet-600">
            <ion-icon name="arrow-up-outline"></ion-icon>
            <div>Comments</div>
          </div>
          <div onclick="sortPostsByMinLikes()" class="font-medium flex items-center my-2 text-yellow-600 cursor-pointer ease-in duration-500 hover:scale-105 px-2 py-1 border-2 rounded-xl border-yellow-600">
            <ion-icon name="arrow-down-outline"></ion-icon>
            <div>Comments</div>
          </div>
          <div onclick="sortPostsByMaxBudget()" class="font-medium flex items-center my-2 text-lime-600 cursor-pointer ease-in duration-500 hover:scale-105 px-2 py-1 border-2 rounded-xl border-lime-600">
            <ion-icon name="arrow-up-outline"></ion-icon>
            <div>Budget</div>
          </div>
          <div onclick="sortPostsByMinBudget()" class="font-medium flex items-center my-2 text-blue-600 cursor-pointer ease-in duration-500 hover:scale-105 px-2 py-1 border-2 rounded-xl border-blue-600">
            <ion-icon name="arrow-down-outline"></ion-icon>
            <div>Budget</div>
          </div>
          <div onclick="sortPostsByMaxDays()" class="font-medium flex items-center my-2 text-red-700 cursor-pointer ease-in duration-500 hover:scale-105 px-2 py-1 border-2 rounded-xl border-red-700">
            <ion-icon name="arrow-up-outline"></ion-icon>
            <div>Days</div>
          </div>
          <div onclick="sortPostsByMinDays()" class="font-medium flex items-center my-2 text-yellow-700 cursor-pointer ease-in duration-500 hover:scale-105 px-2 py-1 border-2 rounded-xl border-yellow-700">
            <ion-icon name="arrow-down-outline"></ion-icon>
            <div>Days</div>
          </div>
        </div>
        </div>
      <div id="posts-container" class="bg-gray-100 pt-4 pb-14 lg:w-[80%] min-h-screen flex flex-wrap items-center justify-center overflow-y-scroll scrollbar-hide">
      </div>
  </div>
  
  
  <!-- Dashboard Section ends -->
</div>`;
  loadPage(dashboard);
  displayUserPosts();

}

//users page
function Users() {
    const users = `  <div class="max-h-screen overflow-hidden">
    <!-- Header starts -->
     <nav class="flex items-center justify-center bg-cover bg-blue-900 h-16">
         <div class="flex items-center justify-center lg:my-0 my-4  rounded-lg lg:rounded-3xl lg:justify-between max-w-7xl w-full">
             <a href="#/dashboard" class="w-[80%] lg:w-[25%] lg:py-0 py-4"><img src="../img/logo.png" /></a>
             <div class="flex items-center bg-white rounded overflow-hidden border">
              <input id="searchUserBar" class="px-2 h-8 py-1 focus:outline-none text-gray-600" type="text" placeholder="Search User" />
              <div onclick="searchUsers()" class="bg-white px-2 py-1 bg-white hover:bg-blue-900 hover:text-white rounded-tr rounded-br ease-in duration-500 cursor-pointer text-xl text-blue-900"><ion-icon class="" name="search-outline"></ion-icon></div>
            </div>
             <div class="hidden lg:flex items-center px-4 py-4 w-[50%] justify-between space-x-4 text-white text-xl">
                 <a href="#/dashboard" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Dashboard</a>
                 <a href="#/create-post" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Post a Story</a>
                 <a href="#/chats" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Chats</a>
                 <a href="#/profile" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Profile</a>
                 <button type="button" onclick="logout()" class="bg-[#006ad5] px-4 py-1 rounded-xl hover:bg-cyan-700 ease-in-out duration-400 cursor-pointer">Logout</button>
             </div>
         </div>
     </nav>
    <!-- Header ends -->
    <!-- Users Section starts  -->
    <div class="h-screen flex items-center justify-center overflow-y-scroll scrollbar-hide py-6">
        <div id="users-container" class="pt-4 mt-14 space-y-4 pb-14 lg:w-[60%] min-h-screen flex-col items-start justify-start overflow-y-scroll scrollbar-hide">
          
        </div>
    </div>
    
    
    <!-- Users Section ends -->
  </div>`
    loadPage(users);
}

//function to display user profile
async function usersProfile() {
    // get the current user
    const tokens = window.location.href.split('/');
    const userId = tokens[tokens.length - 1];
    const userData = users.find(user => user._id === userId);
    const profile = `  <div class="max-h-screen ">
    <!-- Header starts -->
     <nav class="flex items-center justify-center bg-cover bg-blue-900 h-16">
         <div class="flex items-center justify-center lg:my-0 my-4  rounded-lg lg:rounded-3xl lg:justify-between max-w-7xl w-full">
             <a href="#/dashboard" class="w-[80%] lg:w-[25%] lg:py-0 py-4"><img src="../img/logo.png" /></a>
             <div class="hidden lg:flex items-center px-4 py-4 w-[50%] justify-between space-x-4 text-white text-xl">
             <a href="#/dashboard" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Dashboard</a>
                 <a href="#/create-post" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Post a Story</a>
                 <a href="#/chats" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Chats</a>
                 <a href="#/profile" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Profile</a>
                 <button type="button" onclick="logout()" class="bg-[#006ad5] px-4 py-1 rounded-xl hover:bg-cyan-700 ease-in-out duration-400 cursor-pointer">Logout</button>
             </div>
         </div>
     </nav>
    <!-- Header ends -->
    <div class="p-4 w-full">
        <div class=" md:w-1/2 mx-auto bg-white p-8 h-auto shadow-md rounded-md">
            <h2 class="text-2xl text-center font-bold mb-4">Profile</h2>
            <div class="flex flex-col items-center justify-center">
            <img id="profilePic" class="w-40 h-40 bg-gray-300 rounded-full" src="${userData?.profilePic || 'default-profile-pic.jpg'}" alt="No picture" />
            <a href="#/chats" class="bg-blue-900 px-2 py-1 my-2 rounded text-white hover:bg-green-700 ease-in-out duration-500 cursor-pointer">Message</a>
            <div class="shadow-xl p-4 my-6 rounded-xl bg-gray-100 w-1/2 text-center">${userData?.bio || 'Add Bio'}</div>
            <div class="flex items-center justify-between w-3/4 border-b-2 border-gray-500">
                <span class="text-lg font-medium text-gray-600">Username:</span>
                <span>${userData?.username || 'Add Username'}</span>
            </div>
            <div class="flex items-center justify-between bg-gray-300 w-3/4 border-b-2 border-gray-500">
                <span class="text-lg font-medium text-gray-600">First Name:</span>
                <span>${userData?.firstName || 'Add First Name'}</span>
            </div>
            <div class="flex items-center justify-between w-3/4 border-b-2 border-gray-500">
                <span class="text-lg font-medium text-gray-600">Last Name:</span>
                <span>${userData?.lastName || 'Add Last Name'}</span>
            </div>
            <div class="flex items-center justify-between bg-gray-300 w-3/4 border-b-2 border-gray-500">
                <span class="text-lg font-medium text-gray-600">Email:</span>
                <span>${userData?.email || 'Add Email'}</span>
            </div>
        </div>
        
    </div>
    
  </div>
  `
    loadPage(profile);
}
    



async function PostDetailsPage(){
    // get the current url
    const tokens = window.location.href.split('/');
    const postId = tokens[tokens.length - 1];
    const post = posts.find(post => post._id === postId);
    const postDetails = `
    <div class="max-h-screen overflow-hidden">
    <!-- Header starts -->
     <nav class="flex items-center justify-center bg-cover bg-blue-900 h-16">
         <div class="flex items-center justify-center lg:my-0 my-4  rounded-lg lg:rounded-3xl lg:justify-between max-w-7xl w-full">
             <a href="#/dashboard" class="w-[80%] lg:w-[25%] lg:py-0 py-4"><img src="../img/logo.png" /></a>
             <div class="hidden lg:flex items-center px-4 py-4 w-[50%] justify-between space-x-4 text-white text-xl">
                <a href="#/dashboard" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Dashboard</a>
                 <a href="#/create-post" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Post a Story</a>
                 <a href="#/chats" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Chats</a>
                 <a href="#/profile" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Profile</a>
                 <button type="button" onclick="logout()" class="bg-[#006ad5] px-4 py-1 rounded-xl hover:bg-cyan-700 ease-in-out duration-400 cursor-pointer">Logout</button>
             </div>
         </div>
     </nav>
    <!-- Header ends -->
    <!-- Post Section starts  -->
    <div class="h-screen overflow-scroll flex-col items-center justify-start flex  bg-gray-200 pb-14">
        <div class="lg:w-1/2 text-center flex flex-col items-center justify-center bg-gray-200 px-4">
        <div class="bg-gray-100 h-60 w-full overflow-hidden">
            <img src="${post.featured_image}" class="h-full w-full object-cover" />
            </div>
            <div class="text-5xl font-bold my-4">${post.title}</div>
            <div class="flex items-center justify-around text-gray-500 font-medium space-x-4 my-2">
                <div class="text-blue-900">${post.posted_by}</div>
                <div class="">${formatTime(post.date)}</div>
            </div>
            <div class="flex space-x-4 w-full items-center justify-center my-4">
                <div onclick="likePost()" class="text-red-600 hover:text-green-600"><ion-icon class="text-2xl text-red-600" name="thumbs-up-outline"></ion-icon> ${post.likes}</div>
                <div class="bg-green-900 text-white px-3 py-1 rounded shadow-xl">$ ${post.budget}</div>
                <div class="bg-yellow-700 text-white px-3 py-1 rounded shadow-xl">${post.location}</div>
                <div class="bg-blue-900 text-white px-3 py-1 rounded shadow-xl">${post.days} days</div>
            </div>
            <div>${post.description}</div>
            <div class="flex space-x-4 w-full items-center justify-center my-2">
                    <input type="text" id="commentBox" class="w-1/2 border-2 border-gray-300 rounded-lg p-2 focus:outline-none" placeholder="Add a comment" />
                    <button onclick="comment()" class="bg-blue-900 text-white px-2 py-1 rounded-lg hover:bg-green-700 ease-in-out duration-400">Comment</button>
                </div>
                <div class="flex flex-col items-center justify-start w-full">
                ${post.comments.map(comment => `
                <div class="flex w-full items-center justify-between border-b-2 border-gray-500">
                <div class="text-xl text-gray-600">${comment.text}</div>
                <div class="text-blue-700 text-sm">${comment.username}</div>
                </div>
                `
                ).join('')}</div>
        </div>
    </div>
    
    
    <!-- Post Section ends -->
  </div>
    `;
    loadPage(postDetails);
}

//create new post page
function CreatePostPage() {
  const createPost = `    <div class="max-h-screen overflow-hidden">
  <!-- Header starts -->
   <nav class="flex items-center justify-center bg-cover bg-blue-900 h-16">
       <div class="flex items-center justify-center lg:my-0 my-4  rounded-lg lg:rounded-3xl lg:justify-between max-w-7xl w-full">
           <a href="#/dashboard" class="w-[80%] lg:w-[25%] lg:py-0 py-4"><img src="../img/logo.png" /></a>
           <div class="hidden lg:flex items-center px-4 py-4 w-[50%] justify-between space-x-4 text-white text-xl">
               <a href="#/dashboard" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Dashboard</a>
               <a href="#/create-post" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Post a Story</a>
               <a href="#/chats" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Chats</a>
               <a href="#/profile" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Profile</a>
               <button type="button" onclick="logout()" class="bg-[#006ad5] px-4 py-1 rounded-xl hover:bg-cyan-700 ease-in-out duration-400 cursor-pointer">Logout</button>
           </div>
       </div>
   </nav>
  <!-- Header ends -->
   <div class="flex items-center justify-center">
      <div class="lg:w-1/2 shadow-xl rounded-xl my-6 py-8 px-6">
          <form class="flex flex-col space-y-4">
              <input id="title" type="text" class="w-full p-2 rounded-xl border-2 border-gray-300 text-gray-500 focus:outline-none" placeholder="Title of post" />
              <div class="flex items-center justify-center space-x-4">
                  <input id="days" type="number" class="w-1/2 p-2 rounded-xl border-2 border-gray-300 text-gray-500 focus:outline-none" placeholder="Days"/>
                  <input id="budget" type="number" class="w-1/2 p-2 rounded-xl border-2 border-gray-300 text-gray-500 focus:outline-none" placeholder="Budget in $"/>
              </div>
              <div class="flex items-center justify-center space-x-4">
                  <input id="featured_image" type="file" accept=".png, .jpg, .jpeg" class="w-1/2 p-2 rounded-xl border-2 border-gray-300 text-gray-500 focus:outline-none"/>
                  <input id="location" type="text" class="w-1/2 p-2 rounded-xl border-2 border-gray-300 text-gray-500 focus:outline-none" placeholder="Location"/>
              </div>
              <textarea id="description" class="w-full p-2 rounded-xl border-2 border-gray-300 text-gray-500 focus:outline-none scrollbar-hide" placeholder="Description"></textarea>
              <div class="flex items-center justify-center">
                  <button onclick="createNewPost()" type="button" class="bg-[#006ad5] px-6 py-1 text-white text-xl rounded-xl hover:bg-green-700 ease-in-out duration-500 cursor-pointer">Post my story</button>
              </div>
          </form>

      </div>
   </div>
</div>`;
  loadPage(createPost);
}
//profile page
function ProfilePage() {
    const profile = `<div class="max-h-screen ">
    <!-- Header starts -->
     <nav class="flex items-center justify-center bg-cover bg-blue-900 h-16">
         <div class="flex items-center justify-center lg:my-0 my-4  rounded-lg lg:rounded-3xl lg:justify-between max-w-7xl w-full">
             <a href="#/dashboard" class="w-[80%] lg:w-[25%] lg:py-0 py-4"><img src="../img/logo.png" /></a>
             <div class="hidden lg:flex items-center px-4 py-4 w-[50%] justify-between space-x-4 text-white text-xl">
             <a href="#/dashboard" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Dashboard</a>
                 <a href="#/create-post" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Post a Story</a>
                 <a href="#/chats" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Chats</a>
                 <a href="#/profile" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Profile</a>
                 <button type="button" onclick="logout()" class="bg-[#006ad5] px-4 py-1 rounded-xl hover:bg-cyan-700 ease-in-out duration-400 cursor-pointer">Logout</button>
             </div>
         </div>
     </nav>
    <!-- Header ends -->
    <div class="p-4 w-full">
        <div class=" md:w-1/2 mx-auto bg-white p-8 h-auto shadow-md rounded-md">
            <div>
                <a href="#/editProfile" class="text-lg text-right text-blue-700 font-medium cursor-pointer hover:underline">Edit profile</a>
                <ion-icon name="pencil-outline" class="text-blue-900 text-xl"></ion-icon>
            </div>
            <h2 class="text-2xl text-center font-bold mb-4">Profile</h2>
            <div class="flex flex-col items-center justify-center">
            <img id="profilePic" class="w-40 h-40 bg-gray-300 rounded-full" src="${userProfile?.profilePic || 'default-profile-pic.jpg'}" alt="No picture" />
            <div class="shadow-xl p-4 my-6 rounded-xl bg-gray-100 w-1/2 text-center">${userProfile?.bio || 'Add Bio'}</div>
            <div class="flex items-center justify-between w-3/4 border-b-2 border-gray-500">
                <span class="text-lg font-medium text-gray-600">Username:</span>
                <span>${userProfile?.username || 'Add Username'}</span>
            </div>
            <div class="flex items-center justify-between bg-gray-300 w-3/4 border-b-2 border-gray-500">
                <span class="text-lg font-medium text-gray-600">First Name:</span>
                <span>${userProfile?.firstName || 'Add First Name'}</span>
            </div>
            <div class="flex items-center justify-between w-3/4 border-b-2 border-gray-500">
                <span class="text-lg font-medium text-gray-600">Last Name:</span>
                <span>${userProfile?.lastName || 'Add Last Name'}</span>
            </div>
            <div class="flex items-center justify-between bg-gray-300 w-3/4 border-b-2 border-gray-500">
                <span class="text-lg font-medium text-gray-600">Email:</span>
                <span>${userProfile?.email || 'Add Email'}</span>
            </div>
        </div>
        
    </div>
    <div class="flex w-full flex-col items-center justify-start space-y-4" id="user-posts-container">
    <div class="text-xl text-gray-600 font-bold mt-4">My Posts</div>
        <div class=" w-[90%] px-2 lg:w-1/2 grid grid-cols-1 lg:grid-cols-3 justify-center gap-4">
            ${userPosts.map(post => `
                <a href="#/post/${post._id}" class="w-full">
                    <div class="bg-white rounded-md shadow-xl flex flex-col items-center overflow-hidden">
                        <div class="w-full h-60 overflow-hidden">
                        <img src="${post.featured_image}" class="w-full h-full object-cover" alt="${post.title}">
                        </div>
                        <div class="text-gray-500 font-medium mt-2 px-4">
                        <div class="text-lg font-bold text-blue-900">${post.title}</div>
                        <div>Location: ${post.location}</div>
                        <div class="text-green-600">Budget: $${post.budget}</div>
                        <div class="text-fuchsia-600">Days: ${post.days}</div>
                        <div class="text-red-600">Likes: ${post.likes}</div>
                        <div class="text-yellow-600">Comments: ${post.comments.length}</div>
                        </div>
                    </div>
                </a>
            `).join('')}

        </div>

    </div>

</div>`
    loadPage(profile);
}
//edit profile page
function EditProfilePage() {
    const editProfile = `    <div class="max-h-screen overflow-hidden">
    <!-- Header starts -->
    <nav class="flex items-center justify-center bg-cover bg-blue-900 h-16">
      <div
        class="flex items-center justify-center lg:my-0 my-4 rounded-lg lg:rounded-3xl lg:justify-between max-w-7xl w-full"
      >
        <a href="#/dashboard" class="w-[80%] lg:w-[25%] lg:py-0 py-4"
          ><img src="../img/logo.png"
        /></a>
        <div
          class="hidden lg:flex items-center px-4 py-4 w-[50%] justify-between space-x-4 text-white text-xl"
        >
        <a href="#/dashboard" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Dashboard</a>
          <a
            href="#/create-post"
            class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer"
            >Post a Story</a
          >
          <a
            href="#/chats"
            class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer"
            >Chats</a
          >
          <a
            href="#/profile"
            class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer"
            >Profile</a
          >
          <button
            type="button"
            onclick="logout()"
            class="bg-[#006ad5] px-4 py-1 rounded-xl hover:bg-cyan-700 ease-in-out duration-400 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
    <!-- Header ends -->
    <div class="p-4">
      <div class="lg:w-1/2 mx-auto bg-white p-8 h-auto shadow-md rounded-md">
      <a href="#/profile" class="text-sm text-right text-blue-700 font-medium cursor-pointer hover:underline">Back</a>
          <h2 class="text-2xl text-center font-bold mb-4">Profile</h2>
          <div class="flex flex-col items-start justify-center">
              <div>
                  <div class="text-lg mx-2 font-medium text-gray-600">Profile Pic:</div>
                  <input id="profilePic" type="file" accept=".png, .jpg, .jpeg" class="border-2 border-gray-300 rounded-md p-2" />
              </div>
              <div>
                  <div class="text-lg mx-2 font-medium text-gray-600">Username:</div>
                  <input type="text" class="border-2 border-gray-300 rounded-md p-2" value="${userProfile.username}" disabled />
              </div>
              <div>
                  <div class="text-lg mx-2 font-medium text-gray-600">First Name:</div>
                  <input id="firstName" type="text" class="border-2 border-gray-300 rounded-md p-2" value="${userProfile.firstName || ''}" />
              </div>
              <div>
                  <div class="text-lg mx-2 font-medium text-gray-600">Last Name:</div>
                  <input id="lastName" type="text" class="border-2 border-gray-300 rounded-md p-2" value="${userProfile.lastName || ''}" />
              </div>
              <div>
                  <div class="text-lg mx-2 font-medium text-gray-600">Email:</div>
                  <input id="email" type="text" class="border-2 border-gray-300 rounded-md p-2" value="${userProfile.email || ''}" />
              </div>
              <div>
                  <div class="text-lg mx-2 font-medium text-gray-600">Bio:</div>
                  <textarea id="bio" class="border-2 border-gray-300 rounded-md p-2" rows="4" cols="50">${userProfile.bio || ''}</textarea>
              </div>
              <button type="button" onclick="updateProfile()" class="bg-blue-800 text-white px-4 py-1 rounded-xl hover:bg-cyan-700 ease-in-out duration-500 cursor-pointer">
                  Update Profile
              </button>
          </div>
      </div>
  </div>
  
  </div>`;
    loadPage(editProfile);
}

//chats page
function ChatsPage() {
    const chats = `<div class="max-h-screen overflow-hidden">
    <!-- Header starts -->
     <nav class="flex items-center justify-center bg-cover bg-blue-900 h-16">
         <div class="flex items-center justify-center lg:my-0 my-4  rounded-lg lg:rounded-3xl lg:justify-between max-w-7xl w-full">
             <a href="#/dashboard" class="w-[80%] lg:w-[25%] lg:py-0 py-4"><img src="../img/logo.png" /></a>
             <div class="hidden lg:flex items-center px-4 py-4 w-[50%] justify-between space-x-4 text-white text-xl">
             <a href="#/dashboard" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Dashboard</a>
                 <a href="#/create-post" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Post a Story</a>
                 <a href="#/chats" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Chats</a>
                 <a href="#/profile" class="hover:text-gray-300 hover:border-b hover:border-gray-300 ease-in-out duration-400 cursor-pointer">Profile</a>
                 <button type="button" onclick="logout()" class="bg-[#006ad5] px-4 py-1 rounded-xl hover:bg-cyan-700 ease-in-out duration-400 cursor-pointer">Logout</button>
             </div>
         </div>
     </nav>
    <!-- Header ends -->
    <div class="h-screen flex items-center justify-center overflow-y-scroll scrollbar-hide ">
        <div id="" class="w-full max-h-screen flex items-start justify-start">
            <div id="chats-container" class="h-screen pb-16 w-[30%] bg-white text-white flex items-center justify-start flex-col overflow-y-scroll scrollbar-hide border-r-2 border-blue-900">
            </div>
            <div id="" class="h-screen w-[70%] pb-16 flex flex-col items-end justify-end ">
                <div id="messageElement" class="w-full h-full flex flex-col items-end justify-end space-y-4 pb-16">
                    
                </div>
                    
                    <div class="flex w-full bg-blue-900 items-center justify-between">
                        <div class="flex w-full"><input id="messageField" required class="w-full focus:outline-none border-2 border-blue-900 rounded-md px-4 py-4" type="text" placeholder="Enter your message.."/></div>
                        <button onclick="sendMessage()" class="text-xl bg-blue-900 text-white rounded px-2 py-4 hover:bg-green-600">Send</button>
                    </div>
            </div>
          
        </div>
    </div>
</div>  `
    loadPage(chats);
}


//function for signup
function signup() {
  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match.');
      return;
  }

  fetch('/M00846514/signup', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
  })
  .then(response => response.json())
  .then(data => {
      // Redirect to the login page
      alert('Signup successful! Please login.');
      window.location.hash = '#/login';
  })
  .catch(error => {
      console.error('Signup Error:', error);
  });
}
//function for login
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    fetch('/M00846514/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed. Invalid credentials.');
        }
        return response.json();
    })
    .then(data => {
        // Get token from data
        const accessToken = data.token;
        if (accessToken) {
            // Save token in local storage
            localStorage.setItem('accessToken', accessToken);
            // Fetch user profile
            fetchUserProfile();
            // Redirect to the dashboard page
            window.location.hash = '#/dashboard';
        } else {
            throw new Error('Token not received in the login response.');
        }
    })
    .catch(error => {
        console.error('Login error:', error.message);
        alert('Login failed. Please check your credentials.');
    });
}

//logout function
function logout() {
    fetch('/M00846514/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Logout failed.');
        }
        return response.json();
    })
    .then(data => {
        // Remove token from local storage
        localStorage.removeItem('accessToken');
        // Redirect to the login page
        window.location.href = '#/login';
    })
    .catch(error => {
        console.error('Logout error:', error.message);
        alert('Logout failed. Please try again.');
    });
  }
  
//function to get all posts

async function getPosts() {
  try {
      const response = await fetch('/M00846514/posts', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });
      posts = await response.json();
    //   console.log('Posts:', posts);
      return posts;

  } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
  }
}

//funnction load posts
async function handleHashChange() {
    const currentHash = window.location.hash;
  
    if (currentHash === '#/dashboard') {
      try {
        if(posts){
            posts = await getPosts();
            getUsers();
            getLocations();
        }
        renderPosts(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    } 
    if (currentHash === '#/users') {
      try {
        if(users){
            users = await getUsers();
        }
        renderUsers(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    if (currentHash === '#/chats') {
      try {
        if(chats){
            chats = await getChats();
            chatSidebar= filterChats(chats, users);
        }
        renderChats(chatSidebar);
        
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    }
  }

//render posts in post-container div in dashboard page
function renderPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';
  
    posts.forEach(post => {
      const postElement = createPostElement(post);
      postsContainer.appendChild(postElement);
    });
    
  }

//render users in users-container div in users page
function renderUsers(users) {
    const usersContainer = document.getElementById('users-container');
    usersContainer.innerHTML = '';
  
    users.forEach(user => {
      const userElement = createUserElement(user);
      usersContainer.appendChild(userElement);
    });
    
  }

//render chats in chats-container div in chats page
function renderChats(chatSidebar) {
    const chatsContainer = document.getElementById('chats-container');
    chatsContainer.innerHTML = '';
  
    chatSidebar.forEach(chat => {
      const chatElement = createChatElement(chat);
      chatsContainer.appendChild(chatElement);
    });
}

//render chats in messages-container div in chats page
function renderMessages(senderMessages, receiverMessages) {
    const messageElement = document.getElementById('messageElement');
    messageElement.innerHTML = '';
    const messagesElement = createMessageElement(senderMessages, receiverMessages);
    messageElement.appendChild(messagesElement);
}

function createMessageElement(senderMessages, receiverMessages, username) {
    const containerElement = document.createElement('div');
    containerElement.className = 'relative h-full w-full';

    // Add username container
    const usernameContainer = document.createElement('div');
    usernameContainer.className = 'border-b-2 border-blue-900 py-4 fixed top-16 bg-white uppercase text-blue-900 font-medium flex w-full px-4 font-medium text-xl';
    usernameContainer.id = 'receiverUsername';
    usernameContainer.textContent = `${senderMessages[0].sender === username ? senderMessages[0].receiver : senderMessages[0].sender}`;
    containerElement.appendChild(usernameContainer);

    const messageElement = document.createElement('div');
    messageElement.className = 'h-full w-full flex flex-col space-y-4 overflow-y-scroll scrollbar-hide pb-16'; // Add bottom padding for the scroll bar
    containerElement.appendChild(messageElement);

    // Combine sender and receiver messages into a single array
    const allMessages = senderMessages.concat(receiverMessages);

    // Sort messages by time in ascending order
    allMessages.sort((a, b) => {
        return new Date(a.time) - new Date(b.time);
    });

    // Iterate over messages
    allMessages.forEach(message => {
        const messageDiv = document.createElement('div');
        const isSender = message.sender === username;
        messageDiv.className = isSender ? 'flex items-center justify-end w-full px-4' : 'flex items-center justify-start w-full px-4';
        messageDiv.innerHTML = `
            <div class="p-4 rounded-xl ${isSender ? 'bg-blue-900 text-white' : 'bg-green-700 text-white'} max-w-[60%]">
                <div class="text-lg">${message.data}</div>
                <div class="text-xs ${isSender ? 'text-right' : 'text-left'}">${formatTime(message.time)}</div>
            </div>
        `;
        messageElement.appendChild(messageDiv);
    });

    return containerElement;
}


let filteredMessages = [];
//function which will filter from chats array where username == clicked username
function filterMessages(chats, clickedUsername) {
    // Check if chats is an array
    if (!Array.isArray(chats)) {
        console.error('Chats is not an array.');
        return [];
    }

    const filteredMessages = chats.filter((chat) => {
        return chat.sender === clickedUsername || chat.receiver === clickedUsername;
    });

    // Sort filteredMessages by time in ascending order
    filteredMessages.sort((a, b) => {
        return new Date(a.time) - new Date(b.time);
    });

    return filteredMessages;
}

let senderMessages = [];
let receiverMessages = [];

// Get messages where the sender is the clicked username
function getSenderMessages(filteredMessages, clickedUsername) {
    senderMessages = filteredMessages.filter((message) => {
        return message.sender === clickedUsername;
    });
    console.log('Sender Messages:', senderMessages)
    return senderMessages;
}

// Get messages where the receiver is the current user
function getReceiverMessages(filteredMessages, currentUsername) {
    receiverMessages = filteredMessages.filter((message) => {
        return message.receiver === currentUsername;
    });
    console.log('Receiver Messages:', receiverMessages)
    return receiverMessages;
}

//create chat element
function createChatElement(chatSidebar) {
    const chatElement = document.createElement('div');
    chatElement.onclick = () => {
        const clickedUsername = `${chatSidebar.username}`;
        const filteredMessages = filterMessages(chats, clickedUsername);
        getSenderMessages(filteredMessages, clickedUsername);
        getReceiverMessages(filteredMessages, clickedUsername);
        renderMessages(senderMessages, receiverMessages);
    }
    chatElement.className = 'my-2 flex items-center justify-start space-x-4 border-b-2 w-full px-6 border-blue-900 hover:shadow-xl py-2 ease-in duration-500 cursor-pointer';
    chatElement.innerHTML = `
    <div class="h-16 w-20 rounded-full bg-blue-900 overflow-hidden"><img class="h-full w-full rounded-full" src="${chatSidebar.profilePic}" /></div>
    <div class="flex w-full text-gray-600 items-center justify-between">
        <div>
            <div class="font-medium text-xl">${chatSidebar.username}</div>
            <div>${chatSidebar.data}</div>
        </div>
        <div class="text-xs">${formatTime(chatSidebar.time)}</div>
        </div>
`
    return chatElement;
}

//function to format time
function formatTime(timeString) {
    const time = new Date(timeString);
    const formattedTime = time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const formattedDate = time.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
    return formattedTime + ' ' + formattedDate;
}

//create user element
function createUserElement(users) {
  const userElement = document.createElement('a');
  userElement.href = ``;
  userElement.className = 'h-40 w-[90%] flex items-center my-2 justify-between px-2 shadow-xl rounded-xl';
  userElement.innerHTML = `
  <div class="h-32 w-32 bg-gray-200 rounded-full">
    <img class="h-full w-full rounded-full" src="${users.profilePic}" />
  </div>
  <div class="flex items-center justify-between px-6 w-full">
    <div class="text-xl text-gray-600 font-medium">${users.username}</div>
    <div class="text-gray-500 font-medium">${users.firstName} ${users.lastName}</div>
    <a href="#/profile/${users._id}" class="bg-blue-900 px-2 py-1 text-white rounded-lg hover:bg-yellow-600 ease-in duration-500 cursor-pointer">View Profile</a>
    <a href="#" class="bg-green-700 px-2 py-1 text-white rounded-lg hover:bg-yellow-600 ease-in duration-500 cursor-pointer">Message</a>
  </div>
  `;

  return userElement;
}

//create post element
function createPostElement(post) {
  const postElement = document.createElement('a');
  postElement.href = `#/post/${post._id}`;
  postElement.className = 'w-[80%] lg:w-1/4 shadow-lg overflow-hidden rounded-2xl m-2 flex flex-col items-center justify-center';
  postElement.innerHTML = `
      <div class="w-full h-60 overflow-hidden">
          <img class="w-full h-full object-cover" src="${post.featured_image}" alt="${post.title}">
      </div>
      <div class="w-full bg-white flex flex-col items-start justify-center px-4 py-1">
          <div class="flex items-center justify-between w-full">
              <div class="text-md font-bold text-blue-900">${post.posted_by}</div>
              <div class="flex space-x-2">
                  <div class="flex items-center space-x-2">
                      <ion-icon name="heart-outline" class="text-2xl text-red-600"></ion-icon>
                      <div class="text-red-600 font-bold text-md">${post.likes}</div>
                  </div>
                  <div class="flex items-center space-x-2">
                      <ion-icon name="chatbubble-ellipses-outline" class="text-2xl text-yellow-600"></ion-icon>
                      <div class="text-yellow-600 font-bold text-md">${post.comments.length}</div>
                  </div>
              </div>
          </div>
          <div class="text-xl font-bold text-gray-500 hover:text-blue-900 ease-in-out duration-400">${post.title}</div>
          ${post.description.split(' ').slice(0, 10).join(' ')}${post.description.split(' ').length > 10 ? '...' : ''}
          <div class="flex w-full justify-between items-center space-x-2 my-2">
                <div class="text-green-600 font-bold text-md">$ ${post.budget}</div>
                <div class="text-yellow-600 font-bold text-md">${post.days} days</div>
                <div class="text-white bg-blue-900 px-2 py-1 rounded">${post.location}</div>
          </div>
      </div>
  `;

  return postElement;
}


//function to create new post
async function createNewPost() {
    try {
      const posted_by = userProfile.username;
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const location = document.getElementById('location').value;
      const budget = parseInt(document.getElementById('budget').value, 10);
      const days = parseInt(document.getElementById('days').value, 10);
  
      const fileInput = document.getElementById('featured_image');
      let imagePath = null;
  
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
  
        const formData = new FormData();
        formData.append('image', file);
        // Upload the image to /img/upload
        const imageUploadResponse = await fetch('/M00846514/upload', {
          method: 'POST',
          body: formData,
        });
  
        const imageUploadResult = await imageUploadResponse.json();
        imagePath = imageUploadResult.featured_image;
        console.log('Image uploaded:', imagePath);
      }
  
      const postData = {
        posted_by: posted_by,
        title: title,
        featured_image: imagePath, 
        description: description,
        location: location,
        budget: budget,
        days: days,
      };
  
      const createPostResponse = await fetch('/M00846514/newPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
  
      const newPost = await createPostResponse.json();
      alert('Post created successfully!');
      window.location.hash = '#/dashboard';  
    } catch (error) {
      console.error('Error creating new post:', error);
    }
  }
  
//function to fetch user profile
async function fetchUserProfile() {
    try {
        // get accessToken from localStorage
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
            throw new Error('Access token not found. User may not be authenticated.');
        }

        const response = await fetch('/M00846514/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            credentials: 'include',
        });
        
        userProfile = await response.json();
        username = `${userProfile.username}`;
        if (!response.ok) {
            throw new Error(`Failed to fetch profile. Status: ${response.status}`);
        }


    } catch (error) {
        console.error('Error fetching profile:', error);
    }
}
let userProfile;

// Update Profile by fetching updateProfile api
async function updateProfileForm() {
    const email = document.getElementById('email').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const bio = document.getElementById('bio').value;
    const profilePic = document.getElementById('profilePic').value;

    const profileData = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        bio: bio,
        profilePic: profilePic,
    };

    try {
        const response = await fetch('/M00846514/updateProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(profileData),
        });

        if (!response.ok) {
            throw new Error('Failed to update profile.');
        }

        const updatedProfile = await response.json();
        console.log('Updated profile:', updatedProfile);
        alert('Profile updated successfully!');
        window.location.hash = '#/profile';
    } catch (error) {
        console.error('Error updating profile:', error);
    }
}
//function to update profile
async function updateProfile() {
    const profilePic = document.getElementById('profilePic').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;

    //try to fetch /M00846514/upload to upload the profilePic
    let imagePath = null;
    if (profilePic) {
        const fileInput = document.getElementById('profilePic');
        const file = fileInput.files[0];
        const formData = new FormData();
        formData.append('image', file);
        const imageUploadResponse = await fetch('/M00846514/upload', {
            method: 'POST',
            body: formData,
        });
        const imageUploadResult = await imageUploadResponse.json();
        imagePath = imageUploadResult.featured_image;
    }

    const profileData = {
        profilePic: imagePath,
        firstName: firstName,
        lastName: lastName,
        email: email,
        bio: bio,
    };

    try {
        const response = await fetch('/M00846514/updateProfile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify(profileData),
        });

        if (!response.ok) {
            throw new Error('Failed to update profile.');
        }

        const updatedProfile = await response.json();
        console.log('Updated profile:', updatedProfile);
        alert('Profile updated successfully!');
        await fetchUserProfile();
        window.location.hash = '#/profile';

    } catch (error) {
        console.error('Error updating profile:', error);
    }
}

//function for comment
async function comment(){
    postId = window.location.href.split('/').pop();
    username = userProfile.username;
    text = document.getElementById('commentBox').value;
    try {
        const response = await fetch('/M00846514/newComment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ postId, username, text })
        });
        const data = await response.json();
        alert('Comment added successfully');
      } catch (error) {
        console.error(error);
      }
}

//function for like
async function likePost(){
    postId = window.location.href.split('/').pop();
    try {
        const response = await fetch('/M00846514/likePost', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ postId })
        });
        const data = await response.json();
        alert('Post liked successfully');
        } catch (error) {
        console.error(error);
        }
}

//function to display user posts
let userPosts;
async function displayUserPosts(){
    try {
        const response = await fetch('/M00846514/myPosts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
        });
        userPosts = await response.json();
        } catch (error) {
        console.error(error);
        }
}

//function to get all users
let users = [];
async function getUsers() {
    try {
        const response = await fetch('/M00846514/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        });
        users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}

//function which will searh from posts
function search() {
    const searchValue = document.getElementById('searchBar').value;
    //search from title, description and location and from user.username
    const searchResult = posts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()) || post.description.toLowerCase().includes(searchValue.toLowerCase()) || post.location.toLowerCase().includes(searchValue.toLowerCase()));
    renderPosts(searchResult);
}

//function to search users
function searchUsers() {
    const searchValue = document.getElementById('searchUserBar').value;
    //search from username, firstName, lastName
    const searchResult = users.filter(user => user.username.toLowerCase().includes(searchValue.toLowerCase()) || user.firstName.toLowerCase().includes(searchValue.toLowerCase()) || user.lastName.toLowerCase().includes(searchValue.toLowerCase()));
    renderUsers(searchResult);
}
filterPosts = [];
//function to filter posts by budget
function filterPostsByBudget() {
    const budget = document.getElementById('filter_budget').value;
    filterPosts = posts.filter(post => post.budget > budget);
    renderPosts(filterPosts);
}

//function to filter posts by days
function filterPostsByDays() {
    const days = document.getElementById('filter_days').value;
    filterPosts = posts.filter(post => post.days > days);
    renderPosts(filterPosts);
}

//function to get all locations from posts
let locations = [];
function getLocations() {
    // all locations must be unique
    posts.forEach(post => {
        if (!locations.includes(post.location)) {
            locations.push(post.location);
        }
    });
    // console.log(locations);
    return locations;
}

//function on which click on location, posts will be filtered
function filterPostsByLocation(location) {
    filterPosts = posts.filter(post => post.location === location);
    renderPosts(filterPosts);
}

sortedPosts = [];
//function to sort posts by Max likes
function sortPostsByMaxLikes() {
    sortedPosts = posts.sort((a, b) => a.likes - b.likes);
    renderPosts(sortedPosts);
}
//function to sort posts by Min likes
function sortPostsByMinLikes() {
    sortedPosts = posts.sort((a, b) => b.likes - a.likes);
    renderPosts(sortedPosts);
}

//function to sort posts by Max comments
function sortPostsByMaxComments() {
    sortedPosts = posts.sort((a, b) => a.comments.length - b.comments.length);
    renderPosts(sortedPosts);
}

//function to sort posts by Min comments
function sortPostsByMinComments() {
    sortedPosts = posts.sort((a, b) => b.comments.length - a.comments.length);
    renderPosts(sortedPosts);
}

//function to sort posts by Max budget
function sortPostsByMaxBudget() {
    sortedPosts = posts.sort((a, b) => a.budget - b.budget);
    renderPosts(sortedPosts);
}

//function to sort posts by Min budget
function sortPostsByMinBudget() {
    sortedPosts = posts.sort((a, b) => b.budget - a.budget);
    renderPosts(sortedPosts);
}

//function to sort posts by max days
function sortPostsByMaxDays() {
    sortedPosts = posts.sort((a, b) => a.days - b.days);
    renderPosts(sortedPosts);
}

//function to sort posts by min days
function sortPostsByMinDays() {
    sortedPosts = posts.sort((a, b) => b.days - a.days);
    renderPosts(sortedPosts);
}

//function to get all chats from chat api
let chats = [];
async function getChats() {
    try {
        const response = await fetch('/M00846514/chats', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        });
        chats = await response.json();
        return chats;
    } catch (error) {
        console.error('Error fetching chats:', error);
        return [];
    }
}

//function to filter chats except logged in username
let chatsSidebar = [];
function filterChats(chats, users) {
    const filteredChats = {};
    chats.forEach(chat => {
        const otherUser = chat.sender !== userProfile.username ? chat.sender : chat.receiver;
        if (otherUser && otherUser !== userProfile.username) {
            if (!filteredChats[otherUser] || filteredChats[otherUser].time < chat.time) {
                filteredChats[otherUser] = { data: chat.data, time: chat.time };
            }
        }
    });

    chatsSidebar = Object.keys(filteredChats).map(username => {
        const user = users.find(u => u.username === username);
        return {
            username,
            data: filteredChats[username].data,
            time: filteredChats[username].time,
            profilePic: user ? user.profilePic : null
        };
    });

    return chatsSidebar;
}

//post function to send message
async function sendMessage() {
    //text content from receiverUsername
    const receiver = document.getElementById('receiverUsername').textContent;
    const sender = userProfile.username;
    const data = document.getElementById('messageField').value;

    try {
        const response = await fetch('/M00846514/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sender, receiver, data }),
        });

        // Check if response is successful (status code 2xx)
        if (response.ok) {
            const message = await response.json();
            console.log('Message sent:', message);
            await getChats();
            renderChats(chatsSidebar);
            renderMessages(senderMessages, receiverMessages);
            alert('Message sent successfully!');
            //clear message field
            document.getElementById('messageField').value = '';
        } else {
            // If response is not successful, handle the error
            throw new Error('Failed to send message. Server responded with status: ' + response.status);
        }
    } catch (error) {
        console.error('Error sending message:', error);
        // Handle the error gracefully, e.g., show a user-friendly message
        alert('Failed to send message. Please try again later.');
    }
}
