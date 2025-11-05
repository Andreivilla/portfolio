<template>
  <span :class="['tag', colorClass]">
    {{ text }}
  </span>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    text: {
      type: String,
      required: true
    }
  })

  // Mapa de cores incluindo palavras compostas
  const colorMap = {
    'JavaScript': 'bg-javascript',
    'Pinia': 'bg-pinia',
    'Vue Router': 'bg-vue-router',
    'HTML': 'bg-html',
    'Bootstrap': 'bg-bootstrap',
    'Design Responsivo': 'bg-responsivo',
    'Temas': 'bg-temas',    
    'Tailwind CSS': 'bg-tailwind',

    'API externa': 'bg-purple',
    'Machine Learning': 'bg-pink'
  }


  // Normaliza o texto antes de buscar a cor
  const normalizedText = computed(() => props.text.trim())

  const colorClass = computed(() => {
    return colorMap[normalizedText.value] || 'bg-gray'
  })
</script>

<style scoped>
  .tag {
    padding: 6px 12px;
    border-radius: 12px;
    color: white;
    font-weight: bold;
    font-size: 14px;
    display: inline-block;
  }
  .bg-pinia { background-color: #FFE064;}
  .bg-javascript { background-color: #f7df1e; color: #000; }
  .bg-vue-router { background-color: #35495E; }
  .bg-html { background-color: #f16529; }
  .bg-bootstrap { background-color: #2965f1; }
  .bg-responsivo { background-color: #FE7741; }
  .bg-temas { background-color: #000A4A; }

  .bg-green { background-color: #42b883; }
  .bg-purple { background-color: #8e44ad; }
  .bg-pink { background-color: #e91e63; }
  .bg-gray { background-color: #777; }
  .bg-tailwind { background-color: #38BDF8;}

</style>
