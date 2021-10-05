<template>
  <Header
    :titulo="tituloSocial"
    :classColor="ttlColor"
    :parrafo="parrafoSocial"
    :folder="carpeta"
    :name="nombreImg"
    :bgTriangle="bgTrianglewhite"
  />
  <section>
    <article>
      <SimpleText :titulo="ttlSimple" :parrafo="pSimple" />
    </article>
    <article>
      <QuoteBgGray :quote="quoteSocial" />
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
  </section>
  
  <section class="bg-gray-arrow">
    <article class="pt-5">
      <div class="container py-15">
        <h1 class="text-center">Casos de éxito</h1>
        <div class="row py-5 justify-content-center">
          <div class="col-lg-4">
            <img style="height: 20vh" src="@/assets/img/logos/LogoHuawei.svg" alt="">
            <p class="text-left mt-5 my-3">
              Ubicada en el puesto número 5 del mercado mundial por su market share de Internet As A Service (IaaS) durante 2020, Huawei Cloud es la marca que engloba todos los productos, servicios y soportes relacionados a la nube y su ecosistema.
            </p>
            <p class="text-left">
              Durante más de ocho meses, la campaña combinó servicios de Social Media Management y Paid Media, segmentando las estrategias de engagement, likes y tráfico para toda Latinoamérica. En ITPS Marketing nos encargamos de preparar la agenda semanal de contenidos a diseñar y publicar, sumando la aprobación del cliente en China y logrando la excelencia operativa sin que el cambio drástico de time zone fuera un obstáculo.
            </p>
            <p class="text-left">
              Además de los contenidos para redes sociales, también se tradujeron documentos on-demand, se animaron videos y presentaciones, y se diseñaron piezas gráficas de cartelería para aeropuertos internacionales.
            </p>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-7 p-relative">
            <img  style="position: sticky; top: 10vh; height: 90vh" src="@/assets/img/social/cards.png" alt="">
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
import SimpleText from "@/components/SimpleText";
import Form from "@/components/Form";
export default {
  components: {
    Header,
    QuoteBgGray,
    CardHoverBg,
    SimpleText,
    Form
  },
  data() {
    return {
      tituloSocial: "Social Media Management",
      parrafoSocial:
        "¿Por qué y para qué estar en las redes sociales? Bueno, cuando se trata de una marca o servicio, es importante responder esta pregunta. Las redes sociales, al igual que los caminos para posicionar una marca con ellas, se diversifican cada vez más.",
      quoteSocial:
        "¿Cómo estás usando tus redes?",
      ttlSimple: '',
      pSimple: "En ITPS Marketing somos partidarios de que la mejor información es aquella que puede medirse. Y en el marco de las redes sociales, las mediciones son  un must-have. Por eso, todos los resultados que arrojan nuestras campañas de Social Media Management son medibles y traducibles para nuestros aliados. Un aspecto clave para seguir avanzando, comprobar la efectividad de cada estrategia o cada movimiento y corregir lo que no funciona.",
      ttlColor: "ttl-white",
      carpeta: 'social',
      nombreImg: 'img_header',
      bgTrianglewhite: 'bg-triangle-white',
      cardsOne: [
        {
          imgFrontCard: "../../assets/img/influence/icon-1.png",
          ttlCardFront: "Estrategia en Redes Sociales",
          imgBackCard: "../../assets/img/influence/icon-1.png",
          ttlBack:
            "Diseñamos el plan de redes según tus necesidades, con objetivos claros, plazos a cumplir y acciones medibles.",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-2.png",
          ttlCardFront: "Social Listening",
          imgBackCard: "../../assets/img/influence/icon-2.png",
          ttlBack: "Escucha a tu audiencia y a tus competidores.",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-3.png",
          ttlCardFront: "Content Marketing",
          imgBackCard: "../../assets/img/influence/icon-3.png",
          ttlBack:
            "El contenido específico, para el segmento ideal, en el momento indicado.",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-4.png",
          ttlCardFront: "Community Management",
          imgBackCard: "../../assets/img/influence/icon-4.png",
          ttlBack:
            "Ejecutamos las estrategias, garantizamos que el plan se lleve a cabo para que tus objetivos se cumplan, pero sobre todo, interactuamos con tu público objetivo para crear comunidad.",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-5.png",
          ttlCardFront: "Paid Media",
          imgBackCard: "../../assets/img/influence/icon-5.png",
          ttlBack:
            "Como invertir en medios digitales y crear campañas exitosas (data-driven) para lograr tus objetivos de: alcance, engagement y/o venta.",
        },
      ],
    };
  },
  mounted(){
    new TypeIt("#ttl-home", {
        strings: this.tituloSocial,
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

.py-15{
  padding: 15vh 0;
}

</style>