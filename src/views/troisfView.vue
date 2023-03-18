<template>
   
    <div class="relative">

        <img src="/mockup3fmain.jpg" alt="" class="filter contrast-150 brightness-95 h-[16rem] w-full object-cover absolute sm:h-[24rem] xl:h-[36rem]">

        <h1 class="absolute font-fantome uppercase text-blue-700 mt-[12.5rem] text-[7vw] ml-[1rem] sm:mt-[17.5rem] xl:mt-[28rem] xl:ml-20 xl:text-[6vw]">Fuck Fast Fashion</h1>
    </div>

    <div class="uppercase mt-[23rem] sm:mt-[30rem] xl:mt-[40rem] absolute w-full">
        <h2 class="font-mademedium mb-8 md:text-2xl  mx-8 md:mx-20 text-xl">Création identité de marque éco-responsable</h2>
        <div class="font-maderegular flex flex-col md:flex-row md:space-x-20 space-y-2 md:space-y-0 justify-start mb-8 text-lg md:text-base mx-20">
            <p>Octobre <span class="text-blue-700">2022</span></p>
            <p>Projet <span class="text-blue-700">étudiant</span></p>
            <p>Illustrator <span class="text-blue-700"> | </span> Photoshop  <span class="text-blue-700"> | </span>  Indesign</p>
        </div>

        <div class="flex space-x-2 md:space-x-20 md:flex-row flex-col xl:mr-52 mx-8 md:mx-20 mt-14 ">
            <h2 class="font-mademedium mb-8 md:text-2xl text-xl w-full">le projet</h2>
            <div class="flex flex-col font-manrope md:text-base text-xs space-y-4  leading-5 md:leading-7 normal-case">
                <p class="">Fuck Fast Fashion ou 3F, est un projet de marque de vêtements éco-responsable, entièrement imaginé et développé par moi-même. L'objectif du projet était de créer une identité de marque forte et cohérente, en accord avec les valeurs environnementales et éthiques.</p>
                <p>Avant de commencer le développement de la marque, j'ai réalisé une étape préliminaire importante : l'analyse et la mise en page de la charte graphique d'une marque de mon choix. C'est un projet à part entière présent dans mon portfolio, que vous pouvez retrouver sous le nom de <RouterLink to="/cpfm"  @click="scrollToTop"  class="text-blue-700 underline">"Analyse CPFM"</RouterLink>. Cette étape m'a aidé à acquérir les compétences nécessaires pour créer une charte graphique forte et cohérente pour 3F.</p>
            </div>    
        </div>

        <div class="flex flex-col lg:flex-row font-manrope md:text-base text-xs space-y-4 space-x-4 mx-8 md:mx-20 items-center mt-14 leading-5 md:leading-7 normal-case">
            <p>J'ai commencé par réfléchir au positionnement de la marque et chercher un nom accrocheur. Le nom transmet un message agressif, presque insultant contre l'industrie de la mode actuelle pour marquer l'esprit des gens. Ensuite, j'ai créé le monogramme de la marque, relativement simple mais représentant parfaitement son identité visuelle distinctive. Cette étape était cruciale pour donner une image forte et reconnaissable à la marque.</p>
            <img src="/3f_name_logo.jpg" alt="" class="w-3/5 xl:w-2/5">
        </div>

        <div class="flex flex-col-reverse lg:flex-row font-manrope md:text-base text-xs space-y-4 space-x-4 mx-8 md:mx-20 items-center mt-14 leading-5 md:leading-7 normal-case">
            <img src="/3f_couleur_typo.jpg" alt="" class=" w-3/5 xl:w-2/5">
            <p>Après cela, j'ai travaillé sur la création de la charte graphique en choisissant des couleurs et des typographies qui reflètent l'identité rebelle et engagée de la marque. Les couleurs choisies sont principalement le noir et le blanc, avec du rouge vif pour ajouter une touche de couleur et accentuer le côté agressif de la marque. J'ai choisi des typographies modernes et "grunge" pour pousser l'aspect rebelle de 3F.</p>
        </div>

        <div class="flex flex-col lg:flex-row font-manrope md:text-base text-xs space-y-4 space-x-4 mx-8 md:mx-20 items-center mt-14 leading-5 md:leading-7 normal-case">
            <p>Enfin, j'ai imaginé des visuels d'affiches et de vêtements pour donner vie à la marque. Mon objectif était de créer des visuels impactants et mémorables pour renforcer l'identité de la marque. J'ai pris soin de respecter les valeurs environnementales et éthiques tout en créant des visuels accrocheurs et esthétiques.</p>
            <img src="/3f_visuel.jpg" alt="" class="w-3/5 xl:w-2/5">
        </div>

        <div class="flex justify-center font-manrope md:text-base text-xs space-y-4 space-x-4 mx-8 md:mx-36 mt-14 leading-5 md:leading-7 normal-case">
            <p>Ce projet a été une expérience enrichissante pour moi. Non seulement j'ai pu mettre en pratique mes compétences en identité de marque et en design graphique, mais j'ai également eu l'occasion de sensibiliser le public à l'impact environnemental de l'industrie de la mode. Je suis fier d'avoir développé un projet de marque qui promeut des valeurs éthiques et écologiques tout en offrant un design innovant et original. 3F est vraiment ma marque à moi, et je suis fier de partager ce projet avec vous.</p>
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
            <RouterLink to="/newfest" class="self-end flex items-center space-x-2 md:space-x-8">
                <div class=" transition ease-in-out duration-500">
                    <IconArrowNoir></IconArrowNoir>
                </div>
                <h2>Newfest</h2>
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
  
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}


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