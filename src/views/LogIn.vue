<template>
  <div class="form">
    <h3>Log in</h3>
    <label for="email">Email</label>
    <input type="email" name="email"  required v-model="email">
    <label for="password">Password</label>
    <input type="password" name="password" required v-model="password">
    <div class="container">
      <button @click="LogIn"  class="center">Log in</button>
      <button @click='this.$router.push("/api/signup")' class="center">Sign up</button>
    </div>
  </div>
</template>

<script>
export default {
name: "LogIn",
data: function() {
    return {
   email: '',
   password: '',
  }
  },
  methods: {
LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', 
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      location.assign("/api/AllPosts");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  }, 
  }
</script>

<style scoped>
.form {
  max-width: 420px;
  margin: 30px auto;
  background: #e8d8ff;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  border: 1px solid #76a8d7; /* Add a border for a subtle 3D effect */


}
button {
  background: #9dcaff;
  border: 1px solid #76a8d7; /* Add a border for a subtle 3D effect */
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
  padding: 10px 20px;
  margin-top: 20px;
  color: #503e52;
  border-radius: 20px;
  transition: transform 0.2s ease-in-out; /* Add a smooth transition on hover */
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


.container {
  display: flex;
  justify-content: center;

}
</style>