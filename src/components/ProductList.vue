<template>
    <section class="women-banner spad">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mt-5" v-if ="products.length > 0">
                    <div class="product-thumbs">
                        <Carousel :nav="false" class="product-thumbs-track ps-slider">
                            <Slide v-for="slide in 2" :key="slide">
                                <div v-for="itemProduct in products" v-bind:key="itemProduct.id"  class="carousel__item">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <img :src="itemProduct.galleries[0].photo" alt="">
                                            <ul>
                                                <li class="w-icon active">
                                                    <a href="#"><i class="icon_bag_alt"></i></a>
                                                </li>
                                                <li class="quick-view">
                                                    <router-link :to="'/product/' + itemProduct.id ">
                                                        + Quick View
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="pi-text">
                                            <div class="catagory-name">{{ itemProduct.type }}</div>
                                            <router-link :to="'/product/' + itemProduct.id ">
                                                <h5>{{ itemProduct.name }}</h5>
                                            </router-link>
                                            <div class="product-price">
                                                ${{ itemProduct.price }}
                                                <!-- <span>$35.00</span> -->
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <!-- <div class="carousel__item">
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
                                </div> -->
                            </Slide>

                            <template #addons></template>
                        </Carousel>
                    </div>
                </div>
                <div class="col-lg-12 mt-5" v-else>
                    <p class="text-center">
                        New Product Not Found!
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { defineComponent } from 'vue';
    import { Carousel, Slide } from 'vue3-carousel';
    import axios from 'axios';
    
    export default defineComponent({
        name: 'WrapAround',
        components: {
            Carousel,
            Slide,
        },
        data(){
           return {
            products :[],
            womanProducts :[
                "img/products/women-1.jpg",
                "img/products/women-2.jpg",
                "img/products/women-3.jpg",
                "img/products/women-4.jpg",
            ]
           };
        },
        mounted() {
            axios
            .get("http://shayna-backend-laravue.test/api/products")

            // res = result
            .then(res => (this.products = res.data.data.data))
            .catch(err => console.log(err))
        },
    })
</script>

<style scoped>
    .carousel__item {
        background: transparent;
        display: contents;
        padding: 10rem;
    }
    .product-item {
        margin-right: 10px;
        margin-left: 10px;
    }
    .product-item .pi-pic img {
        min-height: 21rem;
    }
</style>
  
  