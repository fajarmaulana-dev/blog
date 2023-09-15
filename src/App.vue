<script setup lang="ts">
</script>

<template>
  <main class="max-w-screen overflow-hidden">
    <router-view />
  </main>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}

button,
a {
  user-select: none;
}

.viet {
  font-family: 'Be Vietnam Pro', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.dmon {
  font-family: 'DM Mono', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background-color: rgb(29, 47, 78);
}

::-webkit-scrollbar-thumb {
  background-color: rgb(6 182 212);
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgb(8 145 178);
}

.sc-h::-webkit-scrollbar-thumb,
.sc-h::-webkit-scrollbar-track {
  border-radius: 5px 5px 0 0;
}

.check input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  cursor: pointer;
}

/* .ellips {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: block;
  display: -webkit-box;
} */
</style>