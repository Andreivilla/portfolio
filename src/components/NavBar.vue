<template>
  <header class="sticky top-0 shadow-md z-50 
    bg-[#1A0033] max-w-screen-2xl mx-auto lg:px-16 px-4 flex flex-wrap 
    items-center">
    <div class="flex-1 flex justify-between items-center">
        <a href="#main-content" class="font-logo text-4xl font-bold text-white my-2">Andrei Villa</a>
    </div>
      <HamburgerMenu 
        class="md:hidden block"
        @changeMenu="changeMenu"
      /> 

    <div :class="menuOpen ? 'block' : 'hidden'" class="md:flex md:items-center md:w-auto w-full">
        <nav>
            <ul class="md:flex items-center justify-between text-base pt-4 md:pt-0">
                <li>
                  <a href="#main-content" class="text-xl text-white hover:text-primary md:mr-4">Home</a>
                </li>
                <li>
                  <a href="#contact-links" class="text-xl text-white hover:text-primary md:mr-4">Contato</a>
                </li>
                <li>
                  <a href="#projects" class="text-xl text-white hover:text-primary">Projetos</a>
                </li>
            </ul>
        </nav>
    </div>
  </header>
</template>

<script setup>
  import { ref } from 'vue';
  import HamburgerMenu from './HamburgerMenu.vue';

  const menuOpen = ref(false);

  function changeMenu(){
    menuOpen.value = !menuOpen.value;
  }

</script>

