<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="bg-gray-100 uppercase text-2xl pt-6 pl-8 pr-8 pb-6">
    <div class="font-madelight text-black flex flex-col items-center sm:flex-row xl:space-x-52 md:space-x-28 sm:space-x-8 space-x-6  justify-center">
      <RouterLink to="/" :class="{'font-maderegular': $route.name ==='home'}" class="transition duration-500 ease-in-out  hover:text-blue-700"><span class="text-blue-700">&gt; </span>Accueil</RouterLink>
      <RouterLink to="/projets" :class="{'font-maderegular': $route.name ==='projets'}" class="transition duration-500 ease-in-out  hover:text-blue-700"><span class="text-blue-700">&gt; </span>Projets</RouterLink>
      <RouterLink to="/apropos" :class="{'font-maderegular': $route.name ==='apropos'}" class="transition duration-500 ease-in-out  hover:text-blue-700"><span class="text-blue-700">&gt; </span>à propos</RouterLink>
      <RouterLink to="/contact" :class="{'font-maderegular': $route.name ==='contact'}" class="transition duration-500 ease-in-out  hover:text-blue-700"><span class="text-blue-700">&gt; </span>contact</RouterLink>
    </div>
  </header>

  
  <main class="bg-white text-black"><RouterView /></main>


</template>

<style>
  @import "@/assets/base.css";
</style>

<script>
import IconMenu from "./components/icons/IconMenu.vue";

export default {
  name: "App",
  data() {
    return {
      menuOuvert: false,
    };
  },
  beforeMount() {
    this.$router.afterEach(() => (this.menuOuvert = false));
  },
  components: {
    IconMenu,
  },
};
</script>