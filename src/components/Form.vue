<template>
  <footer class="bg_gray_form">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h2 class="ttl-gray">
            Seamos creativos<br />
            juntos.
          </h2>
          <a
            href="https://www.linkedin.com/company/itpsmarketing"
            target="_blank"
          >
            <img
              class="mt-5"
              src="./../assets/img/logos/ln-footer.png"
              alt="linkedin"
            />
          </a>
        </div>
        <div class="col-lg-6">
          <form ref="form" @submit.prevent="sendEmail">
            <div class="form-group">
              <input type="text" name="name" id="name" required="required"/>
              <label for="input" class="control-label">Nombre</label><i class="bar"></i>
            </div>
            <div class="form-group">
              <input type="text" name="email" id="email" required="required"/>
              <label for="input" class="control-label">Email</label><i class="bar"></i>
            </div>
            <div class="form-group">
              <input type="text" name="phone" id="phone" required="required"/>
              <label for="input" class="control-label">Teléfono</label><i class="bar"></i>
            </div>
            <div class="form-group">
              <input type="text" name="company" id="company" required="required"/>
              <label for="input" class="control-label">Empresa</label><i class="bar"></i>
            </div>
            <div class="form-group">
              <input type="text" name="country" id="country" required="required"/>
              <label for="input" class="control-label">País</label><i class="bar"></i>
            </div>
            <div class="form-group">
              <input type="text" name="message" id="message" required="required"/>
              <label for="input" class="control-label">Mensaje</label><i class="bar"></i>
            </div>
            <input type="submit" class="btn-submit" value="Enviar" />
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { VueReCaptcha } from "vue-recaptcha-v3";
import emailjs from "emailjs-com";

export default {
  
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_73q535g",
          "template_xstqvqo",
          this.$refs.form,
          "user_QhOjUIRzSUCTR9AcX0yWh"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },

    
  },
};
</script>

<style>
.form-radio,
.form-group {
  position: relative;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.form-group input {
  height: 1.9rem;
}
.form-group .control-label {
  position: absolute;
  top: 0.25rem;
  pointer-events: none;
  padding-left: 0.125rem;
  z-index: 1;
  color: #b3b3b3;
  font-size: 1rem;
  font-weight: normal;
  -webkit-transition: all 0.28s ease;
  transition: all 0.28s ease;
}
.form-group .bar {
  position: relative;
  border-bottom: 0.0625rem solid #999;
  display: block;
}
.form-group .bar::before {
  content: '';
  height: 0.125rem;
  width: 0;
  left: 50%;
  bottom: -0.0625rem;
  position: absolute;
  background: -webkit-linear-gradient(
    right,
    rgba(19, 132, 193, 1) 27%,
    rgba(10, 212, 147, 1) 60%
  );
  -webkit-transition: left 0.28s ease, width 0.28s ease;
  transition: left 0.28s ease, width 0.28s ease;
  z-index: 2;
}
.form-group input,
.form-group textarea {
  display: block;
  background: none;
  padding: 0.125rem 0.125rem 0.0625rem;
  font-size: 1rem;
  border-width: 0;
  border-color: transparent;
  line-height: 1.9;
  width: 100%;
  color: transparent;
  -webkit-transition: all 0.28s ease;
  transition: all 0.28s ease;
  box-shadow: none;
}
.form-group input:focus,
.form-group input:valid{
  color: #333;
}
.form-group input:focus ~ .control-label,
.form-group input:valid ~ .control-label {
  font-size: 0.8rem;
  color: rgba(10, 212, 147, 1);
  top: -1rem;
  left: 0;
}

.form-group input:focus{
  outline: none;
}
.form-group input:focus ~ .control-label,{
  color: #337ab7;
}
.form-group input:focus ~ .bar::before{
  width: 100%;
  left: 0;
}
.bg_gray_form {
  background-color: #ebebeb;
  padding: 3rem 0;
}

.btn-submit {
  border: none;
  position: relative;
  display: inline-block;
  width: 150px;
  height: 50px;
  text-align: center;
  color: #fff;
  font-size: 2vh;
  text-transform: uppercase;
  text-decoration: none;
  font-family: sans-serif;
  box-sizing: border-box;
  background: linear-gradient(90deg, rgba(19, 132, 193, 1), rgba(10, 212, 147, 1), rgba(19, 132, 193, 1), rgba(10, 212, 147, 1));
  background-size: 400%;
  border-radius: 10px;
  z-index: 1;
  display: flex;
  justify-content: center;
  margin-left: auto;
}
 
.btn-submit:hover {
  animation: animate 8s linear infinite;
}
 
@keyframes animate {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
}
 
.btn-submit:before {
  content: "";
  position: absolute;
  top: -5px;
  right: -5px;
  bottom: -5px;
  left: -5px;
  z-index: -1;
  background: linear-gradient(90deg, rgba(19, 132, 193, 1), rgba(10, 212, 147, 1), rgba(19, 132, 193, 1), rgba(10, 212, 147, 1));
  background-size: 400%;
  border-radius: 40px;
  opacity: 0;
  transition: .5s;
}
 
.btn-submit:hover:before {
  filter: blur(20px);
  opacity: 1;
  animation: animate 8s linear infinite;
}

</style>