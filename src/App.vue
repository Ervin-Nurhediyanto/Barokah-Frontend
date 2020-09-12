<template>
  <div id="app">
    <after/>
    <router-view/>
  </div>
</template>
<script>
import after from './components/nav/after'
export default {
  components: {
    after
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
