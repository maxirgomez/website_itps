<template>
  <Header
    :titulo="tituloContent"
    :classColor="ttlColor"
    :parrafo="parrafoContent"
    :folder="carpeta"
    :name="nombreImg"
    :bgTriangle="bgTrianglewhite"
  />

  <section>
    <article>
      <div class="container py-5">
        <h1 class="text-center wow fadeInUp my-5">
          Atraemos a tu público con...
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
      <QuoteBgGray :quote="quoteContent" />
    </article>
  </section>

  <section class="vh-100">
    <article>
      <div class="container pt-5">
        <div class="row">
          <div class="col-lg-4 p-relative">
            <img
              class="my-4 wow fadeInUp img-fluid"
              src="@/assets/img/content-mktg/Assets-13.png"
              alt=""
            />
            <img
              class="avion-1 my-4 wow fadeInUp"
              src="@/assets/img/content-mktg/Assets-15.svg"
              alt=""
            />
            <img
              class="avion-2 my-4 wow fadeInUp"
              src="@/assets/img/content-mktg/Assets-14.svg"
              alt=""
            />
            <img
              class="avion-3 my-4 wow fadeInUp"
              src="@/assets/img/content-mktg/Assets-16.svg"
              alt=""
            />
          </div>
          <div class="col-lg-8 my-auto">
            <h3>
              Algunos beneficios<br />de nuestras soluciones<br />de Content
              Marketing
            </h3>
            <div class="row mt-5">
              <div class="col-lg-6">
                <div class="d-flex align-start magic-hover magic-hover__square">
                  <img
                    class="icon-plus-content wow fadeInUp"
                    src="@/assets/img/content-mktg/Assets-04.svg"
                    alt=""
                  />
                  <p>
                    <strong>Atraen tu clientes potenciales</strong> de otros
                    canales y mercados.
                  </p>
                </div>
                <div class="d-flex align-start magic-hover magic-hover__square">
                  <img
                    class="icon-plus-content wow fadeInUp"
                    src="@/assets/img/content-mktg/Assets-04.svg"
                    alt=""
                  />
                  <p>
                    Ayudan a conocer los
                    <strong>intereses de tu público</strong>.
                  </p>
                </div>
                <div class="d-flex align-start magic-hover magic-hover__square">
                  <img
                    class="icon-plus-content wow fadeInUp"
                    src="@/assets/img/content-mktg/Assets-04.svg"
                    alt=""
                  />
                  <p>
                    <strong
                      >Aumentan la confianza, empatía y credibilidad</strong
                    >
                    con ellos.
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="d-flex align-start magic-hover magic-hover__square">
                  <img
                    class="icon-plus-content wow fadeInUp"
                    src="@/assets/img/content-mktg/Assets-04.svg"
                    alt=""
                  />
                  <p>
                    <strong>Atraen tus clientes potenciales</strong> de otros
                    canales y mercados.
                  </p>
                </div>
                <div class="d-flex align-start magic-hover magic-hover__square">
                  <img
                    class="icon-plus-content wow fadeInUp"
                    src="@/assets/img/content-mktg/Assets-04.svg"
                    alt=""
                  />
                  <p>
                    Genera <strong>grandes resultados</strong> con
                    <strong>pequeños presupuestos.</strong>
                  </p>
                </div>
                <div class="d-flex align-start magic-hover magic-hover__square">
                  <img
                    class="icon-plus-content wow fadeInUp"
                    src="@/assets/img/content-mktg/Assets-04.svg"
                    alt=""
                  />
                  <p>
                    <strong>Incrementan</strong> tu tasa de
                    <strong>conversión.</strong>
                  </p>
                </div>
                <div class="d-flex align-start magic-hover magic-hover__square">
                  <img
                    class="icon-plus-content wow fadeInUp"
                    src="@/assets/img/content-mktg/Assets-04.svg"
                    alt=""
                  />
                  <p>
                    Fomentan las <strong>ventas</strong> de manera más
                    <strong>orgánica</strong> que la pauta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>

  <section class="bg-gray-arrow">
    <article class="pt-5">
      <div class="container py-15">
        <h1 class="text-center">Casos de éxito</h1>
        <div class="row py-5 justify-content-center">
          <div class="text-left col-lg-4">
            <img
              class="p-5"
              src="@/assets/img/content-mktg/Assets-17.svg"
              alt=""
            />
            <p class="my-3">
              Vital, de Nutricia Bagó, es una de las marcas líderes de leche en
              polvo en Argentina y sus productos siempre están presentes en
              supermercados, farmacias y tiendas digitales a lo largo de todo el
              país.
            </p>
            <p class="my-3">
              El acercamiento con ITPS Marketing ocurrió antes del lanzamiento
              de campaña de su nueva leche, Vital 4 Fibra Plus, la cual
              necesitaba un concepto, una identidad visual, una razón detrás y
              una manera efectiva de comunicarse con su público objetivo.
            </p>
            <p class="my-3">
              Luego de varias sesiones de brainstorming por donde pasaron
              figuras como la Tortuga Zen o la Agente del Tránsito, nuestro
              equipo asignado terminó desarrollando el concepto de campaña con
              un armado de key visuals integral para redes sociales con assets
              como videos, bumpers, carrouselles, banners e imágenes.
            </p>
            <div class="d-flex mt-5">
              <img class="h-chevron" src="@/assets/img/content-mktg/Assets-03.svg" alt="" />
              <div>
                <h1 class="ttl-gray m-0">11.3<small>M</small></h1>
                <p class="m-0">Alcance Total</p>
              </div>
            </div>
            <div class="d-flex my-4">
              <img class="h-chevron" src="@/assets/img/content-mktg/Assets-03.svg" alt="" />
              <div>
                <h1 class="ttl-gray m-0">75<small>%</small></h1>
                <p class="m-0">Cobertura</p>
              </div>
            </div>
            <div class="d-flex my-3">
              <img class="h-chevron" src="@/assets/img/content-mktg/Assets-03.svg" alt="" />
              <div>
                <h1 class="ttl-gray m-0">VA +80<small>%</small></h1>
                <p class="m-0">en banners</p>
              </div>
            </div>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-7 p-relative">
            <img class="img-fluid" src="@/assets/img/content-mktg/Assets-18.png" alt="" />
              <div class="my-3">
                <img class="h-chevron" src="@/assets/img/content-mktg/Assets-03.svg" alt="" />
                <div>
                  <h1 class="ttl-gray m-0"><small>$</small>0,02</h1>
                  <p class="m-0">de CUU optimizado en piezas pautadas</p>
                </div>
              </div>
              <div class="my-3">
                <img class="h-chevron" src="@/assets/img/content-mktg/Assets-03.svg" alt="" />
                <div>
                  <h1 class="ttl-gray m-0">
                    <small>VTR</small>+90<small>%</small>
                  </h1>
                  <p class="m-0">en video bumpers de Youtube</p>
                </div>
              </div>
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
      tituloContent: "Content Marketing",
      parrafoContent:
        "A través del Marketing de Contenidos nos enfocamos en la dirección que quiera tomar tu empresa, realizamos estrategias convincentes, específicas, medibles y efectivas que aporten valor al usuario en todos los canales a trabajar para así mejorar el posicionamiento en buscadores, viralizar la notoriedad y credibilidad de la marca dentro del sector e incrementar tus ventas y conversiones.",
      quoteContent: "¿Qué te gustaría mostrar?",
      quoteBrandingSecond:
        "Toda marca tiene una historia. Toda historia tiene un público. Nos gustaría contar la tuya.",
      ttlColor: "ttl-white",
      tituloSimple: "Influencers",
      parrafoSimple:
        "¿Qué tienen de especial? que ya tienen una comunidad creada en torno al interés y credibilidad de una persona que, con sus opiniones, puede influenciar las decisiones de su audiencia. Una recomendación es mucho más segura cuando viene de un amigo o alguien en quien confiamos ¿No es así? El influencer adecuado puede ser una especie de embajador para fidelizar el sentido de pertenencia del cliente con tu marca. En tiempos donde cada vez hay una mayor cantidad de contenidos promocionales, es más difícil para las marcas destacarse entre tal saturación de información. Es por eso que muchos de nuestros aliados encuentran su solución recurriendo a nuestros servicios de Influence Marketing para lograr incidir en la conducta de sus consumidores.",
      carpeta: 'content-mktg',
      nombreImg: 'Assets-02',
      bgTrianglewhite: 'bg-triangle-white',
      cards: [
        {
          imgFrontCard: "../../assets/img/influence/icon-1.png",
          ttlCardFront: "Diseño",
          imgBackCard: "../../assets/img/influence/icon-1.png",
          ttlBack: "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-2.png",
          ttlCardFront: "Fotografía",
          imgBackCard: "../../assets/img/influence/icon-2.png",
          ttlBack: "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-3.png",
          ttlCardFront: "Redacción",
          imgBackCard: "../../assets/img/influence/icon-3.png",
          ttlBack: "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-4.png",
          ttlCardFront: "Ilustración",
          imgBackCard: "../../assets/img/influence/icon-4.png",
          ttlBack: "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-5.png",
          ttlCardFront: "Diseño audiovisual",
          imgBackCard: "../../assets/img/influence/icon-5.png",
          ttlBack: "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-5.png",
          ttlCardFront: "Motion graphics",
          imgBackCard: "../../assets/img/influence/icon-5.png",
          ttlBack: "Contactanos",
        },
        {
          imgFrontCard: "../../assets/img/influence/icon-5.png",
          ttlCardFront: "Edición de video",
          imgBackCard: "../../assets/img/influence/icon-5.png",
          ttlBack: "Contactanos",
        },
      ],
    };
  },
  mounted(){
    new TypeIt("#ttl-home", {
        strings: this.tituloContent,
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