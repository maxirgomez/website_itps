<template>
  <Header
    :titulo="tituloCustomer"
    :classColor="ttlColor"
    :parrafo="parrafoCustomer"
    :class="classCustomer"
    :folder="carpeta"
    :name="nombreImg"
    :bgTriangle="bgTrianglewhite"
  />
  <section>
    <article class="py-5">
      <header>
        <div class="container">
          <h4 class="text-center f-light">
            "No basta con preguntar a tus clientes lo que quieren y dárselo.<br />Para
            cuando lo hayas conseguido ya querrán algo nuevo."
          </h4>
          <h6
            class="d-flex justify-content-end mt-3 f-light"
            style="font-style: italic"
          >
            Steve Jobs
          </h6>
        </div>
      </header>
    </article>
  </section>
  <section>
    <article>
      <header class="container">
        <h1 class="text-center wow fadeInUp">
          Ante la multiplicidad de canales y opciones, el CX ya no es lineal.
        </h1>
        <h4 class="ttl-blue text-center">
          Por eso nuestros servicios incluyen:
        </h4>
      </header>
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-4 text-center">
            <img
              class="icons-services-grid"
              src="../../assets/img/customer/WebITPS_Marketing_Landings_customer-07.svg"
              alt=""
            />
            <h6 class="ttl-gray">Reputación online</h6>
            <p class="f-light">
              Análisis de tu situación actual, y planteo de una estrategia
              centrada en cuidar el equity de tu
            </p>
          </div>
          <div class="col-lg-4 text-center">
            <img
              class="icons-services-grid"
              src="../../assets/img/customer/WebITPS_Marketing_Landings_customer-08.svg"
              alt=""
            />
            <h6 class="ttl-gray">Big Data & Analytics</h6>
            <p class="f-light">marca. Entiende quien es tu</p>
          </div>
          <div class="col-lg-4 text-center">
            <img
              class="icons-services-grid"
              src="../../assets/img/customer/WebITPS_Marketing_Landings_customer-09.svg"
              alt=""
            />
            <h6 class="ttl-gray">
              Implementación de bots con inteligencia artificial
            </h6>
            <p class="f-light">
              consumidor y segmenta. Ahorra tiempo y costos.
            </p>
          </div>
        </div>
      </div>
      <QuoteBgGray :quote="quoteCustomer" />
    </article>
  </section>

  <section class="d-flex flex-column align-center mt-5">
    <article class="py-5">
      <header class="container">
        <h2 class="text-center wow fadeInUp">
          ¿Cómo optimizamos estos resultados?
        </h2>
      </header>
      <div class="container pt-5">
        <div class="row">
          <div class="col-lg-4 p-relative">
            <img
              class="img-fluid my-4 wow fadeInUp"
              src="../../assets/img/customer/WebITPS_Marketing_Landings_customer-10.svg"
              alt=""
            />
          </div>
          <div class="col-lg-8 mb-auto">
            <div class="row mt-5">
              <div class="col-lg-6">
                <div class="d-flex align-start magic-hover magic-hover__square">
                  <img
                    class="icon-plus-content wow fadeInUp"
                    src="../../assets/img/content-mktg/Assets-04.svg"
                    alt=""
                  />
                  <p class="ttl-gray">
                    <strong>Marcamos los puntos clave</strong> a lo largo del
                    customer journey.
                  </p>
                </div>
                <div class="d-flex align-start magic-hover magic-hover__square">
                  <img
                    class="icon-plus-content wow fadeInUp"
                    src="../../assets/img/content-mktg/Assets-04.svg"
                    alt=""
                  />
                  <p class="ttl-gray">
                    Trazamos los <strong>caminos más frecuentes</strong>.
                  </p>
                </div>
                <div class="d-flex align-start magic-hover magic-hover__square">
                  <img
                    class="icon-plus-content wow fadeInUp"
                    src="../../assets/img/content-mktg/Assets-04.svg"
                    alt=""
                  />
                  <p class="ttl-gray">
                    <strong>Definimos las necesidades del usuario</strong>,
                    contemplando ubicaciones geográficas, prospectos de
                    conducta, búsuqedas, impresiones e historial
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="d-flex align-start magic-hover magic-hover__square">
                  <img
                    class="icon-plus-content wow fadeInUp"
                    src="../../assets/img/content-mktg/Assets-04.svg"
                    alt=""
                  />
                  <p class="ttl-gray">
                    <strong>Segmentamos los tipos de contenido</strong> que les
                    ofrecemos.
                  </p>
                </div>
                <div class="d-flex align-start magic-hover magic-hover__square">
                  <img
                    class="icon-plus-content wow fadeInUp"
                    src="../../assets/img/content-mktg/Assets-04.svg"
                    alt=""
                  />
                  <p class="ttl-gray">Entregamos <strong>mensajes</strong></p>
                </div>
                <div class="d-flex align-start magic-hover magic-hover__square">
                  <img
                    class="icon-plus-content wow fadeInUp"
                    src="../../assets/img/content-mktg/Assets-04.svg"
                    alt=""
                  />
                  <p class="ttl-gray">
                    <strong>Encadenados</strong> entre sí.
                    <strong>Identificamos las herramientas</strong> que usan
                    para la búsqueda.
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
    <article class="py-5">
      <header>
        <h1 class="text-center">Caso de éxito</h1>
      </header>
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-4 py-5">
            <img
              class="my-4 magic-hover magic-hover__square wow fadeInUp"
              src="../../assets/img/content-mktg/Assets-17.svg"
              alt="Logo Vital"
            />
            <p class="ttl-gray">
              Previo a su campaña "Transformá tu piel", Bagovit, marca líder
              mundial en cremas y productos de cuidado corporal, quería lograr
              que
              <strong
                >sus usuarios puedan asesorarse de manera online sobre los
                productos</strong
              >
              que más les convenía utilizar al momento de tratar su cuerpo. La
              idea original implicaba el reclutamiento y entrenamiento de una
              decena de asistentes virtuales, que respondiese consultas durante
              una ventana de tiempo diaria, siguiendo un guión para cada posible
              pregunta.
            </p>
            <p class="ttl-gray">
              <strong>En ITPS Marketing redoblamos la apuesta</strong> y le
              sugerimos la implementación de
              <strong>un chatbot que no solo ahorraba tiempo</strong> de
              implementación contra la capacitación de asistentes virtuales y
              costos de mantenimiento contra el pago de honorarios, sino que
              permitiía una <strong>asistencia 24/7</strong>. Para ello
              trabajamos con mútiples dermatólogos y especialistas, nutriendo al
              bot de conocimiento profesional previo para que tenga una
              respuesta a cada consulta.
            </p>
            <div class="d-flex align-start magic-hover magic-hover__square">
              <img
                class="icon-plus-content wow fadeInUp"
                src="../../assets/img/content-mktg/Assets-04.svg"
                alt=""
              />
              <p class="f-bold ttl-gray">
                Validación del número de teléfono existente a WA API
              </p>
            </div>
            <div class="d-flex align-start magic-hover magic-hover__square">
              <img
                class="icon-plus-content wow fadeInUp"
                src="../../assets/img/content-mktg/Assets-04.svg"
                alt=""
              />
              <p class="f-bold ttl-gray">Aprobación del Whatsapp Business</p>
            </div>
            <div class="d-flex align-start magic-hover magic-hover__square">
              <img
                class="icon-plus-content wow fadeInUp"
                src="../../assets/img/content-mktg/Assets-04.svg"
                alt=""
              />
              <p class="f-bold ttl-gray">Whatsapp API Hosting</p>
            </div>
            <div class="d-flex align-start magic-hover magic-hover__square">
              <img
                class="icon-plus-content wow fadeInUp"
                src="../../assets/img/content-mktg/Assets-04.svg"
                alt=""
              />
              <p class="f-bold ttl-gray">Gestión de perfiles comerciales</p>
            </div>
            <div class="d-flex align-start magic-hover magic-hover__square">
              <img
                class="icon-plus-content wow fadeInUp"
                src="../../assets/img/content-mktg/Assets-04.svg"
                alt=""
              />
              <p class="f-bold ttl-gray">Mensajes inbound</p>
            </div>
            <div class="d-flex align-start magic-hover magic-hover__square">
              <img
                class="icon-plus-content wow fadeInUp"
                src="../../assets/img/content-mktg/Assets-04.svg"
                alt=""
              />
              <p class="f-bold ttl-gray">
                Estado del mensaje y mensajes enriquecidos
              </p>
            </div>
            <div class="d-flex align-start magic-hover magic-hover__square">
              <img
                class="icon-plus-content wow fadeInUp"
                src="../../assets/img/content-mktg/Assets-04.svg"
                alt=""
              />
              <p class="f-bold ttl-gray">
                Moderación y soporte a lo largo de toda la campaña
              </p>
            </div>
          </div>
          <div class="col-lg-8 p-relative">
            <div class="p-sticky">
              <img
                class="wow fadeInUp"
                src="../../assets/img/content-mktg/Assets-18.svg"
                alt=""
              />
              <p class="text-center ttl-gray">
                Lo que comenzó como una campaña de apenas dos meses continuó por
                más de un año y con resultados positivos tanto para el cliente
                como para su público.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
  <Form />
