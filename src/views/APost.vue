<template>
  <div class="A Post">
    <div id="form">
      <h3>A Post</h3>
      <label for="body">Body: </label>
      <input name="body" type="text" id="body" required v-model="post.body" />
      <!--  <label id="date">Date: </label>
        <input name="date" type="text" id="date" required v-model="post.date" />-->
      </div>
      <div class="container">
        <button @click="updatePost" class="updatePost">Update Post</button>
        <button @click="deletePost" class="deletePost">Delete Post</button>
      </div>
    </div>
  </template>


  <script>
  export default {
    name: "APost",
    data() {
      return {
        post: {
          id: "",
          body: "",
          date: new Date(),
        },
      };
    },
    methods: {
      fetchAPost(id) {
        fetch(`http://localhost:3000/api/posts/${id}`)
          .then((response) => response.json())
          .then((data) => (this.post = data))
          .catch((err) => console.log(err.message));
      },
      updatePost() {
        fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.post),
        })
          .then((response) => {
            console.log(response.data);
            this.$router.push("/api/allposts");
          })
          .catch((e) => {
            console.log(e);
          });
      },
      deletePost() {
        fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
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
      },
    },
    mounted() {
      this.fetchAPost(this.$route.params.id);
    },
  };
  </script>

  <style scoped>
  #form {
    max-width: 420px;
    margin: 30px auto;
    background: #e8d8ff;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    border: 1px solid #76a8d7; /* Add a border for a subtle 3D effect */

  }
  h3 {
    text-align: center;
    color: #503E52;
  }
  label {
    color: #503E52;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid white;
    color: #503E52;
  }
  button {
    background: #9dcaff;
    border: 1px solid #76a8d7; /* Add a border for a subtle 3D effect */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
    padding: 10px 20px;
    margin-top: 20px;
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