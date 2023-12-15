<template>
  <div>

    <nav>
      <router-link to="/api/allposts">Posts</router-link>
      <router-link to="/api/contact">Contact</router-link>
      <!-- <router-link to="/api/addpost">Add a Post</router-link> |-->
      <!--<router-link to="/api/signup">SignUp</router-link>|-->
       <!--<router-link to="/api/login">Login</router-link>-->
    </nav>
    <router-view />
  
   
  </div>
</template>

<script>
export default {
  name: "App",
   methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/api/login");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  }, 
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-image: url('./assets/back.jpg');
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
}

nav a.router-link-exact-active {
  color: #9dcaff;
}
button {
  background: #9dcaff;
  border: 1px solid #76a8d7; /* Add a border for a subtle 3D effect */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
  padding: 10px 20px;
  margin: 20px;
  color: #503e52;
  border-radius: 20px;
  transition: transform 0.2s ease-in-out; /* Add a smooth transition on hover */
}

button:hover {
  transform: scale(1.05); /* Add a slight scale effect on hover */
}

.container {
  display: flex;
  justify-content: center;
}
</style>
