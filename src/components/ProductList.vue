<template>
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5">
                    <div class="product-thumbs">
                        <Carousel :nav="false" class="product-thumbs-track ps-slider">
                            <Slide v-for="slide in 2" :key="slide">
                                <div class="carousel__item">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img :src="womanProducts[0]" alt="">
                                            <ul>
                                                <li class="w-icon active">
                                                    <a href="#"><i class="icon_bag_alt"></i></a>
                                                </li>
                                                <li class="quick-view">
                                                    <router-link to="/product">
                                                        + Quick View
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Coat</div>
                                            <router-link to="/product">
                                                <h5>Mickey Baggy</h5>
                                            </router-link>
                                            <div class="product-price">
                                                $14.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="carousel__item">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img :src="womanProducts[1]" alt="">
                                            <ul>
                                                <li class="w-icon active">
                                                    <a href="#"><i class="icon_bag_alt"></i></a>
                                                </li>
                                                <li class="quick-view">
                                                    <router-link to="/product">
                                                        + Quick View
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Coat</div>
                                            <router-link to="/product">
                                                <h5>Mickey Baggy</h5>
                                            </router-link>
                                            <div class="product-price">
                                                $14.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="carousel__item">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img :src="womanProducts[2]" alt="">
                                            <ul>
                                                <li class="w-icon active">
                                                    <a href="#"><i class="icon_bag_alt"></i></a>
                                                </li>
                                                <li class="quick-view">
                                                    <router-link to="/product">
                                                        + Quick View
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Coat</div>
                                            <router-link to="/product">
                                                <h5>Mickey Baggy</h5>
                                            </router-link>
                                            <div class="product-price">
                                                $14.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="carousel__item">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img :src="womanProducts[3]" alt="">
                                            <ul>
                                                <li class="w-icon active">
                                                    <a href="#"><i class="icon_bag_alt"></i></a>
                                                </li>
                                                <li class="quick-view">
                                                    <router-link to="/product">
                                                        + Quick View
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">Coat</div>
                                            <router-link to="/product">
                                                <h5>Mickey Baggy</h5>
                                            </router-link>
                                            <div class="product-price">
                                                $14.00
                                                <span>$35.00</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Slide>

                            <template #addons></template>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes

    import { defineComponent } from 'vue';
    import { Carousel, Slide } from 'vue3-carousel';
    
    export default defineComponent({
        name: 'WrapAround',
        components: {
            Carousel,
            Slide,
            // Navigation,
            // Pagination
        },
        data(){
           return {
            womanProducts :[
                "img/products/women-1.jpg",
                "img/products/women-2.jpg",
                "img/products/women-3.jpg",
                "img/products/women-4.jpg",
            ]
           } 
        }
    })
</script>

<style scoped>
    .carousel__item {
        background: transparent;
    }
</style>
  
  