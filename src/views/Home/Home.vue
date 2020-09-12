<template>
  <div class="home">
    <div class="container">
      <!-- <router-link to='/login' class="m-5 mx-auto">login</router-link> -->
      <Carousel/> <br><br>
      <h1><strong>New</strong></h1>
      <span class="text-muted">You've never seen it before</span>
      <div class="row row-cols-2 row-cols-md-5">
        <!-- <card/> <card/> <card/> <card/> <card/>
        <card/> <card/> <card/> <card/> <card/> -->
        <div v-for="product in allProduct" :key="product.id">
          <card
          :name='product.name'
          :image="product.image.split(', ')[0]"
          :price='product.price'
          :brand='product.brand'
          :id='product.id'
          />
        </div>
      </div>
      <br><br>
      <h1><strong>Popular</strong></h1>
      <span class="text-muted">Find chlotes that are  trending recently</span>
      <div class="row row-cols-2 row-cols-md-5">
        <!-- <Card/> <Card/> <Card/> <Card/> <Card/>
        <Card/> <Card/> <Card/> <Card/> <Card/> -->
        <div v-for="product in allProduct" :key="product.id">
          <card
          :name='product.name'
          :image="product.image.split(', ')[0]"
          :price='product.price'
          :brand='product.brand'
          :id='product.id'
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../../components/_base/home/carousel'
import Card from '../../components/_base/card'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    Carousel,
    Card
  },
  computed: {
    ...mapGetters({
      allProduct: 'allProduct'
    })
  },
  mounted () {
    this.getAllProduct()
  },
  methods: {
    ...mapActions(['getAllProduct'])
  }
}
</script>
