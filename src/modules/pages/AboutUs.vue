<template>
  <section class="bg-gradient-triangle">
    <div class="container bg-gradient-arrows">
      <div class="bg-ttl">
        <img class="img-fluid" src="@/assets/img/about/guy.png" alt="" />
      </div>
    </div>
  </section>
  <section>
    <article class="bg-gradient-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img class="img-fluid p-5" src="@/assets/img/about/icon_1.png" alt="" />
          </div>
          <div class="col-lg-6 my-auto py-5">
            <h3 class="ttl-gray">
              Ofrecemos soluciones. Solucionamos problemas
            </h3>
            <p class="ttl-gray">
              ITPS Marketing se desprende de la familia de ITPS One, firma
              internacional dedicada a brindar soluciones IT. Y el término se
              nos quedó pegado. Por eso es que nosotros entregamos soluciones de
              Marketing. Reparamos lo que está roto, cambiamos lo que no
              funciona y corregimos lo que está mal, una solución a la vez.
              Llegamos para ayudarte.
            </p>
          </div>
        </div>
      </div>
    </article>
    <article class="bg-gradient-gray">
      <div class="container">
        <div class="row reverse">
          <div class="col-lg-6 my-auto py-5">
            <h3 class="ttl-gray">Somos un equipo de verdad</h3>
            <p class="ttl-gray">
              Cuando salgamos a la cancha con tu proyecto no buscaremos a nadie
              más porque literalmente tenemos un equipo completo: Especialistas
              en Marketing, analistas, diseñadores gráficos, redactores,
              traductores, diseñadores web, generadores de demanda, project
              leaders, social media managers y diseñadores UX. Una especie de
              Dream Team.
            </p>
          </div>
          <div class="col-lg-6">
            <img class="img-fluid p-5" src="@/assets/img/about/icon_2.png" alt="" />
          </div>
        </div>
      </div>
    </article>
    <article class="bg-gradient-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img class="img-fluid p-5" src="@/assets/img/about/icon_3.png" alt="" />
          </div>
          <div class="col-lg-6 my-auto py-5">
            <h3 class="ttl-gray">
              Nos paramos entre la Comunicación y la Tecnología
            </h3>
            <p class="ttl-gray">
              Ya te contamos que ITPS Marketing se desprende de ITPS One. Por
              eso, las recetas para nuestras innovadoras soluciones de Marketing
              se basan en Marketing con un poco de Tecnología. Desde
              implementaciones de Chatbots hasta la Big Data, nuestras
              propuestas están un paso adelante. Hoy, el comercio y el Marketing
              es más digital que nunca, pero nosotros ya lo veníamos
              anticipando.
            </p>
          </div>
        </div>
      </div>
    </article>
    <article class="bg-gradient-gray">
      <div class="container">
        <div class="row reverse">
          <div class="col-lg-6 my-auto py-5">
            <h3 class="ttl-gray">Somos honestos, veloces y flexibles</h3>
            <p class="ttl-gray">
              Una comunicación triangular es clave y en todos nuestros
              proyectos, ante el más mínimo cambio, vos lo sabrás primero. Nos
              gusta ir rápido, aunque sin apurarnos, y si alguna de tus ideas no
              convence, te lo planteamos con honestidad. Cuando trabajemos
              juntos recibirás la calidad de una multinacional, la ﬂexibilidad
              de una mediana empresa y olvidarás las burocracias de los grandes
              nombres de la industria.
            </p>
          </div>
          <div class="col-lg-6">
            <img class="img-fluid p-5" src="@/assets/img/about/icon_4.png" alt="" />
          </div>
        </div>
      </div>
    </article>
    <article class="bg-gradient-gray">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img class="img-fluid p-5" src="@/assets/img/about/icon_5.png" alt="" />
          </div>
          <div class="col-lg-6 my-auto py-5">
            <h3 class="ttl-gray">Más que un cliente, sos un aliado</h3>
            <p class="ttl-gray">
              Lo que más nos mueve es la construcción de un caso de éxito en
              conjunto y nuestro equipo trabaja con el objetivo de superar las
              expectativas del mismo. También tenemos una gran empresa detrás,
              así que entendemos tus necesidades y lo que a vos te preocupa, a
              nuestro equipo le ocupa. Por eso, cuando terminemos nuestro primer
              proyecto juntos, nos encantaría tomar el que sigue; como aliados.
            </p>
          </div>
        </div>
      </div>
      <h2 class="text-center pt-3 pb-5">Ahora que nos conoces, hablanos de tu proyecto...</h2>
    </article>
  </section>
  <Form />
</template>

<script>
import Form from "@/components/Form";
export default {
  components: {
    Form
  }
};
</script>

<style>
.bg-gradient-triangle {
  background-image: url("../../assets/img/about/triangle_gradient.png");
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 100vh;
}
.bg-gradient-arrows {
  background-image: url("../../assets/img/about/arrows_bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed, local;
}
.bg-ttl {
  background-image: url("../../assets/img/about/bg_quote.png");
  background-repeat: no-repeat;
  background-position: center 20%;
  background-attachment: scroll;
  display: flex;
  justify-content: center;
}
@media (max-width: 1000px) {
  .reverse {
    flex-direction: column-reverse;
  }
  .bg-gradient-gray img, .bg-gradient-gray h3, .bg-gradient-gray p{
    text-align: center;
  }
  .bg-ttl{
    background-size: contain;
  }
  .bg-gradient-arrows{
    background-size: 80vh;
    background-position: center 30%;
  }
  .bg-ttl img{
    position: relative;
    left: 5vw;
    width: 80vw;
  }
}
</style>