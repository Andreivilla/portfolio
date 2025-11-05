<template>
  <footer id="contact-links" 
    class="flex flex-col justify-center items-center pt-4 text-white">
    <div class="w-full h-px my-2
    bg-gradient-to-r from-[#9333ea] via-white to-[#9333ea] "></div>
    
    <section id="contact" 
      class="w-full flex flex-col items-center gap-4 py-2">
      <h1 class="text-[var(--main-color)] text-3xl font-bold text-center">Vamos conversar?</h1>
      <p class="text-[var(--main-color)] text-2xl font-medium font-montserrat text-center">Envie sua mensagem.</p>

      <div class="flex flex-col md:flex-row md:justify-between items-center w-full gap-6 mt-4">
        <!-- Email Link -->
        <a
          href="mailto:andreivilla63@gmail.com"
          class="flex items-center gap-3 px-4 py-3 rounded-xl border border-white text-white 
                hover:bg-primary hover:text-white transition duration-300 
                w-fit truncate"
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
            class="w-6 h-6 shrink-0 fill-white" 
            viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
          </svg>
          <span class="text-base font-semibold font-montserrat">andreivilla63@gmail.com</span>
        </a>



        <!-- Social Links -->
        <div class="flex flex-wrap gap-4 justify-center">
          <!-- LinkedIn -->
          <a
            class="flex items-center gap-2 rounded-lg bg-primary py-3 px-6 
                  font-sans text-xs font-bold uppercase text-white shadow-md 
                  transition-all hover:shadow-primary/20 
                  focus:opacity-[0.85] focus:shadow-none 
                  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none 
                  disabled:opacity-50 disabled:shadow-none w-fit"
            href="https://www.linkedin.com/in/andrei-villa-7729801b6/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <svg xmlns="http://www.w3.org/2000/svg" 
              class="w-6 h-6 fill-white" 
              viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
            <span class="font-medium">LinkedIn</span>
          </a>

          <!-- WhatsApp -->
          <a
            class="flex items-center gap-2 rounded-lg bg-primary py-3 px-6 
                  font-sans text-xs font-bold uppercase text-white shadow-md 
                  transition-all hover:shadow-primary/20 
                  focus:opacity-[0.85] focus:shadow-none 
                  active:opacity-[0.85] active:shadow-none disabled:pointer-events-none 
                  disabled:opacity-50 disabled:shadow-none w-fit"
            href="https://wa.me/qr/CCL6LDE42Z4UC1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" 
              class="w-6 h-6 fill-white" 
              viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.946 7.946 0 0 0 8.003 0C3.584 0 .003 3.582.003 7.999c0 1.41.37 2.782 1.073 3.994L0 16l4.127-1.073a7.96 7.96 0 0 0 3.876.987h.003c4.418 0 7.999-3.582 7.999-8.001a7.946 7.946 0 0 0-2.404-5.587zM8.003 14.545a6.52 6.52 0 0 1-3.33-.91l-.238-.141-2.448.637.654-2.386-.155-.245a6.52 6.52 0 0 1-.998-3.42c0-3.594 2.925-6.52 6.52-6.52a6.48 6.48 0 0 1 4.604 1.91 6.48 6.48 0 0 1 1.91 4.607c0 3.595-2.926 6.52-6.52 6.52zm3.57-4.942c-.195-.098-1.15-.568-1.328-.633-.178-.065-.308-.098-.438.098-.13.195-.503.633-.617.762-.114.13-.228.146-.423.049-.195-.098-.823-.303-1.566-.967-.579-.516-.97-1.152-1.085-1.347-.114-.195-.012-.3.086-.398.088-.088.195-.228.293-.342.098-.114.13-.195.195-.325.065-.13.033-.244-.016-.342-.049-.098-.438-1.054-.6-1.446-.158-.379-.319-.327-.438-.333l-.373-.007c-.13 0-.342.049-.52.244s-.683.667-.683 1.63.7 1.89.797 2.02c.098.13 1.38 2.107 3.345 2.953.468.202.832.322 1.116.412.468.149.894.128 1.23.078.375-.056 1.15-.469 1.313-.922.162-.454.162-.844.114-.922-.049-.079-.179-.13-.373-.228z"/>
            </svg>
            <span class="font-medium">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup>

</script>
