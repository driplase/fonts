<script setup>
const fontSize = ref(40);
const emit = defineEmits(['change'])

const changeValue = (e, type) => {
  if (type === "fontSize") fontSize.value = e.target.value;
  emit('change', { type, value: e.target.value })
}
</script>
<template>
  <div class="sidebar">
    <h3>Preview</h3>
    <textarea
      placeholder="Type something..."
      @input="(e) => changeValue(e, 'text')"
    ></textarea>
    <br>
    <label
      name="size-changer"
    >{{ fontSize }}px</label>
    <input
      class="size-changer"
      type="range"
      min="8" max="128"
      value="40"
      name="size-changer"
      @input="(e) => changeValue(e, 'fontSize')"
    >
  </div>
</template>
<style scoped>
.sidebar {
  position: sticky;
  left: 0;
  padding: 8px 20px;
  padding-top: 64px;
  background: #f5f9ff;
  height: 100%;
}
h3 {
  font-size: 18px;
  margin-bottom: 5px;
}
.size-changer {
  width: 100%;
}
</style>