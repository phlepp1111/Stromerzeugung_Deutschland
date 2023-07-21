<script setup>
import { ref, onMounted } from 'vue'

onMounted(fetchBestAverageDayTime)

const isLoading = ref(true)
let averageTime = ''
async function fetchBestAverageDayTime() {
  try {
    const response = await fetch('/bestaveragedaytime')
    const data = await response.json()

    averageTime = data.averagetime
    isLoading.value = false
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div class="BestAverageDaytime">
    <h3>
      Im Durchschnitt war in den letzten 4 Wochen der beste Zeitpunkt:
      <template v-if="isLoading"> Loading... </template>
      <template v-else>
        <template v-if="averageTime !== undefined && averageTime !== null && averageTime !== ''">
          {{ averageTime }}
        </template>
        <template v-else> No data available. </template>
      </template>
    </h3>
  </div>
</template>
