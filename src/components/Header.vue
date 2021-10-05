<template>
  <section
    class="
      vh-100
      bg-gradient-anim
      d-flex
      flex-column
      align-center
      justify-content-center
      p-relative
    "
  >
    <div :class="bgTriangle">
      <article :class="classArrow">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 pt-5">
              <a class="ttl-black magic-hover magic-hover__square">
                <h1
                  id="ttl-home"
                  :class="classColor"
                  class="wow fadeInUp p-ttl-header"
                ></h1>
              </a>
              <p class="ttl-white mt-4 wow fadeInUp" data-aos="fade-up">
                {{ parrafo }}
              </p>
            </div>
            <div class="col-lg-5"></div>
          </div>
        </div>
      </article>
      <div class="triangle"></div>
      <img
        class="banana hallucination-effect d-none-img-header"
        id="tilt"
        :src="require(`@/assets/img/${folder}/${name}.png`)"
        alt=""
      />
      <img class="arrow-1" src="@/assets/img/home/arrow-1.png" alt="" />
      <img class="arrow-2" src="@/assets/img/home/arrow-2.png" alt="" />
      <img class="arrow-3" src="@/assets/img/home/arrow-3.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
  props: ["parrafo", "image", "classArrow", "classColor", "folder", "name", "bgTriangle"],
};
</script>

<style>
.p-ttl-header {
  padding: 0 10rem 0 0;
}
@media (max-width: 1000px) {
  .d-none-img-header {
    display: none;
  }
  .p-ttl-header {
    padding: 0 0 0 0;
  }
}
</style>