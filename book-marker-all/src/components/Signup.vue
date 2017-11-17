<template>
  <div class="sign-up">
      <p>Let's create a new account!</p>
        <input type="text" ref="name" v-model="user.name" placeholder="Full Name"><br>
        <input type="text" ref="email" v-model="user.email" placeholder="Email"><br>
        <input type="password" v-model="user.password1" placeholder="Password"><br>
        <input type="password" ref="password2" v-model="user.password2" placeholder="Confirm password"><br>
        <input type="text" ref="weburl" v-model="user.weburl" placeholder="Website"><br>
        <input type="text" ref="phone" v-model="user.phone" placeholder="Phone number"><br>
        <input type="text" ref="dob" v-model="user.dob" placeholder="Date of Birth: DD/MM/YYYY"><br>
        <input type="text" ref="fburl" v-model="user.fburl" placeholder="Facebook URL"><br>

        <button  @click="validateBeforeSubmit">Sign Up</button>
      <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '@/firebaseConfig'

var md5 = require('md5');
let usersRef = db.ref('users');

export default {
  name: 'signUp',
  data() {
      return {
          user: {
              name: '',
              email: '',
              password1: '',
              password2: '',
              weburl: '',
              phone: '',
              dob: '',
              fburl: ''
              //email: ''
          }
      }
  },
  methods: {
      validateBeforeSubmit() {
          if (this.user.name && this.user.dob && this.user.fburl && this.user.email && (this.user.password1 === this.user.password2)) 
          {
              if (this.Validfburl()) {
                  if (this.ValidDOB()) {
                      this.signup();
                  }
                  else {
                      alert('Please use form DD/MM/YYYY');
                    this.$refs.dob.focus();
                    return;
                  }
              }
              else {
                  alert('Please use a valid URL');
                  this.$refs.fburl.focus();
                  return;
              }
              
          } else {
              if(!this.user.name) {
                  alert('Name cannot be empty');
                  this.$refs.name.focus();
                  return;
              }
              if(!this.user.email) {
                  alert('Email cannot be empty');
                  this.$refs.email.focus();
                  return;
              }
              if(this.user.password1 != this.user.password2) {
                  alert('Password mismatch');
                  this.$refs.password2.focus();
                  return;
              }
              if(!this.user.fburl) {
                  alert('Facebook URL cannot be empty');
                  this.$refs.fburl.focus();
                  return;
              }
              if(!this.user.dob) {
                  alert('Birthdate cannot be empty');
                  this.$refs.dob.focus();
                  return;
              }
          }
    },
      signup() {
            firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password1).then( 
                user => {
                    alert('Your accound has been created!');

                    /* add user info to database */
                    var newUser = this.addUserInfo();

                    this.$router.push({ name: 'Hello'});
                }, 
                error => {
                    var errorCode = error.code;
                    var errorMsg = error.message;
                    if (errorCode == 'auth/weak-password') {
                        alert('The password is too week');
                    } else {
                        alert('Oops.' + errorMsg);
                    }
                }
            );
      },
      addUserInfo() {
          var newUser = {
              name: this.user.name,
              email: this.user.email,
              dob: this.user.dob,
              fburl: this.user.fburl
          }

          var id = md5(this.user.email);
          console.log(id);
          db.ref('users/'+ id).set(newUser);

      },
      Validfburl() {
          var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
          var regex = new RegExp(expression);
          if(!this.user.url.match(regex)) { 
              return false;
        }
        else {
            return true;
        }
    },
    ValidDOB() {
        var expression = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/; 
        var regex = new RegExp(expression);

        if(!this.user.dob.match(regex)) {
            return false;
        }
        else {
            return true;
        }
    }
  }
}
</script>

<style scoped>
    .signUp {
        margin-top: 40px;
    }
    input {
        margin: 5px 0;
        width: 40%;
        padding: 15px;
    }
    button {
        margin-top: 10px;
        width: 10%;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }

</style>

