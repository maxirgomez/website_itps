<template>
  <footer class="bg-gray">
    <div class="container">
      <h3 class="ttl-white text-center py-5 m-0">
        {{ quote }}
      </h3>
    </div>
  </footer>
</template>

<script>
export default {
  name: "QuoteBgGray",
  props: ["quote"],
};
</script>

<style>
</style>