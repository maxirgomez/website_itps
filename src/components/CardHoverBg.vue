<template>

  <div class="col-lg-4 text-center wow fadeInUp p-2" >
    <div class="box-item card magic-hover magic-hover__square">
      <div class="flip-box">
        <div
          class="flip-box-front text-center filter card-front"
          :style="{ backgroundImage: 'url(' + imgFront + ')' }"
        >
          <div class="inner color-white">
            <h6 class="flip-box-header ttl-gray"> {{ ttlCardFront }} </h6>
          </div>
        </div>
        <div
          class="flip-box-back text-center card-back"
          :style="{ backgroundImage: 'url(' + imgBack + ')' }"
        >
          <div class="inner color-white">
            <h6 class="flip-box-header-bg ttl-gray">
              {{ ttlCardBack }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardHoverBg",
  props: [
    'ttlCardFront',
    'imgFront',
    'imgBack',
    'ttlCardBack',
  ],
};
</script>

<style scoped>
.box-item {
  position: relative;
  -webkit-backface-visibility: hidden;
  display: flex;
  justify-content: center;
}

.card {
  background-color: transparent;
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      #acacac1b 25%,
      #acacac1b 26%,
      transparent 27%,
      transparent 74%,
      #acacac1b 75%,
      #acacac1b 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      #acacac1b 25%,
      #acacac1b 26%,
      transparent 27%,
      transparent 74%,
      #acacac1b 75%,
      #acacac1b 76%,
      transparent 77%,
      transparent
    );
  height: 30vh;
  width: 100%;
  background-size: 40px 40px;
  transition: 0.3s all ease-in-out;
  color: var(--gray);
  border-radius: 0;
}

.flip-box-header {
  position: relative;
  bottom: 7.5vh;
}

.flip-box {
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  perspective: 1000px;
  -webkit-perspective: 1000px;
}

.flip-box-front,
.flip-box-back {
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  height: 20vh;
  -ms-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-front {
  -ms-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-front {
  -ms-transform: rotateY(-180deg);
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-box-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  -ms-transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-back {
  -ms-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.flip-box .inner {
  position: absolute;
  left: 0;
  width: 100%;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;
  transform: translateY(-50%) translateZ(60px) scale(0.94);
  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  -ms-transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 50%;
}

.flip-box-img {
  margin-top: 25px;
  height: 3vh;
}

.flip-box-button {
  background-color: var(--gray);
  color: var(--white);
  padding: 15px 20px;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
}
.flip-box-header-bg{
    width: 80%;
    margin: auto;
}
.card-front {
  background-size: 10vh;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;
}
.card-back {
  background-size: 10vh;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;
}
</style>