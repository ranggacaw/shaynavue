<template>
	<div class="productShayna">
		<HeaderShayna/>
        <!-- Breadcrumb Section Begin -->
        <div class="breacrumb-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-text product-more text-left">
                            <router-link to="/">
                                <i class="fa fa-home"></i> Home
                            </router-link>
                            <span>Detail</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumb Section Begin -->

        <!-- Product Shop Section Begin -->
        <section class="product-shop spad page-details">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="product-pic-zoom">
                                    <img class="product-big-img" :src="defaultPic" alt="" />
                                </div>
                                <div class="product-thumbs">
                                    <Carousel :nav="false" class="product-thumbs-track ps-slider">
                                        <Slide v-for="slide in 2" :key="slide">
                                            <div v-for="ss in productDetails.galleries" :key="ss.id" class="carousel__item">
                                                <div @click="changeImage(ss.photo)" :class="ss.photo == defaultPic ? 'pt active' : 'pt' " >
                                                    <img :src="ss.photo" alt="" />
                                                </div>
                                            </div>
                                            <!-- <div class="carousel__item">
                                                <div @click="changeImage(thumbs[1])" :class="thumbs[1] == defaultPic ? 'pt active' : 'pt' " >
                                                    <img src="img/mickey2.jpg" alt="" />
                                                </div>
                                            </div> -->
                                        </Slide>

                                        <template #addons></template>
                                    </Carousel>
                                </div>
                            </div>
                            <div class="col-lg-6 text-left">
                                <div class="product-details">
                                    <div class="pd-title">
                                        <span>{{ productDetails.type }}</span>
                                        <h3 class="mt-3 mb-2">{{ productDetails.name }}</h3>
                                    </div>
                                    <div class="pd-desc">
                                        <p v-html="productDetails.description"></p>
                                        <h4>$ {{ productDetails.price }}</h4>
                                    </div>
                                    <div class="quantity">
                                        <!-- <router-link to="/shopping-cart"> -->
                                            <button @click="saveCart(productDetails.id, productDetails.name, productDetails.price, productDetails.galleries[0].photo)" class="primary-btn pd-cart">Add To Cart</button>
                                        <!-- </router-link> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Product Shop Section End -->
        <RelatedProduct/>
		<FooterShayna/>
		<!-- <Testing/> -->
	</div>
</template>

<script>
    /*@ is an alias to /src*/
    import HeaderShayna from '@/components/HeaderShayna.vue';
    import FooterShayna from '@/components/Footer.vue';
    import RelatedProduct from '@/components/RelatedProduct.vue';
    import { Carousel, Slide } from 'vue3-carousel';
    import axios from 'axios';

    export default {
        name: "productShayna",
        components: {
            HeaderShayna,
            FooterShayna,
            RelatedProduct,
            Carousel,
            Slide,
        },
        data() {
            return {
                defaultPic:[],
                productDetails: [],
                userCart: []
            }
        },
        methods: {
            changeImage(urlImage){
                this.defaultPic = urlImage;
                // console.log(this.idProduct);
            },
            setDataPicture(data){
                // replace object productDetails dengan data dari API
                this.productDetails = data;
                // replace value deafultPict dengan data index ke 0 dari API
                this.defaultPic = data.galleries[0].photo; 
            },
            // using idProduct for parameter, for save details in the cart 
            // this function for add to cart function
            saveCart(idProduct, nameProduct, priceProduct, photoProduct){
                var productStored = {
                    "id": idProduct,
                    "name": nameProduct,
                    "price": priceProduct,
                    "photo": photoProduct
                }

                this.userCart.push(productStored);
                const parsed = JSON.stringify(this.userCart);
                localStorage.setItem('userCart', parsed);
            }
        },
        mounted() {
            if (localStorage.getItem('userCart')) {
                try {
                    this.userCart = JSON.parse(localStorage.getItem('userCart'));
                } catch(e) {
                    localStorage.removeItem('userCart');
                }
            }
            axios
            .get("http://shayna-backend-laravue.test/api/products", {
                params: {
                    id: this.$route.params.id,
                }
            })

            // res = result
            // .then(res => (this.productDetails = res.data.data))
            .then(res => (this.setDataPicture(res.data.data)))
            .catch(err => console.log(err))
        },
    };
</script>

<style scoped>
    .carousel__slide {padding: 10px;}
    .carousel__item {
        background-color: transparent;
        margin-right: 0.5rem;
        /* display: -webkit-box; */
    }
    .carousel__item img {
        width: 100%;
        max-height: 200px;
    }
    .carousel__slide.carousel__slide--visible.carousel__slide--active {
        padding: 0;;
    }
</style>
