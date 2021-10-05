<template>
  <Header
    :titulo="tituloBranding"
    :classColor="ttlColor"
    :parrafo="parrafoDiseno"
    :folder="carpeta"
    :name="nombreImg"
    :bgTriangle="bgTrianglewhite"
  />
  <section>
    <article>
      <QuoteBgGray :quote="quoteBrandingFirst" />
    </article>
  </section>
  <section>
    <article>
      <div class="container pb-5">
        <h1 class="text-center wow fadeInUp my-5">
          Comunicación
        </h1>
        <div class="row justify-content-center">
          <CardHoverBg
            v-for="card in cardsOne"
            :imgFront="card.imgFrontCard"
            :ttlCardFront="card.ttlCardFront"
            :imgBack="card.imgBackCard"
            :ttlCardBack="card.ttlBack"
          />
        </div>
      </div>
    </article>
    <article>
      <QuoteBgGray :quote="quoteBrandingSecond" />
    </article>
  </section>
  <section>
    <article>
      <div class="container pb-5">
        <h1 class="text-center wow fadeInUp my-5">
          Branding
        </h1>
        <div class="row justify-content-center">
          <CardHoverBg
            v-for="card in cardsTwo"
            :imgFront="card.imgFrontCard"
            :ttlCardFront="card.ttlCardFront"
            :imgBack="card.imgBackCard"
            :ttlCardBack="card.ttlBack"
          />
        </div>
      </div>
    </article>
  </section>
  
  <section class="bg-gray-arrow-branding">
    <article class="pt-5">
      <div class="container py-15">
        <h1 class="text-center">Casos de éxito</h1>
        <div class="row py-5 justify-content-center">
          <div class="col-lg-4">
            <img class="img-fluid mb-5" src="@/assets/img/branding/AssetsBranding-17.svg" alt="">
            <p class="text-left my-3">
              Flex es un cowarehouse con distintas sucursales en Argentina que reúne almacenes, oficinas, pick up points, salas de presentación y más, todo en un solo lugar. Sin embargo, cuando se acercó a ITPS Marketing, su propuesta todavía estaba por darse a conocer.
            </p>
            <p class="text-left">
              Tras varias sesiones de brainstorming e incorporando el feedback del cliente, comenzamos con el diseño de packaging y distintas visuales para la página web responsiva a desarrollar. Una vez que las piezas estuvieron aprobadas y comunicaban la identidad propia del cliente, la cereza del postre para completar la imagen final de Flex fue la creación de un nuevo logotipo.
            </p>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-7 p-relative">
            <img  style="position: sticky; top: 10vh; height: 60vh" src="@/assets/img/branding/computers.png" alt="">
          </div>
        </div>
        
      </div>
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
      tituloBranding: "Branding & Comunicación",
      parrafoDiseno:
        "Te acompañamos en la construcción de tu marca, establecemos el rumbo a seguir para fidelizar a tu público objetivo y la posicionamos como Top of Mind en todos los canales. Una marca impulsada por un propósito es una marca exitosa cuyo propósito debe constituir el centro de atención para que pueda tener éxito. ¡Potenciá tu marca con una identidad propia y estrategias innovadoras!",
      quoteBrandingFirst:
        "Somos el puente necesario para que tu marca, además de un propósito y posicionamiento, tenga una conexión real con el público objetivo.",
      quoteBrandingSecond:
        "Toda marca tiene una historia. Toda historia tiene un público. Nos gustaría contar la tuya.",
      ttlColor: "ttl-white",
      tituloSimple: "Influencers",
      parrafoSimple:
        "¿Qué tienen de especial? que ya tienen una comunidad creada en torno al interés y credibilidad de una persona que, con sus opiniones, puede influenciar las decisiones de su audiencia. Una recomendación es mucho más segura cuando viene de un amigo o alguien en quien confiamos ¿No es así? El influencer adecuado puede ser una especie de embajador para fidelizar el sentido de pertenencia del cliente con tu marca. En tiempos donde cada vez hay una mayor cantidad de contenidos promocionales, es más difícil para las marcas destacarse entre tal saturación de información. Es por eso que muchos de nuestros aliados encuentran su solución recurriendo a nuestros servicios de Influence Marketing para lograr incidir en la conducta de sus consumidores.",
      carpeta: 'branding',
      nombreImg: 'AssetsBranding-02UNIR',
      bgTrianglewhite: 'bg-triangle-white',
      cardsOne: [
        {
          imgFrontCard: "../../assets/img/influence/icon-1.png",
          ttlCardFront: "Social Media Management",
          imgBackCard: "../../assets/img/influence/icon-1.png",
          ttlBack:
            "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-2.png",
          ttlCardFront: "Redacción Creativa",
          imgBackCard: "../../assets/img/influence/icon-2.png",
          ttlBack: "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-3.png",
          ttlCardFront: "C.R.M.",
          imgBackCard: "../../assets/img/influence/icon-3.png",
          ttlBack:
            "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-4.png",
          ttlCardFront: "Diseó gráfico",
          imgBackCard: "../../assets/img/influence/icon-4.png",
          ttlBack:
            "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-5.png",
          ttlCardFront: "Facebook Ads e Instagram Ads",
          imgBackCard: "../../assets/img/influence/icon-5.png",
          ttlBack:
            "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-5.png",
          ttlCardFront: "Producción Audiovisual",
          imgBackCard: "../../assets/img/influence/icon-5.png",
          ttlBack:
            "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-5.png",
          ttlCardFront: "Desarrollo Web y Apps",
          imgBackCard: "../../assets/img/influence/icon-5.png",
          ttlBack:
            "Contactanos",
        },
      ],
      cardsTwo: [
        {
          imgFrontCard: "../../assets/img/influence/icon-1.png",
          ttlCardFront: "Customer Service",
          imgBackCard: "../../assets/img/influence/icon-1.png",
          ttlBack:
            "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-2.png",
          ttlCardFront: "Brand Awareness",
          imgBackCard: "../../assets/img/influence/icon-2.png",
          ttlBack: "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-3.png",
          ttlCardFront: "Retención/Loyalty",
          imgBackCard: "../../assets/img/influence/icon-3.png",
          ttlBack:
            "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-4.png",
          ttlCardFront: "Lead Conversion & Nurturing",
          imgBackCard: "../../assets/img/influence/icon-4.png",
          ttlBack:
            "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-5.png",
          ttlCardFront: "Upsell",
          imgBackCard: "../../assets/img/influence/icon-5.png",
          ttlBack:
            "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-5.png",
          ttlCardFront: "Customer Conversion",
          imgBackCard: "../../assets/img/influence/icon-5.png",
          ttlBack:
            "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-5.png",
          ttlCardFront: "Passionate Subscribers",
          imgBackCard: "../../assets/img/influence/icon-5.png",
          ttlBack:
            "Contactanos",
        },
      ],
    };
  },
  mounted () {
      new TypeIt("#ttl-home", {
        strings: this.tituloBranding,
        speed: 50,
        waitUntilVisible: true,
      }).go();
  }
};
</script>

<style scoped>
.bg-tiny-hand{
  background-image: url('../../assets/img/diseno/tiny-hands.png');
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
}

.bg-gray-arrow-branding{
    height: 160vh;
    background-color: #DBDADB;
    background-image: url('../../assets/img/branding/bg_success.png');
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: cover;
}
.py-15{
  padding: 15vh 0;
}

</style>