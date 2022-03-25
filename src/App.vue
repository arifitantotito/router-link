<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<div>
  <div id="nav">
    <button class="btn1">
      <router-link to="/" class="home"> Home </router-link>
    </button> |
    <button class="btn2">
      <router-link to="/about" class="about"> About </router-link> 
    </button> |
    <button class="btn3">
      <router-link to="/user" class="user"> User </router-link>
    </button>  
  </div>
  <router-view></router-view>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
  background-color: #e4e7e0;
  color: #e4e7e0;
}

body {
  background-color: rgb(83, 175, 91);
}
.btn1 {
  border-radius: 12%;
  background-color: rgb(83, 175, 91);
}
.btn1 .router-link-exact-active {
  font-weight: bold;
  color: #e4e7e0;
  background-color: rgb(83, 175, 91);
}
.btn2 {
  border-radius: 12%;
  background-color: rgb(83, 175, 91);
}
.btn2 .router-link-exact-active {
  font-weight: bold;
  color: #e4e7e0;
  background-color: rgb(83, 175, 91);
}
.btn3 {
  border-radius: 12%;
  background-color: rgb(83, 175, 91);
}
.btn3 .router-link-exact-active {
  font-weight: bold;
  color: #e4e7e0;
  background-color: rgb(83, 175, 91);
}
.home {
  color: #2c3e50;
  text-decoration: none;
}
.about {
  color: #2c3e50;
  text-decoration: none;
}
.user {
  color: #2c3e50;
  text-decoration: none;
}
</style>
