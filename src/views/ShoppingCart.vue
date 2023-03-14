<template>
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
                        <span>Shopping Cart</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Shopping Cart Section Begin -->
    <section class="shopping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="cart-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th class="p-name text-center">Product Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="cart in userCart" :key="cart.id">
                                            <td class="cart-pic first-row">
                                                <img :src="cart.photo" class="img-cart" />
                                            </td>
                                            <td class="cart-title first-row text-center">
                                                <h5>{{cart.name}}</h5>
                                            </td>
                                            <td class="p-price first-row">$ {{ cart.price }}</td>
                                            <td @click="removeItem(userCart.id)" class="si-close">
                                                <i class="material-icons">
                                                    close
                                                </i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <h4 class="mb-4 text-left">
                                Informasi Pembeli:
                            </h4>
                            <div class="user-checkout text-left">
                                <form>
                                    <div class="form-group">
                                        <label for="namaLengkap">Nama lengkap</label>
                                        <input type="text" class="form-control" id="namaLengkap" aria-describedby="namaHelp" placeholder="Masukan Nama" v-model="customerInfo.name">
                                    </div>
                                    <div class="form-group">
                                        <label for="namaLengkap">Email Address</label>
                                        <input type="email" class="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Masukan Email" v-model="customerInfo.email">
                                    </div>
                                    <div class="form-group">
                                        <label for="namaLengkap">No. HP</label>
                                        <input type="text" class="form-control" id="noHP" aria-describedby="noHPHelp" placeholder="Masukan No. HP" v-model="customerInfo.number">
                                    </div>
                                    <div class="form-group">
                                        <label for="alamatLengkap">Alamat Lengkap</label>
                                        <textarea class="form-control" id="alamatLengkap" rows="3" v-model="customerInfo.address" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="proceed-checkout text-left">
                                <ul>
                                    <li class="subtotal">ID Transaction <span>#SH12000</span></li>
                                    <li class="subtotal mt-3">Subtotal <span>$ {{ totalPrice }}</span></li>
                                    <li class="subtotal mt-3">Pajak <span>10%</span></li>
                                    <li class="subtotal mt-3">Total Biaya <span>$ {{ grandTotal }}</span></li>
                                    <li class="subtotal mt-3">Bank Transfer <span>Mandiri</span></li>
                                    <li class="subtotal mt-3">No. Rekening <span>2208 1996 1403</span></li>
                                    <li class="subtotal mt-3">Nama Penerima <span>Shayna</span></li>
                                </ul>
                                <!-- <router-link @click="checkout()" to="/success" class="proceed-btn"> -->
                                    <a @click="checkout()" href="#" class="proceed-btn">I ALREADY PAID</a>
                                <!-- </router-link> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Shopping Cart Section End -->
</template>

<script>
    import HeaderShayna from '@/components/HeaderShayna.vue';
    import axios from "axios";

    export default {
        name: "ShoppingCart",
        components:{
            HeaderShayna
        },
        data() {
            return {
                userCart: [],
                customerInfo: {
                    name: '',
                    email: '',
                    number: '',
                    address: '',
                }
            };
        },
        methods: {
            removeItem(index){
                // 1 for 1 item
                this.userCart.splice(index,1);
                // console.log(this.userCart.splice(index,1));

                // methods for save data userCart
                const parsed = JSON.stringify(this.userCart);
                localStorage.setItem('userCart', parsed);
            },
            // when click checkout button, this function for send data to API
            checkout() {
                let productIds = this.userCart.map(function(product){
                    return product.id
                });

                let checkoutData = {
                    'name' : this.customerInfo.name,
                    'email' : this.customerInfo.email,
                    'number' : this.customerInfo.number,
                    'address' : this.customerInfo.address,
                    "transaction_total" : parseInt(this.grandTotal),
                    "transaction_status" : "PENDING",
                    "transaction_details" : productIds,
                };
                axios
                .post("http://shayna-backend-laravue.test/api/checkout", checkoutData)
                .then(() => this.$router.push('success'))
                // eslint-disable-next-line no-console
                .catch(err => console.log(err));
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
        },
        computed: {
            totalPrice() {
                return this.userCart.reduce(function(items, userCart){
                    return items + userCart.price
                }, 0);
            },
            grandTotal() {
                return this.totalPrice - ( this.totalPrice * 0.1);
            }
        }
    }
</script>

<style scoped>
    .si-close {
        cursor: pointer;
    }
    .img-cart {
        height: 100px;;
    }
</style>
