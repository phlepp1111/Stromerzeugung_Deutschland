<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const chartRef = ref(null)
const data = ref([])

onMounted(fetchLastGraph)

async function fetchLastGraph() {
  try {
    console.log('fetch sent')
    const response = await fetch('/lastweek')
    data.value = await response.json()
    createChart()
  } catch (error) {
    console.log(error)
  }
}
function createChart() {
  if (!chartRef.value || data.value.length === 0) return

  const labels = data.value.map((item) =>
    new Date(Number(item.Timestamp_Unix)).toISOString().slice(0, 16).replace('T', ' ')
  )
  const datasets = []

  const categories = Object.keys(data.value[0]).filter(
    (category) => category !== 'ID' && category !== 'Timestamp_Unix'
  )

  const categoryLabels = []

  categories.forEach((category) => {
    const chartData = data.value.map((item) => item[category])
    const color = getRandomColor()
    datasets.push({
      label: '',
      data: chartData,
      borderColor: color,
      backgroundColor: color,
      borderWidth: 1,
      fill: false,
      pointRadius: 0,
      spanGaps: true
    })
    categoryLabels.push(category)
  })

  datasets.forEach((dataset, index) => {
    dataset.label = categoryLabels[index]
  })

  const chartConfig = {
    type: 'line',
    data: {
      labels,
      datasets
    },
    options: {
      responsive: true,
      scales: {
        x: {
          display: true
        },
        y: {
          display: true,
          beginAtZero: true
        }
      },
      spanGaps: true,
      datasets: {
        line: {
          pointRadius: 0
        }
      },
      elements: {
        point: {
          radius: 0
        }
      }
    }
  }
  const ctx = chartRef.value.getContext('2d')
  new Chart(ctx, chartConfig)
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
