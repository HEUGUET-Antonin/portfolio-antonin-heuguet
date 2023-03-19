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

  
  <main class="bg-white text-black">
    <div class="custom-cursor">
      <div id="cursor-big" class="custom-cursor__ball custom-cursor__ball--big"></div>
      <div id="cursor-small" class="custom-cursor__ball custom-cursor__ball--small"></div>
    </div>
    <RouterView /></main>


</template>

<style>
  @import "@/assets/base.css";
  @import "@/assets/main.css";

    @media screen and (min-width:1100px) {
    * {
      cursor: none !important;
    }

    .custom-cursor__ball {
      position: fixed;
      top: 0;
      left: 0;
      mix-blend-mode: difference;
      z-index: 99999;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.5s ease;
    }

    .custom-cursor__ball--big {
      content: "";
      width: 35px;
      height: 35px;
      background: none;
      background: white;
      border-radius: 50%;
    }

    .custom-cursor__ball--small {
      content: "";
      width: 6px;
      height: 6px;
      background: rgb(29 78 216);
      border-radius: 50%;
    }
  }

</style>

<script>
import gsap from "gsap";
import IconMenu from "./components/icons/IconMenu.vue";

export default {
  name: "App",
  props: {
      hoverClass: {
        type: String,
        default: 'cursor-hover'
      }
    },
  components: {
    IconMenu,
  },
  mounted () {
      const cursorBig = document.getElementById('cursor-big'),
            cursorSmall = document.getElementById('cursor-small'),
            links = document.getElementsByTagName("a"),
            withClassHover = document.getElementsByClassName(this.hoverClass),
            withHover = [...links, ...withClassHover];

     
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mousedown", onMouseHover);
      document.addEventListener("mouseup", onMouseHoverOut);
      document.addEventListener("mouseenter", () => {
        cursorBig.style.opacity = 1;
        cursorSmall.style.opacity = 1;
      });
      document.addEventListener("mouseleave", () => {
        cursorBig.style.opacity = 0;
        cursorSmall.style.opacity = 0;
      });
      withHover.forEach((element) => {
        element.addEventListener("mouseover", onMouseHover);
        element.addEventListener("mouseout", onMouseHoverOut);
      })

      
      function onMouseMove(e) {
        cursorSmall.style.opacity = 1;
        gsap.to(cursorBig, 0.4, {
          x: e.clientX - 18,
          y: e.clientY - 18
        });
        gsap.to(cursorSmall, 0.1, {
          x: e.clientX - 4,
          y: e.clientY - 4
        });
      }
      function onMouseHover() {
        gsap.to(cursorBig, 0.3, {
          scale: 1.7
        });
      }
      function onMouseHoverOut() {
        gsap.to(cursorBig, 0.3, {
          scale: 1
        });
      }
    }

};
</script>

