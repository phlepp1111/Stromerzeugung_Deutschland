<script setup>
import { ref, onMounted } from 'vue'
const data = ref([])

onMounted(fetchData)
async function fetchData() {
  try {
    console.log('fetch sent')
    const response = await fetch('/lastgraph')
    data.value = response
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div class="LastGraph">
    <h1>Here should be the last Graph that we got from db</h1>
    <div v-for="item in data" :key="item.ID">{{ item }}</div>
  </div>
</template>
