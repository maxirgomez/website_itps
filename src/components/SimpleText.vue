<template>
  <article class="p-5">
    <header>
      <h1 class="text-center wow fadeInUp">{{ titulo }}</h1>
    </header>
    <div class="container mt-3 text-center">
      <p class="ttl-gray f-resize">
        {{ parrafo }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
    name: 'SimpleText',
    props: ['titulo', 'parrafo']
};
</script>

<style scoped>
.f-resize{
  font-size: 3vh;
}
@media(max-width: 1000px){
  .f-resize{
    font-size: 2vh;
  }
}
</style>