<template>
    <div>
 <div class="container">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner py-2 px-3">
                <div class="carousel-item active">
                    <div class="row row-cols-2 row-cols-md-5">
                        <div class="col mb-2">
                            <div class="cards shadow" style="background-color: #5650D8;">
                                <img src="../../assets/carousel-caegory/high_heels.png" alt="...">
                                <div class="centered"><strong>High Heels</strong></div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="cards shadow" style="background-color: #B5D850;">
                                <img src="../../assets/carousel-caegory/watch.png" alt="...">
                                <div class="centered"><strong>WrisWatch</strong></div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="cards shadow" style="background-color: #50C8D8;">
                                <img src="../../assets/carousel-caegory/handbag.png" alt="...">
                                <div class="centered"><strong>Handbag</strong></div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="cards shadow" style="background-color: #AC50D8;">
                                <img src="../../assets/carousel-caegory/bagpack.png" alt="...">
                                <div class="centered"><strong>Backbag</strong></div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="cards shadow" style="background-color: #D85089;">
                                <img src="../../assets/carousel-caegory/shocks.png" alt="...">
                                <div class="centered"><strong>Socks</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row row-cols-2 row-cols-md-5">
                        <div class="col mb-2">
                            <div class="cards shadow" style="background-color: #5086D8;">
                                <img src="../../assets/carousel-caegory/glasses.png" alt="...">
                                <div class="centered"><strong>Glasses</strong></div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="cards shadow" style="background-color: #53D850;">
                                <img src="../../assets/carousel-caegory/cap.png" alt="...">
                                <div class="centered"><strong>Cap</strong></div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="cards shadow" style="background-color: #D8BA50;">
                                <img src="../../assets/carousel-caegory/tie.png" alt="...">
                                <div class="centered"><strong>Tie</strong></div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="cards shadow" style="background-color: #D85091;">
                                <img src="../../assets/carousel-caegory/dress.png">
                                <div class="centered"><strong>Dress</strong></div>
                            </div>
                        </div>
                        <div class="col mb-2 ">
                            <div class="cards shadow " style="background-color: #50D8AF; ">
                                <img src="../../assets/carousel-caegory/formal.png">
                                <div class="centered"><strong>Formal Suit</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <div class="row row-cols-2 row-cols-md-5 ">
                        <div class="cards shadow mb-2 " style="background-color: #D85050; ">
                            <img src="../../assets/carousel-caegory/accesoris.png">
                            <div class="centered"><strong>Accesoris</strong></div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'carousel2'
}
</script>

<style scoped>
 .cards {
            max-width: 206px;
            height: 220px;
            border-radius: 8px;
            display: flex;
            position: relative;
            text-align: center;
            color: white;
        }

        img {
            margin: auto;
        }

        .centered {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 25px;
            text-shadow: 2px 2px black;
        }

        a {
            width: 20px !important;
        }
</style>
