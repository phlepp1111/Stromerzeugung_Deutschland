<script setup>
import { RouterLink, RouterView } from 'vue-router'
async function update() {
  const res = await fetch('/update')
  const data = await res.json()
  alert(data.done)
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/lastgraph">Last Graph</RouterLink>
        <button @click="update">Update Database</button>
      </nav>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.content {
  width: 70vw;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  z-index: 2;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a,
nav button {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
