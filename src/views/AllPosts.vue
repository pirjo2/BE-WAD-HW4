<template>
  <div class="AllPosts">
    <div id="post-list">
    <h1>All Posts</h1>
     <div class="container">
       <button   v-if = "authResult" @click="Logout" class="center">Logout</button>
    </div>
      <ul>
        <div class="item" v-for="post in posts" :key="post.id">
            <a class= 'singlepost' :href="'/api/apost/' + post.id">
               <span class="body"> <b>Body:</b> {{ post.body }} </span> <br />
               <span class="date"> <b>Date:</b> {{ post.date }} </span> <br />
             </a>
           </div>
         </ul>
         <div class="container">
           <button @click="DeleteAll" class="center">Delete all</button>
           <button @click="AddPost" class="center">Add post</button>
         </div>
       </div>
     </div>
   </template>


   <script>
   import auth from "../auth";
   export default {
     name: "AllPosts",
     data() {
       return {
         posts: [],
         authResult: auth.authenticated()
       };
     },
     methods: {
       AddPost() {
         this.$router.push("/api/addpost"); // Route path to navigate to
       },
       DeleteAll() {
         fetch(`http://localhost:3000/api/posts/`, {
           method: "DELETE",
           headers: { "Content-Type": "application/json" },
         })
             .then((response) => {
               console.log(response.data);
               this.$router.push("/api/allposts");
             })
             .catch((e) => {
               console.log(e);
             });
         window.location.reload();
       },
       Logout() {
         fetch("http://localhost:3000/auth/logout", {
             credentials: 'include', //  Don't forget to specify this if you need cookies
         })
         .then((response) => response.json())
         .then((data) => {
           console.log(data);
           console.log('jwt removed');
           //console.log('jwt removed:' + auth.authenticated());
           this.$router.push("/api/login");
           //location.assign("/");
         })
         .catch((e) => {
           console.log(e);
           console.log("error logout");
         });
       },
       fetchPosts() {
         fetch(`http://localhost:3000/api/posts/`)
           .then((response) => response.json())
           .then((data) => (this.posts = data))
           .catch((err) => console.log(err.message));
       },
     },
     mounted() {
       this.fetchPosts();
       console.log("mounted");
     },
   };
   </script>

   <style scoped>
   h1 {
     font-size: 20px;
   }
   a {
     text-decoration: none;
   }
   a:hover {
     text-decoration: underline;
   }
   .item {
     background-color:#e8d8ff;
         border-radius: 0.2em;
         padding: 8px 20px;
         margin-left: 10em;
         margin-right: 10em;
         margin-top: 2em;
         margin-bottom: 2em;
         box-shadow: none;
         display: flex;
         flex-direction: column;
         text-align: left;
   }

   .item-content {
       font-size: 1.0em;
       margin-left: auto;
       margin-right: auto;
       width: 100%;
   }

   #post-list ul {
     padding: 0;
   }
   #post-list li {
     display: inline-block;
     margin-right: 10px;
     margin-top: 10px;
     padding: 20px;
     background: rgba(255, 255, 255, 0.7);
   }
   @media (max-width: 800px) {
           .item {
               margin: 1em;
           }
           .allPosts {
               margin: 1em;
           }
           }
   </style>