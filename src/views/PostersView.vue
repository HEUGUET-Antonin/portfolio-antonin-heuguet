<template>
   
    <div class="relative">

        <img src="/mockupposters.jpg" alt="" class="filter contrast-150 brightness-95 h-[16rem] w-full object-cover absolute sm:h-[24rem] xl:h-[36rem]">

        <h1 class="absolute font-fantome uppercase text-blue-700 mt-[12.5rem] text-[7vw] ml-[1rem] sm:mt-[17.5rem] xl:mt-[28rem] xl:ml-20 xl:text-[6vw]">Posters</h1>
    </div>

    <div class="uppercase mt-[23rem] sm:mt-[30rem] xl:mt-[40rem] absolute w-full">
        <h2 class="font-mademedium mb-8 md:text-2xl  mx-8 md:mx-20 text-xl">Design d'impression</h2>
        <div class="font-maderegular flex flex-col md:flex-row md:space-x-20 space-y-2 md:space-y-0 justify-start mb-8 text-lg md:text-base mx-20">
            <p>Mai<span class="text-blue-700"> 2022</span></p>
            <p>Projet <span class="text-blue-700">personnel</span></p>
            <p>Photoshop</p>
        </div>

    <div
      class="flex space-x-2 md:space-x-20 md:flex-row flex-col xl:mr-52 mx-8 md:mx-20 mt-14"
    >
      <h2 class="font-mademedium mb-8 md:text-2xl text-xl w-full">le projet</h2>
      <div
        class="flex flex-col font-manrope md:text-base text-xs space-y-4 leading-5 md:leading-7 normal-case"
      >
        <p class="">
          Mes posters ont été créés à partir d'une impulsion purement créative. Parfois, dans ma vie quotidienne, 
          je ressens le besoin pressant de créer quelque chose, et c'est dans ces moments que sont nés les quelques 
          posters que vous trouverez ci-dessous. Bien que je n'aie pas spécifiquement cherché à atteindre un objectif
           précis dans ces créations, j'ai pris plaisir à les réaliser et j'ai vu cela comme une occasion d'améliorer
            mes compétences en design sur Photoshop. En les présentant dans mon portfolio, j'espère partager avec vous
             mon côté personnel et artistique, tout en démontrant ma capacité à créer des designs attrayants et efficaces.
        </p>
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row font-manrope md:text-base text-xs space-y-4 space-x-4 mx-8 md:mx-20 items-center mt-14 leading-5 md:leading-7 normal-case"
    >
      <p>
        Pour la première série de posters, j'ai cherché à transmettre un message d'espoir et de résilience à travers la 
        citation que j'ai choisie. J'ai voulu mettre en avant l'importance de se relever après un échec et de continuer 
        à avancer malgré les obstacles qui se présentent sur notre chemin. Les photos que j'ai choisies étaient en parfaite
         adéquation avec ce message et j'ai pris plaisir à les retoucher pour obtenir un résultat final qui me satisfait 
         pleinement.
      </p>
      <img src="/posters_1.jpg" alt="" class="w-3/5 xl:w-2/5 object-cover" />
    </div>

    <div
      class="flex flex-col-reverse lg:flex-row font-manrope md:text-base text-xs space-y-4 space-x-4 mx-8 md:mx-20 items-center mt-14 leading-5 md:leading-7 normal-case"
    >
      <img src="/posters_2.jpg" alt="" class="w-3/5 xl:w-2/5 object-cover" />
      <p>
        Pour la deuxième série, j'ai voulu aborder un sujet qui me tient à cœur : la détresse psychologique. 
        La photographie que j'ai trouvée sur Pinterest m'a immédiatement inspirée et j'ai cherché à créer un design 
        qui véhicule l'idée de souffrance intérieure. J'espère que ce poster pourra toucher les personnes qui sont 
        confrontées à des difficultés psychologiques et leur apporter un certain réconfort en leur montrant qu'ils ne 
        sont pas seuls.
      </p>
    </div>

    <div
      class="flex flex-col justify-center font-manrope md:text-base text-xs space-y-4  mx-8 md:mx-28 mt-14 leading-5 md:leading-7 normal-case"
    >
      <p>
       En somme, ces posters reflètent mes centres d'intérêt personnels ainsi que mes compétences en design. 
       J'espère qu'ils sauront vous plaire et qu'ils vous donneront un aperçu de mon style artistique. À travers 
       ces créations, j'ai cherché avant tout à exprimer mes émotions et mes idées.
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
              (srcImage = '/posters_3.jpg'),
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
              src="/posters_3.jpg"
              alt=""
              class=" w-full h-full xl:h-[7rem] border-4 border-white transition ease-in-out duration-500 object-cover"
            />
          </button>
          <button
            @click="
              (srcImage = '/posters_4.jpg'),
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
              src="/posters_4.jpg"
              alt=""
              class=" w-full h-full xl:h-[7rem] border-4 border-white transition ease-in-out duration-500 object-cover"
            />
          </button>
          <button
            @click="
              (srcImage = '/posters_5.jpg'),
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
              src="/posters_5.jpg"
              alt=""
              class=" w-full h-full xl:h-[7rem] border-4 border-white transition ease-in-out duration-500 object-cover"
            />
          </button>
          <button
            @click="
              (srcImage = '/posters_6.jpg'),
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
              src="/posters_6.jpg"
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
      srcImage: "/posters_3.jpg",
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