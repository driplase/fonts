<script setup>
const props = defineProps({
  fontName: String,
  fontPath: String,
  author: String,
  fontSize: Number,
  text: String,
})

const loremipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

onMounted(() => {
  new FontFace(props.fontName, `url(${props.fontPath})`)
})
</script>
<template>
  <NuxtLink :to="`/font/${props.fontName}`">
    <div class="tile">
      <p class="name">{{ props.fontName }} <span v-if="props.author" class="author">by {{ props.author }}</span></p>
      <div 
        class="text" 
        :style="{
          fontFamily: props.fontName,
          fontSize: props.fontSize + 'px'
        }"
      >
        <span class="no-select">&#xFEFF;</span>{{ props.text || loremipsum }}
      </div>
    </div>
  </NuxtLink>
</template>
<style scoped>
.tile {
  width: 100%;
  text-align: start;
  padding: 10px 24px;
  border-bottom: solid 1px var(--color-tile-split);
  overflow-x: hidden;

  &:hover {
    background: var(--color-background-selected);
    .text::after {
      background: transparent;
      background: linear-gradient(90deg, transparent 0%, var(--color-background-selected) 100%);
    }
  }
}
.name {
  font-size: 18px;
}

.author {
  font-size: 13px;
  color: var(--color-text-gray);
}

.text, .text::after {
  position: relative;
  padding: 10px 0;
  white-space: nowrap;
}

.text::after {
  position: absolute;
  content: '';
  text-align: end;
  top: 0;
  right: -24px;
  display: block;
  width: 120px;
  height: 100%;
  background: transparent;
  background: linear-gradient(90deg, transparent 0%, var(--color-background) 100%);
  pointer-events: none;
}
</style>