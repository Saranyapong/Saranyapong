<template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <nav class="navbar navbar-inverse">
        <ul class="nav navbar-nav">
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
