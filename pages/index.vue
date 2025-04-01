<script setup>
import fonts from "../data/fonts.json"
const fontSize = ref(40), text = ref('');
const fontList = ref(fonts);

const changeFontSize = (c) => {
  if (c.type === "fontSize") fontSize.value = parseInt(c.value);
  if (c.type === "text") text.value = c.value;
};

const search = (str) => {
  fontList.value = fonts.filter(i =>
    str ? i.fontName.toLowerCase().includes(str.toLowerCase()) : true
  )
}
</script>
<template>
  <PreviewSidebar @change="changeFontSize" />
  <main>
    <input
      class="search"
      type="search"
      @input="(e) => search(e.target.value)"
      placeholder="Search fonts..."
    >
    <FontView
      class="font-view"
      v-for="item in fontList"
      :fontName="item.fontName"
      :fontPath="item.fontPath"
      :author="item.author"
      :text="text"
      :fontSize="fontSize"
    />
  </main>
</template>
<style scoped>
.search {  
  width: calc(100% - 16px);
  margin: 8px;
  margin-bottom: 16px;
  height: 48px;
  border-radius: 24px;
  font-size: 18px;
  padding: 8px 24px;
}
</style>