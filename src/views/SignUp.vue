<template>
  <div class="form">
    <h3>Sign up</h3>
    <label for="email">Email</label>
    <input type="email" name="email"  required v-model="email">
    <label for="password">Password</label>
    <input type="password" name="password" required v-model="password">
    <div v-if="errMsg">{{errMsg}} </div>
    <button @click="SignUp" class="SignUp">Sign up</button>
  </div>
</template>

<script>
export default {
name: "SignUp", 
data: function() {
    return {
   email: '',
   password: '',
   errMsg: '',
  }
  },
watch: {
    password(value) {
      this.password = value;
      this.validatePassword(value);
    }
  },
  methods: {
validatePassword(value) {
      if (value.length < 8 || value.length >= 16 || !/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
        this.errMsg = "Password must be at least 8 characters  and less than 16 characters, it must include a capital letter and at least one number"
      }else{
      this.errMsg = ''
      }
    },
SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };
      fetch("http://localhost:3000/auth/signup", {
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
      this.$router.push("/");
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
div {
  padding: 10px 20px;
  margin-top: 20px;
}
</style>