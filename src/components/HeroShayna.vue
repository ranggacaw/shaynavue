<template>
    <section class="hero-section">
        <Carousel class="hero-items">
            <Slide v-for="slide in 2" :key="slide" class="single-hero-items set-bg pt-5" style="background-image: url('/img/hero-1.jpg');">
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
    data: () => ({
        // carousel settings
        settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 700px and up
            700: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 1,
                snapAlign: 'start',
            },
        },
    }),
  }
</script>
  
  