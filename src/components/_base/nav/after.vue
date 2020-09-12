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
                        <button type="button" id="btndrop" class="btn ml-4 my-auto" data-toggle="modal" data-target="#navModal">
                            <img src="../../../assets/nav/filter.png">
                        </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <a class="nav-link mr-3" href="#"><img src="../../../assets/nav/shopping-cart.png"></a>
                        <a class="nav-link mr-3" href="#"><img src="../../../assets/nav/bell.png"></a>
                        <a class="nav-link mr-3" href="#"><img src="../../../assets/nav/mail.png" @click="chat"></a>
                        <a class="nav-link mr-5" href="#"><img src="../../../assets/nav/christian-buehner-DItYlc26zVI-unsplash 1.png" class="rounded-circle"></a>
                    </div>
                </div>
            </nav>
        </nav>
        <!-- modal -->
        <div class="modal fade" id="navModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header mr-auto border border-0">
                        <button type="button" class="close mr-auto" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                        <h5>Filter</h5>
                    </div>
                    <form action="post">
                        <div class="modal-body border-top">
                            <strong>Colors</strong><br>
                            <div id="color">
                                <input type="checkbox" class="option-input radio shadow" name="example" style="background: black;" checked />
                                <input type="checkbox" class="option-input radio shadow" name="example" style="background: #FFFFFF;" />
                                <input type="checkbox" class="option-input radio shadow" name="example" style="background: #B82222;" />
                                <input type="checkbox" class="option-input radio shadow" name="example" style="background: #BEA9A9;" />
                                <input type="checkbox" class="option-input radio shadow" name="example" style="background: #E2BB8D;" />
                                <input type="checkbox" class="option-input radio shadow" name="example" style="background: #151867" />
                            </div>
                            <br>
                            <hr>
                            <strong>Sizes</strong><br><br>
                            <div class="row my-2">
                                <div class="radio-groups shadow">
                                    <input type="checkbox" id="sizexs" name="selector" value="customer">
                                    <label for="sizexs">XS</label>
                                </div>
                                <div class="radio-groups shadow">
                                    <input type="checkbox" id="sizes" name="selector" value="seller" checked>
                                    <label for="sizes">S</label>
                                </div>
                                <div class="radio-groups shadow">
                                    <input type="checkbox" id="s" name="selector" value="seller">
                                    <label for="s">M</label>
                                </div>
                                <div class="radio-groups shadow">
                                    <input type="checkbox" id="sizel" name="selector" value="seller">
                                    <label for="sizel">L</label>
                                </div>
                                <div class="radio-groups shadow">
                                    <input type="checkbox" id="sizexl" name="selector" value="seller">
                                    <label for="sizexl">XL</label>
                                </div>
                            </div>
                            <hr>
                            <strong>Category</strong><br><br>

                            <div class="row my-2">
                                <div class="radio-groups shadow">
                                    <input type="checkbox" id="all" name="selector" value="customer" checked>
                                    <label for="all" style="width: 110px;">All</label>
                                </div>
                                <div class="radio-groups shadow">
                                    <input type="checkbox" id="women" name="selector" value="customer">
                                    <label for="women" style="width: 110px;">Women</label>
                                </div>
                                <div class="radio-groups shadow">
                                    <input type="checkbox" id="men" name="selector" value="customer">
                                    <label for="men" style="width: 110px;">Men</label>
                                </div>
                                <div class="radio-groups shadow">
                                    <input type="checkbox" id="boys" name="selector" value="customer">
                                    <label for="boys" style="width: 110px;">Boys</label>
                                </div>
                                <div class="radio-groups shadow">
                                    <input type="checkbox" id="girl" name="selector" value="customer">
                                    <label for="girl" style="width: 110px;">Girl</label>
                                </div>
                            </div>
                            <hr>
                            <strong>Brand</strong><br>
                            <select name="brandCategory" id="brandCategory" class="w-100 border border-0 mb-4">
                                <option value="allBrand">All Brand</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            </select>
                            <div class="modal-footer px-5 row">
                                <button type="button" class="btn btn-outline-secondary rounded-pill w-50 col mx-2" data-dismiss="modal">Disscard</button>
                                <button type="submit" style="background-color: #d31d0d;" class="btn btn-danger rounded-pill w-50 col mx-2">Apply</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'after',
  methods: {
    chat () {
      this.$router.push('/chat')
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
#color {
    font-family: 'Roboto', sans-serif;
}
@keyframes click-wave {
    0% {
        height: 40px;
        width: 40px;
        opacity: 0.35;
        position: relative;
    }
    100% {
        height: 200px;
        width: 200px;
        margin-left: -80px;
        margin-top: -80px;
        opacity: 0;
    }
}
.option-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    position: relative;
    top: 30px;
    height: 40px;
    width: 40px;
    transition: all 0.15s ease-out 0s;
    border: none;
    color: rgb(64, 131, 2);
    cursor: pointer;
    display: inline-block;
    margin-right: 1rem;
    outline: none;
    z-index: 1000;
    border: 2px solid #bdb7b7;
}
.option-input:hover {
    background: #9faab7;
}
.option-input:checked::before {
    border: 2px solid red;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    bottom: 7px;
    right: 7px;
    position: relative;
    content: '✔';
    display: inline-block;
    font-size: 32px;
    text-align: center;
    margin: auto;
}
.option-input.radio {
    border-radius: 50%;
}
.option-input.radio::after {
    border-radius: 50%;
}
.radio-groups input[type=checkbox] {
    position: absolute;
    visibility: hidden;
    display: none;
}
label {
    width: 50px;
    height: 40px;
    margin: 0;
    padding-top: 8px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
}
.radio-groups input[type=checkbox]:checked+label {
    color: white;
    background: #d31d0d;
}
.radio-groups {
    margin-left: 20px;
    margin-bottom: 20px;
    color: #bdb7b7;
    border: 2px solid #bdb7b7;
    border-radius: 10px;
    overflow: hidden;
}
</style>
