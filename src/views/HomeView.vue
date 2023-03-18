<template>
  <div class="grid grid-cols-1 md:grid-cols-2 w-full h-screen justify-items-center items-center p-4 gap-2 ">



    <div class="text-black uppercase z-10 h-full w-full flex flex-col justify-center ml-8 md:ml-36 space-y-2">
      <div class="flex items-center space-x-4">
        <IconArrow />
        <h1 class="text-5xl font-maderegular">Antonin Heuguet</h1>
      </div>
      <h2 class="font-madethin text-4xl pl-8">Découvrez mon univers</h2>
      <div class="border ml-8 p-1 flex justify-center w-52 border-black rounded-md hover:text-white hover:bg-blue-700">
        <p class="font-fantome text-4xl">Projets</p>
      </div>
    </div>




    <div class="w-full h-full m-6">
      <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true, enableZoom: false, enablePan: false}" resize="true">
        <Camera :position="{ x: 1, y: 0, z: 0 }" />
        <Scene :background="'none'">
          <PointLight color="#ffffff" :position="{ x: 200, y: -200, z: 0 }" :intensity="4" />
          <PointLight color="#ffffff" :position="{ x: -200, y: 200, z: 0 }" :intensity="4" />
          <PointLight color="#ffffff" :position="{ x: -100, y: 300, z: 0 }" :intensity="4" />
          <GltfModel ref="gltfModel" src="/model/logo-antonin-heuguet.glb" @load="onReady" @progress="onProgress" @error="onError" :position="{ x: 0, y: 0, z: 0}" :scale="{ x: 2, y: 2, z: 2 }" :rotation="{x: 30, y:30, z:190}" :cast-shadow="true" :receive-shadow="true" />
        </Scene>
        <EffectComposer>
          <RenderPass />
          <UnrealBloomPass :strength="0.3" />
        </EffectComposer>
      </Renderer>
    </div>
  </div>
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
} from 'troisjs';
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

}


</script>

