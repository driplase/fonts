<template>
  <nav>
    <a href="/">
      <div class="navbar">
        <span class="brand">
          laseFonts
        </span>
      </div>
    </a>
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  width: 100%;
  height: 48px;
  padding: 2px;
  background: #e9ecff7c;
  align-items: center;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #8bcbff98;
}
nav > a {
  text-decoration: none;
  color: var(--color-text);
}
.navbar {
  width: 100%;
  padding: 8px 12px;
}
.brand {
  display: flex;
  font-size: 1.4rem;
  font-family: Lixeld, sans-serif;
  padding-top: 8px;
  justify-content: flex-start;
  margin-left: 25px;
  text-shadow: 1px 1px 3px var(--color-text-shadow);
  user-select: none;
}
</style>