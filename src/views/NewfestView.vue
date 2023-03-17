<template>
   
    <div class="relative">

        <img src="/mockupdesktop.jpg" alt="" class="filter contrast-150 brightness-95 h-[16rem] w-full object-cover absolute sm:h-[24rem] xl:h-[36rem]">

        <h1 class="absolute font-fantome uppercase text-blue-700 mt-[12.5rem] text-[7vw] ml-[1rem] sm:mt-[17.5rem] xl:mt-[28rem] xl:ml-20 xl:text-[6vw]">Newfest</h1>
    </div>

    <div class="uppercase mt-[23rem] sm:mt-[30rem] xl:mt-[40rem] absolute w-full">
        <h2 class="font-mademedium mb-8 md:text-2xl  mx-8 md:mx-20 text-xl">Identité marque fictive & développement web</h2>
        <div class="font-maderegular flex flex-col md:flex-row md:space-x-20 space-y-2 md:space-y-0 justify-start mb-8 text-lg md:text-base mx-20">
            <p>Mai<span class="text-blue-700"> 2022</span></p>
            <p>Projet <span class="text-blue-700">étudiant</span></p>
            <p>Virtual Studio code : Vuejs ,Firebase & Tailwind<span class="text-blue-700"> | </span> Figma</p>
        </div>

        <div class="flex space-x-2 md:space-x-20 md:flex-row flex-col xl:mr-52 mx-8 md:mx-20 mt-14 ">
            <h2 class="font-mademedium mb-8 md:text-2xl text-xl">Résumé</h2>
            <p class="font-madelight md:text-base text-xs leading-5 md:leading-7"><span class="text-blue-700">Fuck Fast Fashion </span> ou <span class="text-blue-700">3F</span> est une marque de vêtements que j’ai entièrement imaginée. 
                Le but du projet était de créer l’identité d’une marque écologique et de la développer entièrement.
                Dans un premier temps j'ai réfléchi au positionnement de la marque et son nom. J'ai ensuite crée le monogramme
                de celle-ci. Après ces étapes cruciales j'ai élaboré la charte graphique de la marque, typographies, couleurs,
                éléments graphiques...<br> Pour finir j'ai imaginé des possibles visuels d'affiches ou vêtements de cette marque.
                L'ensemble de la charte graphique a été mis en page sur Indesign.
            </p>
        </div>

        <div class="flex justify-center ml-0 ">
            <div class="grid grid-cols-1 xl:grid-cols-5 gap-3 mt-14 ">
                <div id="photo" class="col-span-4">
                    <img src="/mockup3F1.jpg" alt="" class=" xl:h-[28rem] h-[20rem] w-full transition ease-in-out duration-500 border-[4px] border-white object-cover" id="big_pict">
                </div>
                <div id="galerie_mini" class="flex  flex-row xl:flex-col w-full">
                    <a href="/mockup3F1.jpg" class="relative w-full h-full">
                        <img src="/mockup3F1.jpg" alt="" class="w-full h-full xl:h-[7rem] border-[4px] border-white transition ease-in-out duration-500 object-cover">
                    </a>
                    <a href="/mockup3F2.jpg" class="relative w-full h-full">
                        <img src="/mockup3F2.jpg" alt="" class="w-full h-full xl:h-[7rem] border-[4px] border-white transition ease-in-out duration-500 object-cover">
                    </a>
                    <a href="/mockup3F3.jpg" class="relative w-full h-full">
                        <img src="/mockup3F3.jpg" alt="" class="w-full h-full xl:h-[7rem] border-[4px] border-white transition ease-in-out duration-500 object-cover">
                    </a>
                    <a href="/mockup3F4.jpg" class="relative w-full h-full">
                        <img src="/mockup3F4.jpg" alt="" class="w-full h-full xl:h-[7rem] border-[4px] border-white transition ease-in-out duration-500 object-cover">
                    </a>
                </div>
            </div>
        </div>

        <div class="font-fantome md:text-5xl text-4xl mx-8 md:mx-32 flex flex-col mt-14 mb-24">
            <h3 class="self-start" >Next Projet</h3>
            <RouterLink to="/cpfm" class="self-end flex items-center space-x-2 md:space-x-8">
                <div class=" transition ease-in-out duration-500">
                    <IconArrowNoir></IconArrowNoir>
                </div>
                <h2>Analyse CPFM</h2>
            </RouterLink>
        </div>

    </div>

</template>

<script>
import IconArrowNoir from "../components/icons/IconArrowNoir.vue";

export default {
  components: {
    IconArrowNoir, 
  },
};

function displayPics() {
  var photos = document.querySelectorAll('#galerie_mini a');
  var big_photo = document.getElementById('big_pict');

  photos.forEach(function(photo) {
    photo.addEventListener('click', function(event) {
      event.preventDefault();
      var newSrc = this.href;
      big_photo.src = newSrc;
    });
  });
}

window.onload = displayPics;
</script>