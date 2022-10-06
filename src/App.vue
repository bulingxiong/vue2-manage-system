<template>
<<<<<<< HEAD
  <div id="app"><router-view></router-view></div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
};
</script>
<style>
html body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
=======
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
>>>>>>> 2d2751b418fb1bbf4976252d35ae549e3c9004c5
}
</style>
