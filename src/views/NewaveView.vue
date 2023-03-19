<template>
   
    <div class="relative">

        <img src="/CoverMagazine.jpg" alt="" class="filter contrast-150 brightness-95 h-[16rem] w-full object-cover absolute sm:h-[24rem] xl:h-[36rem]">

        <h1 class="absolute font-fantome uppercase text-blue-700 mt-[12.5rem] text-[7vw] ml-[1rem] sm:mt-[17.5rem] xl:mt-[28rem] xl:ml-20 xl:text-[6vw]">Newave</h1>
    </div>

    <div class="uppercase mt-[23rem] sm:mt-[30rem] xl:mt-[40rem] absolute w-full">
        <h2 class="font-mademedium mb-8 md:text-2xl  mx-8 md:mx-20 text-xl">Design d'impression</h2>
        <div class="font-maderegular flex flex-col md:flex-row md:space-x-20 space-y-2 md:space-y-0 justify-start mb-8 text-lg md:text-base mx-20">
            <p>Septembre<span class="text-blue-700"> 2022</span></p>
            <p>Projet <span class="text-blue-700">étudiant</span></p>
            <p>Indesign</p>
        </div>

        <div
      class="flex space-x-2 md:space-x-20 md:flex-row flex-col xl:mr-52 mx-8 md:mx-20 mt-14"
    >
      <h2 class="font-mademedium mb-8 md:text-2xl text-xl w-full ">le projet</h2>
      <div
        class="flex flex-col font-manrope md:text-base text-xs space-y-4 leading-5 md:leading-7 normal-case"
      >
        <p class="">
      Dans le cadre de mon portfolio, j'ai travaillé sur un projet passionnant qui consistait en l'analyse d'une 
      couverture de magazine professionnel suivie de la création de ma propre couverture de magazine sur Indesign. 
      Pour la première étape de ce projet j'ai choisi d'analyse sur la couverture de Vogue mettant en avant Timothée Chalamet.
        </p>
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row font-manrope md:text-base text-xs space-y-4 space-x-4 mx-8 md:mx-20 items-center mt-14 leading-5 md:leading-7 normal-case"
    >
      <p>
        Pour l'analyse de la couverture de Vogue, j'ai examiné en détail tous les éléments constitutifs de la couverture, tels que les titres, 
        l'image, la typographie, la symétrie, etc. Cette analyse minutieuse m'a permis de mieux comprendre comment construire 
        une couverture de magazine professionnelle et m'a appris beaucoup de choses sur l'agencement des différents éléments 
        pour créer un effet visuel harmonieux.
      </p>
      <img src="/analysemag.jpg" alt="" class="w-3/5 xl:w-2/5 object-cover" />
    </div>

    <div
      class="flex flex-col-reverse lg:flex-row font-manrope md:text-base text-xs space-y-4 space-x-4 mx-8 md:mx-20 items-center mt-14 leading-5 md:leading-7 normal-case"
    >
      <img src="/CoverMagazine.jpg" alt="" class="w-3/5 xl:w-2/5 object-cover" />
      <p>
       Pour la partie créative du projet, j'ai imaginé ma propre couverture de magazine fictif. J'ai choisi de créer 
       un magazine sur deux de mes passions : la mode et la musique. J'ai trouvé la recherche d'un nom pour mon magazine
        assez difficile, mais après plusieurs essais, j'ai finalement trouvé un nom qui correspondait parfaitement à mon projet.
         J'ai également conçu un logotype avec une typographie qui fonctionne très bien dans le contexte de mon magazine. Ensuite,
          j'ai sélectionné une photo de "La fève", un artiste que j'apprécie beaucoup, pour la mettre en avant sur la couverture. 
          Enfin, j'ai imaginé plusieurs titres d'articles en lien avec l'actualité et la thématique de mon magazine.
      </p>
    </div>

    <div
      class="flex flex-col justify-center font-manrope md:text-base text-xs space-y-4  mx-8 md:mx-28 mt-14 leading-5 md:leading-7 normal-case"
    >
      <p>
      En conclusion, ce projet a été une expérience très enrichissante pour moi. J'ai appris énormément de choses sur 
      la construction d'une couverture de magazine professionnelle et j'ai eu l'opportunité de laisser libre cours à ma
       créativité en imaginant ma propre couverture. Je suis très satisfait du résultat final de ce projet et je suis fier
        de l'avoir réalisé.
      </p>

    </div>

    <div
      class="font-fantome md:text-5xl text-4xl mx-8 md:mx-32 flex flex-col mt-14 mb-24"
    >
      <RouterLink
        to="/posters" @click="scrollToTop"
        class="self-start flex items-center space-x-2 md:space-x-8 transition ease-in-out duration-500 hover:-translate-x-3 hover:text-blue-700"
      >
        <div class="">
          <IconArrowNoir class="sym-h"></IconArrowNoir>
        </div>
        <h2>Posters</h2>
      </RouterLink>

      <RouterLink
        to="/troisf" @click="scrollToTop"
        class="self-end flex items-center space-x-2 md:space-x-8 transition ease-in-out duration-500 hover:translate-x-3 hover:text-blue-700"
      >
        <h2>Fuck Fast Fashion</h2>
        <div class="">
          <IconArrowNoir></IconArrowNoir>
        </div>
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

  data() {
    
  },

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};

</script>