<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 w-full h-[80vh] justify-items-center items-center p-4 gap-2"
  >
    <div
      class="text-black uppercase z-10 h-full w-full flex flex-col justify-center ml-8 md:ml-36 space-y-2"
    >
      <div class="flex items-center space-x-4">
        <IconArrow />
        <h1 class="text-5xl font-maderegular">Antonin Heuguet</h1>
      </div>
      <h2 class="font-madethin text-4xl pl-8">Découvrez mon univers</h2>
      <RouterLink to="/projets"
        class="border ml-8 p-1 flex justify-center w-52 border-black rounded-md transition ease-in-out duration-300 hover:border-white hover:scale-105 hover:text-white hover:bg-blue-700"
      >
        <p class="font-fantome text-4xl">Projets</p>
      </RouterLink>
    </div>

    <div class="w-full h-full m-6 lg:block hidden">
      <Renderer
        ref="renderer"
        antialias
        :orbit-ctrl="{
          enableDamping: true,
          enableZoom: false,
          enablePan: false,
        }"
        resize="true"
      >
        <Camera :position="{ x: 5, y: 0, z: 0 }" />
        <Scene :background="'none'">
          <PointLight
            color="#ffffff"
            :position="{ x: 200, y: -200, z: 0 }"
            :intensity="1"
          />
          <PointLight
            color="#ffffff"
            :position="{ x: -200, y: 200, z: 0 }"
            :intensity="1"
          />
          <PointLight
            color="#ffffff"
            :position="{ x: -100, y: 300, z: 0 }"
            :intensity="1"
          />
          <Mesh ref="meshC">
            <GltfModel
              ref="gltfModel"
              src="/model/logoAH.glb"
              @load="onReady"
              @progress="onProgress"
              @error="onError"
              :position="{ x: 0, y: 0, z: 0 }"
              :scale="{ x: 1, y: 1, z: 1 }"
              :rotation="{ x: Math.PI / 2, y: Math.PI / 1, z: 0 }"
              :cast-shadow="true"
              :receive-shadow="true"
            />
          </Mesh>
        </Scene>
        <EffectComposer>
          <RenderPass />
          <UnrealBloomPass :strength="0.3" />
        </EffectComposer>
      </Renderer>
    </div>
  </div>

  <footer class="flex flex-col -mt-8 p-8 font-madelight text-xs uppercase bg-gray-50 text-black">
    <p class="self-start">design & dev - Antonin Heuguet</p>
    <p class="self-end">Antonin Heuguet © 2023</p>
  </footer>
</template>

<script>
import IconArrow from "../components/icons/IconArrow.vue";
import {
  PointLight,
  Camera,
  GltfModel,
  Renderer,
  Scene,
  EffectComposer,
  RenderPass,
  UnrealBloomPass,
} from "troisjs";
export default {
  components: {
    PointLight,
    Camera,
    GltfModel,
    Renderer,
    Scene,
    IconArrow,
    EffectComposer,
    RenderPass,
    UnrealBloomPass,
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<script setup>
import { ref, onMounted } from "vue";

const meshC = ref();

document.addEventListener(
  "mousemove",
  function (ev) {
    meshC.value.mesh.rotation.x += ev.clientX / 1000000;
    meshC.value.mesh.rotation.y += ev.clientY / 1000000;
  },
  false
);
</script>