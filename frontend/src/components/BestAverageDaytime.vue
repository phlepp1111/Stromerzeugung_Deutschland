<script setup>
import { ref, onMounted } from 'vue'

onMounted(fetchBestAverageDayTime)

const isLoading = ref(true)
let averageTime = ''
let minTime = ''
let maxTime = ''
async function fetchBestAverageDayTime() {
  try {
    const response = await fetch('/bestaveragedaytime')
    const data = await response.json()

    averageTime = data.averageTime
    minTime = data.minTime
    maxTime = data.maxTime
    isLoading.value = false
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div class="BestAverageDaytime">
    <template v-if="isLoading"> Loading... </template>
    <template v-else>
      <template v-if="averageTime !== undefined && averageTime !== null && averageTime !== ''">
        <h3>
          Im Durchschnitt war in den letzten 4 Wochen der Zeitpunkt mit dem größten Anteil an
          erneuerbarer Energie um {{ averageTime }} Uhr.
        </h3>
        <h3>Die beste Zeitspanne ist zwischen {{ minTime }} und {{ maxTime }} Uhr.</h3>
      </template>
      <template v-else> No data available. </template>
    </template>
  </div>
</template>
