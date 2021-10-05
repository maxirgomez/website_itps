<template>
  <Header
    :titulo="tituloGeneracion"
    :classColor="ttlColor"
    :parrafo="parrafoGeneracion"
    :folder="carpeta"
    :name="nombreImg"
    :bgTriangle="bgTrianglewhite"
  />

  <section>
    <article>
      <div class="container py-5">
        <h1 class="text-center wow fadeInUp my-5">
          ¿Cómo lo hacemos?
        </h1>
        <div class="row justify-content-center">
          <CardHoverBg
            v-for="card in cards"
            :imgFront="card.imgFrontCard"
            :ttlCardFront="card.ttlCardFront"
            :imgBack="card.imgBackCard"
            :ttlCardBack="card.ttlBack"
          />
        </div>
      </div>
    </article>
  </section>

  <section>
    <article>
      <QuoteBgGray :quote="quoteGeneracion" />
    </article>
  </section>

  <section class="bg-gray-arrow">
    <article class="pt-5 p-relative">
      <div class="container py-15">
        <h1 class="text-center">Casos de éxito</h1>
        <div class="row py-5">
          <div class="col-lg-4">
            <img
              class="p-5"
              src="@/assets/img/logos/CognitusLogo.svg"
              alt=""
              style="height: 25vh"
            />
            <p class="my-3">
              Cognitus Consulting es una consultora multinacional IT especializada en soluciones SAP y productos para múltiples industrias. Cuenta con más de 14 oficinas alrededor del mundo y está presente en cinco continentes. Nuestro equipo de Generación de Demanda está en contacto diario con sus líderes en Estados Unidos, India y los Países Bajos, con los cuales aseguró cinco leads en los primeros 10 días de junio 2021, para soluciones de Aeroespacio y Defensa, entre otras.
            </p>
            <p class="my-3">
              Cada unidad dentro del equipo modifica sus secuencias de venta y canales de comunicación según la solución, industria y cliente final en cuestión para satisfacer las necesidades dentro de Cognitus antes de alcanzar el lead deseado.
            </p>
            <div class="d-flex mt-5">
              <img class="h-chevron" src="@/assets/img/content-mktg/Assets-03.svg" alt="" />
              <div class="d-flex">
                <h1 class="ttl-gray m-0 mx-1">05</h1>
                <div class="my-auto mx-2">
                  <h5 class="text-uppercase m-0">leads</h5>
                  <p class="m-0">en 10 días</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-4">
            <img
              class="p-5"
              src="@/assets/img/logos/EAILogo.svg"
              alt=""
              style="height: 20vh"
            />
            <p class="my-3">
              La metodología con el Enterprise Agility Institute (EAI) fue la misma aunque con un solo equipo de Generación de Demanda trabajando en paralelo al de Social Media Management. Pese a ser un equipo reducido, se concretaron 26 leads en apenas dos meses de campaña.
            </p>
            <div class="d-flex mt-5">
              <img class="h-chevron" src="@/assets/img/content-mktg/Assets-03.svg" alt="" />
              <div class="d-flex">
                <h1 class="ttl-gray mx-1">26</h1>
                <div class="my-auto mx-2">
                  <h5 class="text-uppercase m-0">leads</h5>
                  <p class="m-0">en 60 días</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img style="position: absolute; right: 0; bottom: 0; height: 80vh" src="@/assets/img/generacion/embudo.png" alt="">
    </article>
  </section>
  <Form />
</template>
<script>
import "@/assets/css/styles.css";
import Header from "@/components/Header";
import QuoteBgGray from "@/components/QuoteBgGray";
import CardHoverBg from "@/components/CardHoverBg";
import Form from "@/components/Form";
export default {
  components: {
    Header,
    QuoteBgGray,
    CardHoverBg,
    Form
  },
  data() {
    return {
      tituloGeneracion: "Demand Generation",
      parrafoGeneracion:
        "El consumer journey cambio. Eso es un hecho. La Generación de Demanda viene a dar respuesta a la mayoría de los problemas con los que se enfrentan hoy varias compañías que necesitan mejorar y hacer crecer sus ventas. La Generación de Demanda no es un proceso lineal, sino un enfoque holístico y estratégico que se aplica a todos los niveles de tu embudo de conversión. ",
      quoteGeneracion: "Tus objetivos comerciales y de Marketing, alineados.",
      ttlColor: "ttl-white",
      tituloSimple: "Influencers",
      carpeta: 'generacion',
      nombreImg: 'img_header',
      bgTrianglewhite: 'bg-triangle-white',
      cards: [
        {
          imgFrontCard: "../../assets/img/influence/icon-1.png",
          ttlCardFront: "Integrada",
          imgBackCard: "../../assets/img/influence/icon-1.png",
          ttlBack: "La generación de demanda combina varias estrategias y técnicas de marketing y sirve como base estratégica holística (la construcción de relaciones duraderas con los clientes).",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-2.png",
          ttlCardFront: "Cuantificable",
          imgBackCard: "../../assets/img/influence/icon-2.png",
          ttlBack: "Al tratarse de un concepto basado en datos, es posible hacer pruebas y optimizar la estrategia continuamente en base al feedback procedente de cada una de las etapas del funnel de ventas.",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-3.png",
          ttlCardFront: "Interés duradero",
          imgBackCard: "../../assets/img/influence/icon-3.png",
          ttlBack: "Orientadas a la creación de relaciones duraderas con clientes o empresas, todas las medidas que se implementan están dirigidas a la consecución de este objetivo y pretenden generar una atención e interés por los productos o servicios de una empresa.",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-4.png",
          ttlCardFront: "Ventas",
          imgBackCard: "../../assets/img/influence/icon-4.png",
          ttlBack: "La Generación de Demanda tiene un impacto directo sobre las ventas. Por esta razón, se integra con los procesos de venta desde el comienzo.",
        },
      ],
    };
  },
  mounted(){
    new TypeIt("#ttl-home", {
        strings: this.tituloGeneracion,
        speed: 50,
        waitUntilVisible: true,
    }).go();
  }
};
</script>

<style scoped>
.bg-tiny-hand {
  background-image: url("../../assets/img/diseno/tiny-hands.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
}

.py-15 {
  padding: 15vh 0;
}

.h-chevron{
  height: 6vh;
  margin: auto 0;
}
</style>