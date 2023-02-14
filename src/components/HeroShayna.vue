<template>
    <section class="hero-section">
        <Carousel class="hero-items" :items-to-show="1">
            <Slide v-for="slide in 2" :key="slide" :slide-to-show="1">
                <slide class="carousel__item">
                    <div class="single-hero-items set-bg" style="background-image: url('/img/hero-1.jpg');">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-5 text-left">
                                    <span>Bag,kids</span>
                                    <h1>Black friday</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    </p>
                                    <a href="#" class="primary-btn">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </slide>
                <slide class="carousel__item">
                    <div class="single-hero-items set-bg" style="background-image: url('/img/hero-2.jpg');">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-5 text-left">
                                    <span>Bag,kids</span>
                                    <h1>Black friday</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    </p>
                                    <a href="#" class="primary-btn">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </slide>
                <slide class="carousel__item">
                    <div class="single-hero-items set-bg" style="background-image: url('/img/hero-3.jpg');">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-5 text-left">
                                    <span>Bag,kids</span>
                                    <h1>Black friday</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    </p>
                                    <a href="#" class="primary-btn">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </slide>
            </Slide>
    
            <template #addons>
                <!-- <Pagination /> -->
                <Navigation />
            </template>
        </Carousel>
    </section>
</template>

<script>
  // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
  import 'vue3-carousel/dist/carousel.css'
  import { Carousel, Slide, Navigation } from 'vue3-carousel'
  
  export default {
    name: 'HeroShayna',
    components: {
      Carousel,
      Slide,
    //   Pagination,
      Navigation,
    },
    data() {
        return {
            testing: "img/hero-1.jpg"
        }
    },
  }
</script>

<style scoped>
    .carousel__item {
        background-color: transparent;
        display: block;
    }
</style>
  
  