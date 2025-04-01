<script setup>
import fonts from "../data/fonts.json"
import sampleStc from "../data/sampleText.json"
const route = useRoute();
const sampleText = ref(''), previewText = ref(null) 

const font = fonts.find(i =>
  i.fontName.toLowerCase() === route.params.font.toLowerCase());

const changeText = (type) => sampleText.value =
  sampleStc[type][Math.floor(Math.random() * sampleStc[type].length)]

changeText('en')

if (!font) {
  throw createError({
    statusCode: 404,
    message: `Font not found: ${route.params.font}`,
    fatal: true
  })
}

onMounted(() => {
  new FontFace(font.fontName, `url(${font.fontPath})`)
})
</script>
<template>
  <main>
    <h1 class="font-title">{{ font.fontName }}</h1>
    <h5 class="font-author">by {{ font.author }}</h5>
    <div class="specimen">
      <h1
        class="sample"
        :style="{ fontFamily: font.fontName }"
      >{{ sampleText }}</h1>
    </div>
    <button type="button" @click="changeText('en')">Change text</button>
    i'll create a preview thing soon, ok? :́D <!-- <= i mean, sweat smile -->
    <div class="preview">

    </div>
  </main>
</template>
<style scoped>
main {
  padding: 16px 32px;
}
.font-title {
  font-size: 48px;
}
.font-author {
  font-size: 16px;
  color: var(--color-text-gray);
}
.specimen {
  width: 100%;
  padding: 128px 24px;
  text-align: center;
}
.sample {
  font-size: 60px;
}
</style>