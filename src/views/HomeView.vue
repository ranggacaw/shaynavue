<template>
	<div class="homeShayna">
		<HeaderShayna/>
		<HeroShayna/>
		<ProductList/>
		<InstagramPhoto/>
		<PartnerShayna/>
		<FooterShayna/>
		<!-- <Testing/> -->
	</div>
</template>

<script>
/*@ is an alias to /src*/

import HeaderShayna from '@/components/HeaderShayna.vue';
import HeroShayna from '@/components/HeroShayna.vue';
import ProductList from '@/components/ProductList.vue';
import InstagramPhoto from '@/components/Instagram.vue';
import FooterShayna from '@/components/Footer.vue';
import PartnerShayna from '@/components/Partner.vue';
// import Testing from '@/components/TestingPage.vue';

export default {
  name: "homeShayna",
  components: {
	// Testing,
    HeaderShayna,
    HeroShayna,
    ProductList,
	InstagramPhoto,
	PartnerShayna,
	FooterShayna
}
};
</script>

