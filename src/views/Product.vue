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
                                    <img class="product-big-img" :src="default_pic" alt="" />
                                </div>
                                <div class="product-thumbs">
                                    <Carousel :nav="false" class="product-thumbs-track ps-slider">
                                        <Slide v-for="slide in 2" :key="slide">
                                            <div class="carousel__item">
                                                <div @click="changeImage(thumbs[0])" :class="thumbs[0] == default_pic ? 'pt active' : 'pt' " >
                                                    <img src="img/mickey1.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="carousel__item">
                                                <div @click="changeImage(thumbs[1])" :class="thumbs[1] == default_pic ? 'pt active' : 'pt' " >
                                                    <img src="img/mickey2.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="carousel__item">
                                                <div @click="changeImage(thumbs[2])" :class="thumbs[2] == default_pic ? 'pt active' : 'pt' " >
                                                    <img src="img/mickey3.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div class="carousel__item">
                                                <div @click="changeImage(thumbs[3])" :class="thumbs[3] == default_pic ? 'pt active' : 'pt' " >
                                                    <img src="img/mickey4.jpg" alt="" />
                                                </div>
                                            </div>
                                        </Slide>

                                        <template #addons></template>
                                    </Carousel>
                                </div>
                            </div>
                            <div class="col-lg-6 text-left">
                                <div class="product-details">
                                    <div class="pd-title">
                                        <span>oranges</span>
                                        <h3 class="mt-3 mb-2">Pure Pineapple</h3>
                                    </div>
                                    <div class="pd-desc">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum iure natus quos non a sequi, id accusantium! Autem.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus quisquam animi, commodi, nihil voluptate nostrum neque architecto illo officiis doloremque et corrupti cupiditate voluptatibus error illum. Commodi expedita animi nulla aspernatur.
                                            Id asperiores blanditiis, omnis repudiandae iste inventore cum, quam sint molestiae accusamus voluptates ex tempora illum sit perspiciatis. Nostrum dolor tenetur amet, illo natus magni veniam quia sit nihil dolores.
                                            Commodi ratione distinctio harum voluptatum velit facilis voluptas animi non laudantium, id dolorem atque perferendis enim ducimus? A exercitationem recusandae aliquam quod. Itaque inventore obcaecati, unde quam
                                            impedit praesentium veritatis quis beatae ea atque perferendis voluptates velit architecto?
                                        </p>
                                        <h4>$495.00</h4>
                                    </div>
                                    <div class="quantity">
                                        <router-link to="/shopping-cart" class="primary-btn pd-cart">
                                            Add To Cart
                                        </router-link>
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
                default_pic:"img/mickey1.jpg",
                thumbs: [
                    "img/mickey1.jpg",
                    "img/mickey2.jpg",
                    "img/mickey3.jpg",
                    "img/mickey4.jpg",
                ]
            }
        },
        methods: {
            changeImage(urlImage){
                this.default_pic = urlImage;
            }
        },
    };
</script>

<style scoped>
    .carousel__slide {padding: 10px;}
    .carousel__item {
        background-color: transparent;
        margin-right: 0.5rem;
    }
    .carousel__item img {
        width: 100%;
    }
    .carousel__slide.carousel__slide--visible.carousel__slide--active {
        padding: 0;;
    }
</style>
