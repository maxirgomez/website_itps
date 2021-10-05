<template>
  <div>
    <div class="row">
      <div class="col-6 col-lg-3 bg-grid magic-hover magic-hover__square p-0" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" v-for="card in cards">
        <a :href="`${ card.url }`" class="card">
          <div class="padding-card magic-hover magic-hover__square">
            <div >
              <h6>
                {{ card.titulo }}
              </h6>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardHover",
  data() {
    return {
      cards: [
        {
          titulo: "Customer Experience",
          url: "/customer-experience",
        },
        {
          titulo: "Influence Marketing",
          url: "/influence-marketing",
        },
        { 
            titulo: "Diseño y Desarrollo Web", 
            url: "/diseno-desarrollo" 
        },
        { 
            titulo: "Branding & Comunicación", 
            url: "/branding" 
        },
        { 
            titulo: "Social Media Management", 
            url: "/social-media" 
        },
        { 
            titulo: "Content Marketing", 
            url: "/content-marketing" 
        },
        { 
            titulo: "Demand Generation", 
            url: "/demand-generation" 
        },
        { 
            titulo: "Paid Media", 
            url: "/paid-media" 
        },
      ],
    };
  },
};
</script>

<style scoped>
.padding-card {
    padding: .40rem;
}

.bg-grid:nth-child(1):hover {
    background-image: url('../assets/img/services/CustomerExperience.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
}

.bg-grid:nth-child(2):hover {
    background-image: url('../assets/img/services/InfluenceMarketing.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
}

.bg-grid:nth-child(3):hover {
    background-image: url('../assets/img/services/DisenoYWeb.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
}

.bg-grid:nth-child(4):hover {
    background-image: url('../assets/img/services/Branding.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
}

.bg-grid:nth-child(5):hover {
    background-image: url('../assets/img/services/SocialMediaManagement.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
}

.bg-grid:nth-child(6):hover {
    background-image: url('../assets/img/services/ContentMarketing.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
}

.bg-grid:nth-child(7):hover {
    background-image: url('../assets/img/services/LeadGeneration.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
}

.bg-grid:nth-child(8):hover {
    background-image: url('../assets/img/services/PaidMedia.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center bottom;
}

.card h6 {
    margin: auto;
    font-size: 1.3vw;
    text-align: center;
}
@media(max-width: 1000px){
  .card h6{
    font-size: 5vw;
  }
}

.card {
    background-color: transparent;
    background-image: linear-gradient(0deg, transparent 24%,
            #5959591b 25%,
            #5959591b 26%, transparent 27%, transparent 74%,
            #5959591b 75%,
            #5959591b 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%,
            #5959591b 25%,
            #5959591b 26%, transparent 27%, transparent 74%,
            #5959591b 75%,
            #5959591b 76%, transparent 77%, transparent);
    height: 30vh;
    width: 100%;
    background-size: 80px 80px;
    transition: .3s all ease-in-out;
    color: var(--gray);
    border-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card:hover {
    color: var(--white);
    background-color: var(--light-green);
    text-shadow: 1px 1px var(--gray),
        2px 2px var(--gray),
        3px 3px var(--gray),
        4px 4px var(--gray),
        5px 5px var(--gray),
        6px 6px var(--gray),
        7px 7px var(--gray),
        8px 8px var(--gray),
        9px 9px var(--gray)
}
</style>