<script setup>
import { ref, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto'

const chartRef = ref(null)
const data = ref([])
let chartInstance = null
const isDataLoaded = ref(false)

onMounted(fetchLastGraph)
watch(isDataLoaded, (newValue) => {
  if (newValue) {
    destroyChart()
    createChart()
  }
})

async function fetchLastGraph() {
  try {
    console.log('fetch sent')
    const response = await fetch('/lastgraph')
    data.value = await response.json()
  } catch (error) {
    console.log(error)
  }
}
function createChart() {
  if (!chartRef.value || data.value.length === 0) return

  const labels = data.value.map((item) =>
    new Date(Number(item.Timestamp_Unix)).toISOString().slice(0, 19).replace('T', ' ')
  )
  const datasets = []

  if (chartInstance) {
    chartInstance.data.labels = labels
    chartInstance.data.datasets = []
  } else {
    chartInstance = new Chart(chartRef.value, {
      type: 'bar',
      data: {
        labels,
        datasets
      },
      options: {
        responsive: true,
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true,
            beginAtZero: true,
            display: false
          }
        }
      }
    })
  }
  for (const category in data.value[0]) {
    if (
      category !== 'ID' &&
      category !== 'Verbrauch_Gesamt' &&
      category !== 'Verbrauch_Pumpspeicher' &&
      data.value[0][category] !== null
    ) {
      datasets.push({
        label: category,
        data: data.value.map((item) => item[category]),
        backgroundColor: getRandomColor(),
        borderWidth: 1
      })
    }
  }

  data.value.forEach((item) => {
    datasets.forEach((dataset, index) => {
      const category = Object.keys(item)[index]
      if (
        category !== 'ID' &&
        category !== 'Verbrauch_Gesamt' &&
        category !== 'Verbrauch_Pumpspeicher' &&
        item[category] !== null
      ) {
        dataset.data.push(item[category])
      }
    })
  })

  chartInstance.update()
}
function destroyChart() {
  if (chartInstance) {
    chartInstance.destroy()
    chartInstance = null
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
</script>

<template>
  <div>
    <canvas ref="chartRef"></canvas>
  </div>
</template>
