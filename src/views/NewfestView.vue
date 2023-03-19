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

     <div
      class="flex space-x-2 md:space-x-20 md:flex-row flex-col xl:mr-52 mx-8 md:mx-20 mt-14"
    >
      <h2 class="font-mademedium mb-8 md:text-2xl text-xl w-full">le projet</h2>
      <div
        class="flex flex-col font-manrope md:text-base text-xs space-y-4 leading-5 md:leading-7 normal-case"
      >
        <p class="">
          Newfest est un projet de festival de musique fictif que j'ai entièrement imaginé et développé, 
          en créant une identité de marque cohérente et un site web entièrement responsive avec des fonctionnalités 
          back-end. Avant de commencer le développement du site web, j'ai soigneusement travaillé sur l'identité du 
          festival en réfléchissant à son positionnement, au style de musique et au lieu.
        </p>
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row font-manrope md:text-base text-xs space-y-4 space-x-4 mx-8 md:mx-20 items-center mt-14 leading-5 md:leading-7 normal-case"
    >
      <p>
        En ce qui concerne le nom du festival, j'ai cherché quelque chose de simple mais actuel, 
        qui reflète l'esprit du festival et qui soit facilement mémorisable. Après plusieurs recherches 
        et réflexions, j'ai choisi "Newfest", un nom qui évoque la nouveauté, la fraîcheur et la modernité. 
        <br>Pour le logo du festival, j'ai voulu créer une image forte et facilement identifiable qui soit également polyvalente. 
        J'ai donc travaillé sur un design qui soit tout aussi efficace en couleur qu'en noir et blanc ou encore en nuances de 
        gris, afin de garantir sa lisibilité dans toutes les situations. J'ai choisi une fleur rouge comme élément principal 
        du logo, pour symboliser la passion, la créativité et l'énergie positive. J'ai également opté pour un style vintage, 
        qui donne une touche rétro et authentique à l'ensemble de l'identité visuelle.
      </p>
      <img src="/newfest_identite.jpg" alt="" class="w-3/5 xl:w-2/5" />
    </div>

    <div
      class="flex flex-col-reverse lg:flex-row font-manrope md:text-base text-xs space-y-4 space-x-4 mx-8 md:mx-20 items-center mt-14 leading-5 md:leading-7 normal-case"
    >
      <img src="/newfest_elements.jpg" alt="" class="w-3/5 xl:w-2/5" />
      <p>
        Pour refléter l'esprit du festival, j'ai sélectionné des couleurs vives comme le rouge et des typographies vintage, 
        créant un design original et adapté au web. J'ai rédigé l'ensemble des contenus textuels du site web de manière efficace,
         et j'ai conçu tous les éléments graphiques présents sur le site, tels que les boutons, l'en-tête, le pied de page et les
          cartes.
      </p>
    </div>

    <div
      class="flex flex-col justify-center font-manrope md:text-base text-xs space-y-4  mx-8 md:mx-28 mt-14 leading-5 md:leading-7 normal-case"
    >
      <p>
        En utilisant les auto layout de Figma, j'ai créé des maquettes du site pour tous les formats d'écrans, et j'ai codé le site web en utilisant VueJS et une base de données Firebase. Cette expérience m'a permis de mettre en pratique mes compétences en identité de marque, en design et en développement web, et j'ai ainsi pu créer un site web cohérent et adapté au web pour un festival de musique fictif.
      </p>

      <p class="ml-0">
        J'ai trouvé ce projet très enrichissant car il m'a permis d'acquérir de l'expérience professionnelle, en développant mes compétences en identité de marque, en design et en développement web. Grâce à cette expérience, j'ai pu concevoir un site web de qualité pour un festival de musique fictif, et j'ai hâte de mettre mes compétences en pratique dans des projets futurs.      </p>
    </div>

    <div class="flex justify-center ml-0">
      <div class="grid grid-cols-1 xl:grid-cols-5 gap-3 mt-14">
        <div class="col-span-4">
          <img
            :src="srcImage"
            alt=""
            class="xl:h-[28rem] h-[20rem] w-full transition ease-in-out duration-500 border-[4px] border-white object-cover"
            id="big_pict"
          />
        </div>

        <div class="flex flex-row xl:flex-col w-full">
          <button
            @click="
              (srcImage = '/newfest_1.jpg'),
                (imageChoisie1 = true),
                (imageChoisie2 = false),
                (imageChoisie3 = false),
                (imageChoisie4 = false)
            "
            class="relative w-full h-full"
          >
            <img
              :class="{
                'opacity-100': imageChoisie1 === true,
                'opacity-60': imageChoisie1 === false,
              }"
              src="/newfest_1.jpg"
              alt=""
              class=" w-full h-full xl:h-[7rem] border-4 border-white transition ease-in-out duration-500 object-cover"
            />
          </button>
          <button
            @click="
              (srcImage = '/newfest_2.jpg'),
                (imageChoisie1 = false),
                (imageChoisie2 = true),
                (imageChoisie3 = false),
                (imageChoisie4 = false)
            "
            class="relative w-full h-full"
          >
            <img
              :class="{
                'opacity-100': imageChoisie2 === true,
                'opacity-60': imageChoisie2 === false,
              }"
              src="/newfest_2.jpg"
              alt=""
              class=" w-full h-full xl:h-[7rem] border-4 border-white transition ease-in-out duration-500 object-cover"
            />
          </button>
          <button
            @click="
              (srcImage = '/newfest_3.jpg'),
                (imageChoisie1 = false),
                (imageChoisie2 = false),
                (imageChoisie3 = true),
                (imageChoisie4 = false)
            "
            class="relative w-full h-full"
          >
            <img
              :class="{
                'opacity-100': imageChoisie3 === true,
                'opacity-60': imageChoisie3 === false,
              }"
              src="/newfest_3.jpg"
              alt=""
              class=" w-full h-full xl:h-[7rem] border-4 border-white transition ease-in-out duration-500 object-cover"
            />
          </button>
          <button
            @click="
              (srcImage = '/newfest_4.jpg'),
                (imageChoisie1 = false),
                (imageChoisie2 = false),
                (imageChoisie3 = false),
                (imageChoisie4 = true)
            "
            class="relative w-full h-full"
          >
            <img
              :class="{
                'opacity-100': imageChoisie4 === true,
                'opacity-60': imageChoisie4 === false,
              }"
              src="/newfest_4.jpg"
              alt=""
              class="opacity-75 w-full h-full xl:h-[7rem] border-4 border-white transition ease-in-out duration-500 object-cover"
            />
          </button>
        </div>
      </div>
    </div>

    <div
      class="font-fantome md:text-5xl text-4xl mx-8 md:mx-32 flex flex-col mt-14 mb-24"
    >
      <RouterLink
        to="/troisf" @click="scrollToTop"
        class="self-start flex items-center space-x-2 md:space-x-8 transition ease-in-out duration-500 hover:-translate-x-3 hover:text-blue-700"
      >
        <div class="">
          <IconArrowNoir class="sym-h"></IconArrowNoir>
        </div>
        <h2>Fuck Fast Fashion</h2>
      </RouterLink>

      <RouterLink
        to="/cpfm" @click="scrollToTop"
        class="self-end flex items-center space-x-2 md:space-x-8 transition ease-in-out duration-500 hover:translate-x-3 hover:text-blue-700"
      >
        <h2>Analyse CPFM</h2>
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
    return {
      srcImage: "/newfest_1.jpg",
    };
  },

  props: {
    imageChoisie1: {
      type: Boolean,
      default: true,
    },
    imageChoisie2: {
      type: Boolean,
      default: false,
    },
    imageChoisie3: {
      type: Boolean,
      default: false,
    },
    imageChoisie4: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};

</script>