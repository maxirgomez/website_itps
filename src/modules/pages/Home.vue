<template>
  <Header
    :titulo="tituloHome"
    :classColor="ttlColor"
    :parrafo="parrafoHome"
    :folder="carpeta"
    :name="nombreImg"
    :bgTriangle="bgTriangleGray"
  />
  <section
    class="
      py-5
      bg-gradient-gray
      d-flex
      flex-column
      align-center
      justify-content-center
    "
  >
    <article class="py-5">
      <header>
        <h1 class="text-center" data-aos="zoom-in" data-aos-delay="100">Servicios</h1>
      </header>
      <div class="container">
        <CardHover class="my-5" />
      </div>
    </article>
  </section>

  <section
    class="vh-80 d-flex justify-content-center align-items-center flex-column"
  >
    <article>
      <div class="container">
        <h1 class="text-center py-5" data-aos="zoom-in" data-aos-delay="100">Clientes</h1>
      </div>
      <LogosCustomers />
    </article>
  </section>
  <section
    class="
      bg-gradient-gray
      p-relative vh-80 d-flex flex-column justify-content-center
    "
  >
    <article class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="my-3 link" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">Dónde estamos</h1>
            <h2 class="f-border" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <a href="/paid-media" 
                >Posicionando</a
              ><br />
              marcas a lo<br />
              largo del<br />
              continente
            </h2>
          </div>
        </div>
        <img class="img-world" src="../../assets/img/home/Mundo.svg" alt="">
      </div>
    </article>
  </section>
  <section class="bg-gradient-gray p-relative vh-50">
    <article class="py-5 why-us">
      <img
        class="punos-bridge"
        src="../../assets/img/home/punosChebron.svg"
        alt=""
      />
      <div class="container">
        <div class="row">
          <div class="offset-lg-4 col-lg-8">
            <h3 class="ttl-gradient-animation pt-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">¿Por qué nosotros?</h3>
            <h1 class="my-3">
              <span class="f-border-b" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">Somos el</span>
              puente<br /><span class="f-border-b">entre la</span>
              <a
                class=""
                href="/branding"
                style="color: #000"
                data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"
                >comunicación</a
              ><br /><span class="f-border-b">y la</span>
              <a
                class=""
                href="/diseno-desarrollo-web"
                style="color: #000"
                data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"
                >tecnología</a
              >
            </h1>
          </div>
        </div>
      </div>
    </article>
  </section>
  <section class="py-5">
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <a href="">
              <img
                class=""
                style="height: 10vh"
                src="../../assets/img/root/InstagramMisc_animated.svg"
                alt=""
                data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"
              />
            </a>
            <h5 class="m-0" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">Follow us on</h5>
            <h1 class="my-2 f-border-a" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">Instagram</h1>
            <a
              href="@itpsmarketing"
              class=" f-border-a"
            >
              <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">@itpsmarketing</h6>
            </a>
          </div>
          <div class="col-lg-8"></div>
        </div>
      </div>
    </article>
  </section>
  <Form />
</template>

<script>
import "@/assets/css/home/style.css";
import Header from "@/components/Header";
import CardHover from "@/components/CardHover";
import LogosCustomers from "@/components/LogosCustomers";
import Form from "@/components/Form";
export default {
  components: {
    Header,
    CardHover,
    LogosCustomers,
    Form
  },
  data() {
    
    return {
      tituloHome: "Quiénes somos, qué hacemos",
      ttlColor: "ttl-gray",
      carpeta: 'home',
      nombreImg: 'banana',
      bgTriangleGray: 'bg-triangle-gray',
      parrafoHome:
        "En ITPS Marketing empoderamos el alcance de tu marca con estrategias eficaces e ideas innovadoras ¡En serio, funcionan! Nuestro equipo está formado por especialistas en Marketing, analistas, diseñadores gráficos, redactores, generadores de demanda, social media managers, diseñadores UX, community managers, paid media experts, project leaders, traductores, desarrolladores, y mucho más; todo un equipo adaptado las necesidades y expertise que requiera cada proyecto.",
    };
  },
  mounted() {
    new TypeIt("#ttl-home", {
      strings: this.tituloHome,
      speed: 50,
      waitUntilVisible: true,
    }).go();
  },
};
</script>

<style>
.bg-triangle-gray{
  background-image: url('../../assets/img/home/triangle_gray.png');
  background-size: 90vh;
  height: 100vh;
  background-position: bottom right;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media(max-width: 1000px){
    .vh-50{
      height: 70vh;
      text-align: center;
    }
}
.img-world{
  position: absolute;
  right: 0;
  height: 80vh;
  top: 0;
}
</style>