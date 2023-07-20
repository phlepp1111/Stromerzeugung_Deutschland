<script setup>
import { ref, onMounted } from 'vue'

onMounted(fetchBestAverageDayTime)
const data = ref([])

async function fetchBestAverageDayTime() {
  try {
    console.log('fetch sent')
    const response = await fetch('/bestaveragedaytime')
    data.value = await response.json()
    console.log(data.value)
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div class="BestAverageDaytime">
    <h3>Im Durchschnitt war in den letzten 4 Wochen der beste Zeitpunkt:</h3>
  </div>
</template>
