<script setup lang="ts">
</script>

<template>
  <div class="max-w-screen overflow-hidden">
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Be Vietnam Pro', cursive, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background-color: #e879f9;
}

::-webkit-scrollbar-thumb {
  background-color: #8b5cf6;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #7c3aed;
}

/* .ellips {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
} */
</style>