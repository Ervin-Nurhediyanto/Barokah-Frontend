<template>
    <div>
        <div class="card shadow m-3">
            <!-- <img src="../../assets/Cappucino.jpg" class="card-img-top" alt="Responsive image"> -->
            <img :src="image" class="card-img-top" alt="Responsive image">
            <div class="card-body col">
                <!-- <strong>Mens Formal suit- Black and White</strong><br> -->
                <strong>{{name}}</strong><br>
                <!-- <span class="text-danger m-0">$40.0</span><br> -->
                <span class="text-danger m-0">{{price}}</span><br>
                <!-- <span class="text-muted m-0">Zalora Cloth</span> -->
                <span class="text-muted m-0">{{brand}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['name', 'image', 'price', 'brand', 'id']
}
</script>

<style scoped>
img {
    width: 238px;
    height: 136px;
}
.card {
    border-radius: 8px !important;
    overflow: hidden;
    max-width: 238px;
}
</style>
