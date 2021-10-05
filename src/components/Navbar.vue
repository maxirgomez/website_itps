<template>
  <nav class="navbar nav-gradient navbar-light fixed-top">
    <button
      class="
        navbar-toggler
        nav-itps
        d-flex
        flex-column
        justify-content-between
        align-items-center
      "
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
    >
      <span class="navbar-toggler-icon"></span>
      <div class="d-flex flex-column align-items-center">
        <a
          href="https://www.linkedin.com/company/itpsmarketing/"
          target="_blank"
        >
          <img class="socials hide-mobile" src="@/assets/img/nav/ig_header_1.png" alt="" />
        </a>
        <a href="https://www.instagram.com/itpsmarketing/" target="_blank">
          <img class="socials hide-mobile" src="@/assets/img/nav/ig_header.png" alt="" />
        </a>
        <img class="logo" src="@/assets/img/nav/logo_vertical.png" alt="" />
      </div>
    </button>
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div class="offcanvas-header">
        <div class="d-flex flex-column justify-content-start mt-5">
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button
          ><br />
          <a class="nav-link active mt-4 p-0" aria-current="page" href="/">
            <img
              class="img-fluid"
              src="@/assets/img/nav/logo_header_horizontal.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="offcanvas-body d-flex flex-column justify-content-between">
        <ul class="navbar-nav justify-content-end flex-grow-3 pe-3">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/quienes-somos">Quiénes somos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/customer-experience"
              >Customer Experience</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/influence-marketing"
              >Influence Marketing</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/diseno-desarrollo"
              >Diseño y Desarrollo Web</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/branding">Branding & Comunicación</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/social-media">Social Media Management</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/content-marketing">Content Marketing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/demand-generation">Demand Generation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/paid-media">Paid Media</a>
          </li>
        </ul>

        <div>
          <hr />
          <a
            href="https://www.linkedin.com/company/itpsmarketing/"
            target="_blank"
            class="mx-3"
          >
            <img
              class="socials"
              src="@/assets/img/nav/ig_header_1.png"
              alt=""
            />
          </a>
          <a
            href="https://www.instagram.com/itpsmarketing/"
            class="mx-3"
            target="_blank"
          >
            <img class="socials" src="@/assets/img/nav/ig_header.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navbar-light .navbar-toggler {
  border-color: transparent !important;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0 !important;
}



@media(max-width: 999px){
  .hide-mobile{
    display: none;
  }
  .logo{
    display: none;
  }
}

@media (min-width: 1000px) {
  .offcanvas {
    left: 10px !important;
    height: 98vh;
    top: 8px !important;
    border-radius: 5px;
  }
  .nav-gradient {
    position: relative;
    padding: 3px;
    background: rgb(19, 132, 193);
    background: linear-gradient(
      0deg,
      rgba(19, 132, 193, 1) 27%,
      rgba(10, 212, 147, 1) 60%
    );
    border-radius: 5px;
  }
  .nav-itps {
    width: 4vw;
    background-color: #fff !important;
    height: 95vh;
  }

  .fixed-top {
    top: 1vh !important;
    left: 10px !important;
    width: 4.3vw;
  }
  .socials {
    width: auto;
    height: 2.5vh;
    margin: 10px 0;
    z-index: 20000;
    
  }

  .logo {
    margin: 10px 0;
    width: auto;
    height: 15vh;
    
  }
}
@media (min-width: 1000px) and (max-width: 1400px) {
  .offcanvas {
    width: 20vw !important;
  }
}
</style>