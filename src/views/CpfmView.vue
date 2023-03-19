<template>
   
    <div class="relative">

        <img src="/57948.jpg" alt="" class="filter contrast-150 brightness-95 h-[16rem] w-full object-cover absolute sm:h-[24rem] xl:h-[36rem]">

        <h1 class="absolute font-fantome uppercase text-blue-700 mt-[12.5rem] text-[7vw] ml-[1rem] sm:mt-[17.5rem] xl:mt-[28rem] xl:ml-20 xl:text-[6vw]">Analyse CPFM</h1>
    </div>

    <div class="uppercase mt-[23rem] sm:mt-[30rem] xl:mt-[40rem] absolute w-full">
        <h2 class="font-mademedium mb-8 md:text-2xl  mx-8 md:mx-20 text-xl">Analyse identité de marque</h2>
        <div class="font-maderegular flex flex-col md:flex-row md:space-x-20 space-y-2 md:space-y-0 justify-start mb-8 text-lg md:text-base mx-20">
            <p>Septembre<span class="text-blue-700"> 2022</span></p>
            <p>Projet <span class="text-blue-700">étudiant</span></p>
            <p>Indesign</p>
        </div>

    <div
      class="flex space-x-2 md:space-x-20 md:flex-row flex-col xl:mr-52 mx-8 md:mx-20 mt-14"
    >
      <h2 class="font-mademedium mb-8 md:text-2xl text-xl w-full">le projet</h2>
      <div
        class="flex flex-col font-manrope md:text-base text-xs space-y-4 leading-5 md:leading-7 normal-case"
      >
        <p class="">
          Ce projet était relativement simple en apparence, mais il m'a apporté énormément en termes d'apprentissage,
           et je suis très satisfait du résultat final. Il s'agissait d'analyser la charte graphique d'une marque de
            vêtements de mon choix, puis de la mettre en page sur Indesign. Cette analyse était l'étape préliminaire
             de mon projet <RouterLink to="/troisf" @click="scrollToTop" class="text-blue-700 underline">"Fuck Fast Fashion"</RouterLink>
             . J'ai choisi la marque "CPFM" (Cactus Plant Flea Market) car j'admire 
             leur style original et leur communication singulière. Je n'avais jamais travaillé dans le domaine de la 
             mode auparavant, ce projet représentait donc un véritable défi pour moi étant passionné par celui-ci.
        </p>
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row font-manrope md:text-base text-xs space-y-4 space-x-4 mx-8 md:mx-20 items-center mt-14 leading-5 md:leading-7 normal-case"
    >
      <p>
        Cependant, j'ai rapidement rencontré un problème de taille : la communication de la marque est quasi inexistante, 
        ce qui m'a empêché de trouver une charte graphique écrite noir sur blanc. J'ai donc dû passer des heures à analyser 
        chaque détail des différents contenus disponibles sur la marque : articles, design des vêtements, site web, etc. Mais
         après cette longue étape, j'ai enfin pu commencer à designer la charte graphique, qui était selon moi la partie la 
         plus passionnante du projet.
      </p>
      <img src="/CPFM_1.jpg" alt="" class="w-3/5 xl:w-2/5 object-cover" />
    </div>

    <div
      class="flex flex-col-reverse lg:flex-row font-manrope md:text-base text-xs space-y-4 space-x-4 mx-8 md:mx-20 items-center mt-14 leading-5 md:leading-7 normal-case"
    >
      <img src="/CPFM_2.jpg" alt="" class="w-3/5 xl:w-2/5 object-cover" />
      <p>
        Mon objectif principal était de représenter au mieux le style de la marque dans ma conception. Pour cela, 
        j'ai utilisé les couleurs emblématiques de CPFM, à savoir le jaune et le noir. J'ai également sélectionné
         les typographies qui sont utilisées sur leur site et sur leurs vêtements pour garantir une cohérence parfaite. 
         Sur certaines pages, j'ai même choisi de mettre en page de manière désorganisée pour recréer l'esprit de la marque.
          Enfin, j'ai mis en avant les messages et les valeurs que CPFM souhaite transmettre.
      </p>
    </div>

    <div
      class="flex flex-col justify-center font-manrope md:text-base text-xs space-y-4  mx-8 md:mx-28 mt-14 leading-5 md:leading-7 normal-case"
    >
      <p>
        Ce projet m'a appris énormément de choses sur le logiciel Indesign, et je suis très fier du résultat final. Je pense que ma conception représente parfaitement l'esprit de la marque, et cela me donne une grande satisfaction personnelle.
      </p>

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
              (srcImage = '/CPFM_6.jpg'),
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
              src="/CPFM_6.jpg"
              alt=""
              class=" w-full h-full xl:h-[7rem] border-4 border-white transition ease-in-out duration-500 object-cover"
            />
          </button>
          <button
            @click="
              (srcImage = '/CPFM_4.jpg'),
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
              src="/CPFM_4.jpg"
              alt=""
              class=" w-full h-full xl:h-[7rem] border-4 border-white transition ease-in-out duration-500 object-cover"
            />
          </button>
          <button
            @click="
              (srcImage = '/CPFM_5.jpg'),
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
              src="/CPFM_5.jpg"
              alt=""
              class=" w-full h-full xl:h-[7rem] border-4 border-white transition ease-in-out duration-500 object-cover"
            />
          </button>
          <button
            @click="
              (srcImage = '/CPFM_3.jpg'),
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
              src="/CPFM_3.jpg"
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
        to="/newfest" @click="scrollToTop"
        class="self-start flex items-center space-x-2 md:space-x-8 transition ease-in-out duration-500 hover:-translate-x-3 hover:text-blue-700"
      >
        <div class="">
          <IconArrowNoir class="sym-h"></IconArrowNoir>
        </div>
        <h2>Newfest</h2>
      </RouterLink>

      <RouterLink
        to="/posters" @click="scrollToTop"
        class="self-end flex items-center space-x-2 md:space-x-8 transition ease-in-out duration-500 hover:translate-x-3 hover:text-blue-700"
      >
        <h2>Posters</h2>
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
      srcImage: "/CPFM_6.jpg",
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