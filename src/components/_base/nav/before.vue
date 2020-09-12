<template>
    <div>
        <nav class="bg-light p-0 shadow">
            <nav class="navbar container navbar-expand-lg navbar-light bg-light p-0">
                <div class="row mx-auto my-2">
                    <img src="../../../assets/Vector.png">
                    <strong id="brand" class="my-auto mr-5">Barokah</strong>
                </div>
                <button class="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="row">
                    <form class="form-inline rounded-pill bg-white row mt-1 ml-5 mb-2">
                        <input class="form-control mr-3 rounded-pill w-100 col" type="search" placeholder="Search" aria-label="Search">
                        <a href="#" type="submit">
                            <img src="../../../assets/nav/Search.png" class="my-2 col-auto">
                        </a>
                    </form>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <a class="nav-link mr-3" href="#"><img src="../../../assets/nav/shopping-cart.png"></a>
                        <button type="button" class="btn btn-danger mr-3 rounded-pill px-3" @click="login">Login</button>
                        <button type="button" class="btn btn-outline-secondary mr-5 rounded-pill">Signup</button>
                    </div>
                </div>
            </nav>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'before',
  methods: {
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
textarea:hover,
input:hover,
textarea:active,
input:active,
textarea:focus,
input:focus,
button:focus,
button:active,
button:hover,
label:focus,
.btn:active,
.btn.active {
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
}
</style>
