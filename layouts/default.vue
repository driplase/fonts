<script setup>
</script>
<template>
  <div class="container">
    <AppHeader />
    <div class="content">
      <slot />
    </div>
  </div>
</template>
<style>
.container {
  height: 100dvh;
  display: flex;
  flex-direction: column;
}
.content {
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
main {
  text-align: start;
  padding: 8px;
  width: 100%;
  overflow-x: hidden;
}
</style>