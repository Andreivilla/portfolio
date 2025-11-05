<template>
  <div class="bg-gradient-to-br from-[#1A0033] via-[#330066] to-[#4D0099] max-w-screen-2xl mx-auto min-h-screen">
    <NavBar/>
    <MainContent/>
    <TechnologiesSection/>
    <ProjectCarousel/>
    <FooterContent/>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import MainContent from "./components/MainContent.vue"; 
import ProjectCarousel from "./components/ProjectCarousel.vue";
import TechnologiesSection from "./components/TechnologiesSection.vue";
import FooterContent from "./components/FooterContent.vue";
</script>

<style>
body {
  background: black; /* laterais pretas */
}
</style>
