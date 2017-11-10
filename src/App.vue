<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <ul class="nav navbar-nav">
        <li class="router-link-exact-active router-link-active"><a href="#/"><span class="glyphicon glyphicon-home"></span></a></li>
        <li class=""><a href="#/login">Home</a></li>
        <li class=""><a href="#/about">About</a></li>
        <li class=""><a href="#/bookmark">Bookmarks</a></li>
      </ul>
    </nav>
    <img src="./assets/logo.png" width="100" height="100">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style>
#app {
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
