<template>
        
<section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5">
                    <Carousel :items-to-show="3" :wrap-around="true" :items="3" :nav="false" class="product-slider">
                        <Slide v-for="slide in 3" :key="slide">
                            <div class="product-item">
                                <div class="pi-pic">
                                    <div class="carousel__item"><img src="img/products/women-3.jpg" alt="" srcset=""></div>
                                    <!-- <img src="img/mickey1.jpg" alt="" /> -->
                                    <ul>
                                        <li class="w-icon active">
                                            <a href="#"><i class="icon_bag_alt"></i></a>
                                        </li>
                                        <li class="quick-view"><a href="product.html">+ Quick View</a></li>
                                    </ul>
                                </div>
                                <div class="pi-text">
                                    <div class="catagory-name">Coat</div>
                                    <a href="#">
                                        <h5>Mickey Baggy</h5>
                                    </a>
                                    <div class="product-price">
                                        $14.00
                                        <span>$35.00</span>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        
                        <template #addons>
                            <Navigation />
                            <Pagination/>
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import "/laragon/www/shayna/public/css/vue3-carousel.min.css";
    // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes

    import { defineComponent } from 'vue';
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
    
    export default defineComponent({
        name: 'WrapAround',
        components: {
            Carousel,
            Slide,
            Navigation,
            Pagination
        },
    })
</script>

<style>
    .carousel__slide {padding: 10px;}
    .carousel__item {
        width: 30rem;
    }
    .carousel__item img {
        width: 100%;
    }
</style>
  
  