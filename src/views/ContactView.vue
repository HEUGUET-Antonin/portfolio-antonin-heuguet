<template>

    <div class="grid grid-cols-1 justify-items-center items-center w-full h-[50vh] ">
    <div class="w-full h-full mt-[12rem] lg:block  hidden filter blur-sm">
      <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true, enableZoom: false, enablePan: false}" resize="true">
        <Camera :position="{ x: 5, y: 0, z: 0}" />
        <Scene :background="'none'">
          <PointLight color="#ffffff" :position="{ x: 50, y: -100, z: 100 }" :intensity="1" />
          <PointLight color="#ffffff" :position="{ x: -200, y: 100, z: 0 }" :intensity="1" />
          <PointLight color="#ffffff" :position="{ x: -100, y: 300, z: 0 }" :intensity="1" />
          <GltfModel ref="gltfModel" src="/model/logoAH.glb" @load="onReady" @progress="onProgress" @error="onError" :position="{ x: 0, y: 0, z: 0}" :scale="{ x: 2, y: 2, z: 2 }" :rotation="{x: Math.PI/2, y:Math.PI/-1.3, z:0}" :cast-shadow="true" :receive-shadow="true" />
        </Scene>
        <EffectComposer>
          <RenderPass />
          <UnrealBloomPass :strength="0.3" />
        </EffectComposer>
      </Renderer>
    </div>

   <div class="absolute lg:bg-white lg:bg-radial lg:px-32 lg:pt-20 lg:pb-32 pb-0 pt-0 px-0 rounded-md lg:mt-32 xl:mt-32 mt-0">
    <div class="text-5xl font-fantome uppercase text-blue-700  flex justify-center mt-28 ">
        <h1 class="opacity-100">Me contacter</h1>
    </div>
    <div class="flex flex-col items-center space-y-8 text-xl font-maderegular uppercase mt-12">
        <a href="https://www.instagram.com/anto4visual/" class="transition duration-500 ease-in-out  hover:text-blue-700"><h2><span class="text-blue-700">&gt; </span>Instagram</h2></a>
        <a href="https://www.linkedin.com/in/antonin-heuguet-1243a6224/?originalSubdomain=fr" class="transition duration-500 ease-in-out hover:text-blue-700"><h2><span class="text-blue-700">&gt; </span>Linkedin</h2></a>
        <a href="mailto:antoninheuguet@gmail.com" class="transition duration-500 ease-in-out hover:text-blue-700"><h2><span class="text-blue-700">&gt; </span>antonin.heuguet@gmail.com</h2></a>
    </div>
    </div>

    </div>

    <footer class="flex flex-col  p-8 font-madelight text-xs uppercase bg-gray-50 mt-[13rem] text-black">
    <p class="self-start">design & dev - Antonin Heuguet</p>
    <p class="self-end">Antonin Heuguet © 2023</p>
  </footer>
</template>

<script>
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
    EffectComposer,
    RenderPass,
    UnrealBloomPass,
  },

}




</script>