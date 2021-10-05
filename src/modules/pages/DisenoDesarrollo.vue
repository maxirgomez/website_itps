<template>
  <Header
    :titulo="tituloDiseno"
    :classColor="ttlColor"
    :parrafo="parrafoDiseno"
    :folder="carpeta"
    :name="nombreImg"
    :bgTriangle="bgTrianglewhite"
  />
  <section>
    <article>
      <div class="container">
        <h3 class="text-center wow fadeInUp my-5">
          Tenemos experiencia en diseño y desarrollo de websites y landing pages
          responsive, mobile-first para:
        </h3>
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
    <article>
      <QuoteBgGray :quote="quoteDiseno" />
    </article>
  </section>
  <section>
    <article class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 p-relative">
            <img style="position: absolute;bottom: 0;left: 0; height: 70vh;" src="@/assets/img/diseno/big-chevron.png" alt="">
            <img style="position: sticky;bottom: 0; left: 0; height: 70vh;" src="@/assets/img/diseno/computer.png" alt="">
            <img style="position: absolute;bottom: 0;right: 0; height: 20vh;" src="@/assets/img/diseno/tiny-chevron.png" alt="">
          </div>
          <div class="col-lg-6 my-auto">
            <h2 class="ttl-gray">Accesibilidad Web</h2>
            <p class="ttl-gray mt-4">
              Hoy, la mayoría de los sitios web presentan <strong>barreras de accesibilidad</strong> que afectan o imposibilitan su uso para muchas personas con dificultades visuales, 
              motrices, auditivas, cognitivas, neurológicas e intelectuales, entre otras. El momento para asegurarse que <strong>todos llegarán a tu sitio web,</strong> incluyendo personas de edad avanzada 
              o con algún tipo de discapacidad, es ahora.
            </p>
          </div>
        </div>
      </div>  
    </article>
    <article class="bg-gradient-static">
      <div class="bg-tiny-hand">
        <div class="container py-5">
          <h3 class="f-light ttl-white">Cuando unimos fuerzas con <span> <img src="@/assets/img/diseno/itps-tech.png" alt=""> </span>, pasar esa barrera es dar un salto clave a tan solo un click de distancia.</h3>
        </div>
      </div>
    </article>
  </section>
  <section class="bg-gray-arrow">
    <article class="pt-5">
      <div class="container">
        <h1 class="text-center">Casos de éxito</h1>
        <div class="row my-5 justify-content-center">
          <div class="col-lg-3 my-auto">
            <img class="img-fluid" style="height: 10vh" src="@/assets/img/logos/SerenitoLogo.svg" alt="">
          </div>
          <div class="col-lg-3 my-auto">
            <img class="img-fluid" style="height: 10vh" src="@/assets/img/logos/SerenitoLogo.svg" alt="">
          </div>
          <div class="col-lg-3 my-auto">
            <img class="img-fluid" style="height: 7vh" src="@/assets/img/logos/Yogurisimo.svg" alt="">
          </div>
          <div class="col-lg-3 my-auto">
            <img class="img-fluid" style="height: 7vh" src="@/assets/img/logos/SerLogo.svg" alt="">
          </div>
        </div>
        <p class="text-left">
          Actimel, Yogurísimo y Ser son tres reconocidas marcas de yogures bebibles, firmes y con cereales lanzados al mercado entre La Serenísima y Danone hace ya más de dos décadas.
        </p>
        <p class="text-left">
          Para el rediseño y desarrollo de cada uno de sus sitios, tomamos la identidad visual de cada marca para volver a adaptarla según las necesidades del cliente, llevando los diseños a bumpers, banners, slides y demás formatos digitales. A lo largo de tres meses de campaña ajustamos las tres landings siguiendo el feedback del cliente, incluyendo el diseño animado y 3D de un envase de Actimel, cuya programación avanzada permitió que se mueva a la par del scrolling del usuario.
        </p>
        <p class="text-left">
          Serenito es una línea histórica de postres apuntados a niños y pre-adolescentes, fundada por las mismas empresas. Además del rediseño y programación integral de su web, llevando los nuevos personajes y productos de la nueva campaña al sitio, se brindaron servicios de Social Media Management por tres meses donde cada post llevó la voz de cada personaje.
        </p>
        <img class="img-fluid" src="@/assets/img/diseno/prints-danone.png" alt="">
        
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
      tituloDiseno: "Diseño y Desarrollo Web",
      parrafoDiseno:
        "Tu sitio web es la carta de presentación de tu empresa y la experiencia de usuario en ella debe ser perfecta. Nuestro equipo de desarrolladores y diseñadores puede encargarse no solo de su grado de profesionalidad y estética, sino de que también refleje un contenido original, una estructura clara, múltiples call-to-action una navegación fluida, funciones precisas y tenga un posicionamiento efectivo para que la comunicación e imagen de tu empresa sea óptima desde el principio.",
      quoteDiseno:
        "Una experiencia online ideal optimiza visitas, posicionamiento y conversión.",
      ttlColor: "ttl-gray",
      tituloSimple: "Influencers",
      parrafoSimple:
        "¿Qué tienen de especial? que ya tienen una comunidad creada en torno al interés y credibilidad de una persona que, con sus opiniones, puede influenciar las decisiones de su audiencia. Una recomendación es mucho más segura cuando viene de un amigo o alguien en quien confiamos ¿No es así? El influencer adecuado puede ser una especie de embajador para fidelizar el sentido de pertenencia del cliente con tu marca. En tiempos donde cada vez hay una mayor cantidad de contenidos promocionales, es más difícil para las marcas destacarse entre tal saturación de información. Es por eso que muchos de nuestros aliados encuentran su solución recurriendo a nuestros servicios de Influence Marketing para lograr incidir en la conducta de sus consumidores.",
        carpeta: 'diseno',
        nombreImg: 'computer',
        bgTrianglewhite: 'bg-triangle-white',
      cards: [
        {
          imgFrontCard: "../../assets/img/influence/icon-1.png",
          ttlCardFront: "Portal websites",
          imgBackCard: "../../assets/img/influence/icon-1.png",
          ttlBack:
            "Delinear la estrategia ideal para trabajar con influencers/KOLs",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-2.png",
          ttlCardFront: "Brochure y Catalog websites",
          imgBackCard: "../../assets/img/influence/icon-2.png",
          ttlBack: "Seleccionar los influencers/KOLs más adecuados",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-3.png",
          ttlCardFront: "Educational websites",
          imgBackCard: "../../assets/img/influence/icon-3.png",
          ttlBack:
            "Definir una estrategia de contenidos en el corto, mediano y largo plazo.",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-4.png",
          ttlCardFront: "Business websites",
          imgBackCard: "../../assets/img/influence/icon-4.png",
          ttlBack:
            "Inducir y capacitar al influencer/KOL para que sea un real embajador de tu marca",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-5.png",
          ttlCardFront: "Brand websites",
          imgBackCard: "../../assets/img/influence/icon-5.png",
          ttlBack:
            "Dar seguimiento en pos de crear una comunidad fiel que, con el tiempo, se retroalimenta y crece sola.",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-5.png",
          ttlCardFront: "eCommerces websites",
          imgBackCard: "../../assets/img/influence/icon-5.png",
          ttlBack:
            "Dar seguimiento en pos de crear una comunidad fiel que, con el tiempo, se retroalimenta y crece sola.",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-5.png",
          ttlCardFront: "Portfolio websites",
          imgBackCard: "../../assets/img/influence/icon-5.png",
          ttlBack:
            "Dar seguimiento en pos de crear una comunidad fiel que, con el tiempo, se retroalimenta y crece sola.",
        },
      ],
    };
  },
  mounted(){
    new TypeIt("#ttl-home", {
        strings: this.tituloDiseno,
        speed: 50,
        waitUntilVisible: true,
    }).go();
  }
};
</script>

<style>
.bg-tiny-hand{
  background-image: url('../../assets/img/diseno/tiny-hands.png');
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
}

</style>