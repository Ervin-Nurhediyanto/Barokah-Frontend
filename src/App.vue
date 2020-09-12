<template>
  <div id="app">
<<<<<<< HEAD
    <after/>
=======
    <navAfter />
>>>>>>> 0fedf24be7282975bc5ffd5f69f7085717d86fb4
    <router-view/>
  </div>
</template>
<script>
<<<<<<< HEAD
import after from './components/nav/after'
export default {
  components: {
    after
=======
import navAfter from './components/_base/nav/after'
export default {
  components: {
    navAfter
>>>>>>> 0fedf24be7282975bc5ffd5f69f7085717d86fb4
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
<<<<<<< HEAD

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
=======
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
>>>>>>> 0fedf24be7282975bc5ffd5f69f7085717d86fb4
</style>
