<template>
    <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true ,enableZoom: false, enablePan: false}" resize="true" class="absolute w-full h-full">
        <Camera :position="{ x: 1, y: 0, z: 0 }" />
        <Scene :background="'none'">
        <PointLight
                    color="#ffffff"
                    :position="{ x: 200, y: -200, z: 0 }"
                    :intensity="4"
                />
        <PointLight
                    color="#ffffff"
                    :position="{ x: -200, y: 200, z: 0 }"
                    :intensity="4"
                />
        <PointLight
                    color="#ffffff"
                    :position="{ x: -100, y: 300, z: 0 }"
                    :intensity="4"
                />
                        <GltfModel src="/model/logo-antonin-heuguet.glb" 
        @load="onReady"
                    @progress="onProgress"
                    @error="onError"
                    :position="{ x: 0, y: 0, z: 0}"
                    :scale="{ x: 2, y: 2, z: 2 }"
                    :rotation="{x: 30, y:30, z:190}"
                    :cast-shadow="true"
                    :receive-shadow="true"
                    />
        </Scene>
         <EffectComposer>
      <RenderPass />
      <UnrealBloomPass :strength="0.3" />
    </EffectComposer>
    </Renderer>
    <div class="text-5xl font-fantome uppercase text-blue-700  flex justify-center mt-28">
        <h1 class="">Me contacter</h1>
    </div>
    <div class="flex flex-col items-center space-y-8 text-xl font-maderegular uppercase mt-12">
        <a href="https://www.instagram.com/anto4visual/" class="transition duration-500 ease-in-out  hover:text-blue-700"><h2><span class="text-blue-700">&gt; </span>Instagram</h2></a>
        <a href="https://www.linkedin.com/in/antonin-heuguet-1243a6224/?originalSubdomain=fr" class="transition duration-500 ease-in-out hover:text-blue-700"><h2><span class="text-blue-700">&gt; </span>Linkedin</h2></a>
        <a href="mailto:antoninheuguet@gmail.com" class="transition duration-500 ease-in-out hover:text-blue-700"><h2><span class="text-blue-700">&gt; </span>antonin.heuguet@gmail.com</h2></a>
    </div>
</template>