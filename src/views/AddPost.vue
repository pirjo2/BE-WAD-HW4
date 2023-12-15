<template>
  <div class="form">
    <h3>Add a Post</h3>
    <label for="title">Title: </label>
    <input name="title" type="text" id="title" required v-model="post.title" />
    <label for="body">Body: </label>
    <input name="body" type="text" id="body" required v-model="post.body" />
    <label for="urllink">Url: </label>
    <input name="urllink"  type="text" id="urllink" required v-model="post.urllink"/>
    <button @click="addPost" class="addPost">Add Post</button>
  </div>
</template>

<script>
//import auth from "../auth";
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        title: "",
        body: "",
        urllink: "",
      },
    //authResult: auth.authenticated()
    };
  },
  methods: {
    addPost() {
      var data = {
        title: this.post.title,
        body: this.post.body,
        urllink: this.post.urllink,
      };
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        console.log(response.data);
        this.$router.push("/api/allposts");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};
</script>

<style scoped>
.form {
  max-width: 420px;
  margin: 30px auto;
  background: #e8d8ff;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  border: 1px solid #76a8d7;

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
.addPost {
  background: #9dcaff;
  border: 1px solid #76a8d7; /* Add a border for a subtle 3D effect */
  color: #503E52;
  padding: 10px 20px;
  margin: 20px 20px 20px 20px;
  border-radius: 20px;
  align-items: center;
  text-align: center;
}
</style>