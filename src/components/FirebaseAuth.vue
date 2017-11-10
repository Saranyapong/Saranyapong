<template lang="html">
  <div id="firebaseui-auth-container"></div>
</template>
<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'

var ui = new firebaseui.auth.AuthUI(firebase.auth());

export default {
  name: 'auth',
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/success',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      };
    
    
    ui.start('#firebaseui-auth-container', uiConfig);
  },
}
</script>

<style src="firebaseui/dist/firebaseui.css" >

</style>
