<template>
  <Header
    :titulo="tituloPaid"
    :classColor="ttlColor"
    :parrafo="parrafoPaid"
    :folder="carpeta"
    :name="nombreImg"
    :bgTriangle="bgTrianglewhite"
  />
  <section>
    <article>
      <div class="container">
        <SimpleText :parrafo="parrafoPaid" />
        <h1 class="text-center my-5">Nos especializamos en</h1>
        <div class="row text-center my-5">
          <div class="col-lg-2">
            <img class="img-fluid" src="@/assets/img/logos/ig.png" alt="" />
          </div>
          <div class="col-lg-2 my-auto">
            <img class="img-fluid" src="@/assets/img/logos/google.png" alt="" />
          </div>
          <div class="col-lg-2">
            <img class="img-fluid" src="@/assets/img/logos/tw.png" alt="" />
          </div>
          <div class="col-lg-2 my-auto">
            <img class="img-fluid" src="@/assets/img/logos/yt.png" alt="" />
          </div>
          <div class="col-lg-2">
            <img class="img-fluid" src="@/assets/img/logos/fb.png" alt="" />
          </div>
          <div class="col-lg-2 my-auto">
            <img class="img-fluid" src="@/assets/img/logos/ln.png" alt="" />
          </div>
        </div>
      </div>
    </article>
  </section>
  <section>
    <article>
      <QuoteBgGray :quote="quotePaid" />
    </article>
  </section>
  <section>
    <article>
      <div class="container">
        <SimpleText :titulo="ttlRemarketing" :parrafo="parrafoRemarketing" />
      </div>
    </article>
    <article>
      <div class="container">
        <h1 class="text-center">Somos rápidos, pero vamos paso por paso...</h1>
        <div class="row justify-content-center mt-5">
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
  <Form class="mt-5" />
</template>
<script>
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
      tituloPaid: "Paid Media",
      parrafoPaid:
        "Puede que tengas contenidos perfectamente diseñados en tu web o redes sociales, pero ¿quién los está viendo? Hacer que lleguen a tu público objetivo no es tan fácil, sobre todo si no tenés una comunidad online definida o estás dando tus primeros pasos en las redes. Una campaña de Paid Media es el empujón para llevar tu marca a los ojos de un público segmentado específicamente bajo tus criterios.",
      quotePaid: "Comencemos una campaña.",
      ttlColor: "ttl-white",
      parrafoPaid:
        "Contrario a un post orgánico, una publicación con un mínimo de inversión puede aumentar tu número de seguidores, subir las interacciones o ayudarte a promocionar un evento. Al mismo tiempo, una campaña publicitaria es ideal para llevar tráfico a tu web, optimizar campañas de remarketing y posicionarte en motores de búsqueda como Google. Es tiempo de ponerte en el mapa de los demás.",
      ttlRemarketing: "¿Sabés de qué se trata el remarketing?",
      parrafoRemarketing: "Consiste en volver a mostrar una publicidad de tu marca a un público segmentado que ya ingresó a tu web previamente. Mediante una campaña de display via Google Ads podemos hacer que ese usuario vuelva a verte mientras navega en otro sitio o red social. Contanos cuál es tu público ideal y nosotros nos encargamos de segmentarlo por edad, sexo, ubicación geográfica, intereses y demás filtros a disposición de la campaña. Durante ella y al final de la misma, te compartiremos los resultados obtenidos para que puedas conocer el comportamiento de tu audiencia y los objetivos alcanzados.",
      carpeta: 'paid-media',
      nombreImg: 'img_header',
      bgTrianglewhite: 'bg-triangle-white',
      cards: [
        {
          imgFrontCard: "../../assets/img/influence/icon-1.png",
          ttlCardFront: "Medición de Datos",
          imgBackCard: "../../assets/img/influence/icon-1.png",
          ttlBack: "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-2.png",
          ttlCardFront: "Análisis de Tráfico",
          imgBackCard: "../../assets/img/influence/icon-2.png",
          ttlBack: "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-3.png",
          ttlCardFront: "Reporte de Paid Media",
          imgBackCard: "../../assets/img/influence/icon-3.png",
          ttlBack: "Contactanos",
        },
        
      ],
    };
  },
  mounted(){
    new TypeIt("#ttl-home", {
        strings: this.tituloPaid,
        speed: 50,
        waitUntilVisible: true,
    }).go();
  }
};
</script>

<style scoped>
.py-15 {
  padding: 15vh 0;
}
</style>