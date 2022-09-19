<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  data() {
    return {
    }
  }
}
</script>
  
<template>
  <header>
    <h1 style="text-align:center;-">Başlık</h1>
  </header>
  <hr>
  <div class="link">
    <RouterLink to="/">Anasayfa</RouterLink>
    <RouterLink to="/about">Teknoloji</RouterLink>
    <RouterLink to="/ev">Ev</RouterLink>
    <RouterLink to="/giyim">Giyim</RouterLink>
  </div>
  <hr>
  <RouterView />

</template>
  
<style>
* {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

header {
  padding: 20px;
}

.link {
  padding: 10px;
  width: 100%;
  margin: auto;
  text-align: center;
}

a {
  text-decoration: none;
  margin: 10px;
  color: black;
}

a:hover {
  transition: 1s ease-in;
  border-bottom: 1px solid rgb(52, 31, 31);
}
</style>