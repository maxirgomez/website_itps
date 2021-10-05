<template>
  <Header
    :titulo="tituloInfluence"
    :classColor="ttlColor"
    :parrafo="parrafoInfluence"
    :folder="carpeta"
    :name="nombreImg"
    :bgTriangle="bgTrianglewhite"
  />
  <section>
    <SimpleText :titulo="tituloSimple" :parrafo="parrafoSimple" />
    <article class="bg-gradient-anim">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 ttl-white wow fadeInUp text-start py-5">
            <h1 class="text-uppercase m-0 ttl-white">KOL</h1>
            <h6 class="f-light m-0">(Key Opinion Leaders)</h6>
            <p class="ttl-white mt-3">
              Los KOL o líderes de opinión son expertos en la materia de tu
              industria con experiencia en un área específica seleccionada. Los
              KOL no solo aportan su experiencia y conocimientos, sino que
              también sus redes incluyen personas influyentes, expertos,
              organizaciones y otros líderes de opinión digital. Por lo tanto,
              comprometerse con los KOL y los influencers correctos permite a
              las empresas estar un paso adelante en la conquista de una
              comunidad hacia sus productos o servicios.
            </p>
          </div>
          <div class="col-lg-2"></div>
          <div class="col-lg-4 p-relative">
            <img
              style="
                position: absolute;
                height: 35vh;
                bottom: 12vh;
                right: 200px;
              "
              class="hide-mobile"
              src="../../assets/img/influence/girl-1.png"
              alt=""
            />
            <img
              class="hide-mobile"
              style="position: absolute; height: 35vh; bottom: 2vh; right: 0"
              src="../../assets/img/influence/girl-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </article>
    <article>
      <QuoteBgGray :quote="quoteInfluence" />
      <h3 class="text-center wow fadeInUp my-5">En ITPS podemos ayudarte a:</h3>
      <div class="container">
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
  <Form  class="mt-5" />
</template>
<script>
import "@/assets/css/cx/style.css";
import "@/assets/css/styles.css";
import Header from "@/components/Header";
import QuoteBgGray from "@/components/QuoteBgGray";
import SimpleText from "@/components/SimpleText";
import CardHoverBg from "@/components/CardHoverBg";
import Form from "@/components/Form";
export default {
  components: {
    Header,
    QuoteBgGray,
    SimpleText,
    CardHoverBg,
    Form
  },
  data() {
    return {
      tituloInfluence: "Influence Marketing",
      parrafoInfluence:
        "En ITPS Marketing creamos o redefinimos la expresión global de tu marca. Desde la identidad corporativa hasta su tono, estilo verbal y visual, buscando los referentes más competitivos para amplificar el mensaje o campaña.",
      quoteInfluence: "¿A quién querés influenciar?",
      ttlColor: "ttl-white",
      tituloSimple: "Influencers",
      parrafoSimple:
        "¿Qué tienen de especial? que ya tienen una comunidad creada en torno al interés y credibilidad de una persona que, con sus opiniones, puede influenciar las decisiones de su audiencia. Una recomendación es mucho más segura cuando viene de un amigo o alguien en quien confiamos ¿No es así? El influencer adecuado puede ser una especie de embajador para fidelizar el sentido de pertenencia del cliente con tu marca. En tiempos donde cada vez hay una mayor cantidad de contenidos promocionales, es más difícil para las marcas destacarse entre tal saturación de información. Es por eso que muchos de nuestros aliados encuentran su solución recurriendo a nuestros servicios de Influence Marketing para lograr incidir en la conducta de sus consumidores.",
      carpeta: 'influence',
      nombreImg: 'img-hero-croco',
      bgTrianglewhite: 'bg-triangle-white',
      cards: [
        {
          imgFrontCard: "../../assets/img/influence/icon-1.png",
          ttlCardFront: "Estrategia",
          imgBackCard: "../../assets/img/influence/icon-1.png",
          ttlBack:
            "Delinear la estrategia ideal para trabajar con influencers/KOLs",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-2.png",
          ttlCardFront: "Influencers/KOLs",
          imgBackCard: "../../assets/img/influence/icon-2.png",
          ttlBack: "Seleccionar los influencers/KOLs más adecuados",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-3.png",
          ttlCardFront: "Contenidos",
          imgBackCard: "../../assets/img/influence/icon-3.png",
          ttlBack:
            "Definir una estrategia de contenidos en el corto, mediano y largo plazo.",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-4.png",
          ttlCardFront: "Capacitación",
          imgBackCard: "../../assets/img/influence/icon-4.png",
          ttlBack:
            "Inducir y capacitar al influencer/KOL para que sea un real embajador de tu marca",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-5.png",
          ttlCardFront: "Seguimiento",
          imgBackCard: "../../assets/img/influence/icon-5.png",
          ttlBack:
            "Dar seguimiento en pos de crear una comunidad fiel que, con el tiempo, se retroalimenta y crece sola.",
        },
      ],
    };
  },
  mounted(){
    new TypeIt("#ttl-home", {
        strings: this.tituloInfluence,
        speed: 50,
        waitUntilVisible: true,
    }).go();
  }
};
</script>

<style>


.p-dino-header {
  height: 80vh;
  position: relative;
  top: 10vh;
}
.icon-hero-1 {
  position: absolute;
  left: 18vw;
  top: 20vh;
  height: 20vh;
  animation: float 3s ease-in-out infinite;
}
.icon-hero-2 {
  position: absolute;
  left: 3vw;
  top: 30vh;
  height: 15vh;
  animation: float 4s ease-in-out infinite;
}
.icon-hero-3 {
  position: absolute;
  height: 20vh;
  bottom: 0;
  left: 13vw;
  animation: float 2.5s ease-in-out infinite;
}
@media (max-width: 1000px) {
  .hide-mobile{
    display: none;
  }
}
</style>