<template>
    <div class="flex-col flex mt-6 w-full px-8 sm:px-12 lg:px-20 xl:px-36">
        <h2 class="font-fantome text-[8rem] uppercase self-start">Salut,</h2>
        <div class="flex flex-col-reverse md:flex-row items-center space-x-6">
            <div class="flex-col font-manrope text-lg space-y-6 xl:mr-44 md:mr-28 lg:mr-32">
                <p>Je m'appelle Antonin Heuguet et je suis un créateur multimédia dijonnais en devenir âgé de 19 ans.  Actuellement en deuxième année de B.U.T. MMI à Montbéliard, mon objectif principal est de travailler dans le domaine de la vidéo ou du design graphique, des métiers qui me passionnent.</p>
                <p>Sur ce site, vous pourrez découvrir une partie de mon univers artistique ainsi que mes recherches pour trouver mon propre style graphique. Mon travail englobe l'identité de marque, le design d'impression et l'audiovisuel, vous offrant ainsi une vision globale de mes compétences.
                Au-delà de l'aspect professionnel, la création de contenu est pour moi une véritable passion.</p>
                <p>Si mon travail vous plaît, n'hésitez pas à me suivre et à me contacter sur mes différents <RouterLink to="/contact"  @click="scrollToTop" class="text-blue-700 underline"> réseaux sociaux</RouterLink>.</p>
            </div>
            <img src="/Photomoi.jpg" alt="" class="md:w-2/5  w-1/4 object-cover">
        </div>
    </div>

    <footer class="flex flex-col  p-8 font-madelight text-xs uppercase mt-8 bg-gray-50 text-black">
    <p class="self-start">design & dev - Antonin Heuguet</p> 
    <p class="self-end">Antonin Heuguet © 2023</p>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
}
</script>