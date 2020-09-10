<template>
    <div>
    <nav class="bg-light p-0 shadow">
        <nav class="navbar container navbar-expand-lg navbar-light bg-light p-0">
            <div class="row mx-auto my-2">
                <img src="./Vector.png">
                <strong id="brand" class="my-auto mr-5">Barokah</strong>
            </div>
            <button class="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="row">
                <form class="form-inline rounded-pill bg-white row mt-1 ml-5 mb-2">
                    <input class="form-control mr-3 rounded-pill w-100 col" type="search" placeholder="Search" aria-label="Search">
                    <a href="#" type="submit">
                        <img src="./nav/Search.png" class="my-2 col-auto">
                    </a>
                </form>
                <div class="dropdown dropleft ml-4 my-auto">
                    <button role="button" class="btn border border-secondary" id="btndrop" data-toggle="dropdown">
                        <img src="./nav/filter.png" class="my-auto">
                    </button>
                    <div class="dropdown-menu">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>
            </div>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                    <a class="nav-link mr-3" href="#"><img src="./nav/shopping-cart.png"></a>
                    <a class="nav-link mr-3" href="#"><img src="./nav/bell.png"></a>
                    <a class="nav-link mr-3" href="#"><img src="./nav/mail.png"></a>
                    <a class="nav-link mr-5" href="#"><img src="./nav/christian-buehner-DItYlc26zVI-unsplash 1.png" class="rounded-circle"></a>
                </div>
            </div>
        </nav>
    </nav>
    </div>
</template>

<script>
export default {

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

        nav .form-inline {
            border: 1px solid #bdb7b7 !important;
            overflow: hidden;
            padding: 0;
            height: 35px;
            width: 400px;
        }

        #brand {
            font-size: 32px;
            color: #d31d0d;
            margin-left: 5px;
        }

        nav .form-inline input {
            border: none;
            height: 35px;
        }

        #btndrop {
            border: 2px solid #bdb7b7 !important;
            border-radius: 12px;
        }
</style>