</template>

<script>
import "@/assets/css/cx/style.css";
import "@/assets/css/styles.css";
import Header from "@/components/Header";
import QuoteBgGray from "@/components/QuoteBgGray";
import Form from "@/components/Form";
export default {
  components: {
    Header,
    QuoteBgGray,
    Form
  },
  data() {
    return {
      tituloCustomer: "Customer Experience",
      parrafoCustomer:
        "¿Por qué y para qué estar en las redes sociales? Bueno, cuando se trata de una marca o servicio, es ¿Por la Experiencia de Usuario es la percepción que tu cliente se lleva cada vez que realiza una compra con tu marca. Nosotros estamos acá para mejorarla. Entregando una experiencia personalizada y diseñada correctamente, no solo obtenés un diferencial en cuanto a la competencia sino que estás un paso más cerca de que tu cliente sea final.",
      carpeta: "customer",
      bgTrianglewhite: "bg-triangle-white",
      nombreImg: "girl_customer",
      quoteCustomer: "¿Listo para crear una experiencia?",
      ttlColor: "ttl-gray",
    };
  },
  mounted() {
    new TypeIt("#ttl-home", {
      strings: this.tituloCustomer,
      speed: 50,
      waitUntilVisible: true,
    }).go();
  },
};
</script>

<style>
.bg-triangle-white {
  background-image: url("../../assets/img/arrow_white.png");
  background-size: 90vh;
  height: 100vh;
  background-position: bottom right;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 1000px) {
  .bg-triangle-white {
    background-position: bottom right;
    background-size: 10vh;
  }
}
.p-sticky {
  position: sticky;
  top: 0;
  right: 0;
}
</style>