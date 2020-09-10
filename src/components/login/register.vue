<template>
    <div>
 <div class="container">
        <div class="main-content mt-5">
            <div class="container">
                <div class="login-area">
                    <div class="row mb-4">
                        <div class="mx-auto row">
                            <div id="logo">
                                <img src="../../assets/Vector.png" alt="">
                            </div>
                            <div id="brand">
                                <strong>Blanja Barokah</strong>
                            </div>
                        </div>

                    </div>
                    <h4><strong>Please Sign Up with your account</strong></h4>
                    <form role="form" id="login-form">
                        <div class="row">
                            <div class="btn-group m-4 mx-auto" role="group">
                                <button type="button" class="btn btn-white border border-secondary text-secondary px-4 py-2">Customer</button>
                                <button type="button" class="btn btn-danger text-white px-5 py-2">Seller</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" v-model="name" class="form-control-lg w-100 border-0" placeholder="Name">
                        </div>
                        <div class="form-group">
                            <input type="email" v-model="email" class="form-control-lg w-100 border-0" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input type="number" v-model="phone" class="form-control-lg w-100 border-0" placeholder="Phone Number">
                        </div>
                        <div class="form-group">
                            <input type="text" v-model="store" class="form-control-lg w-100 border-0" placeholder="Store Name">
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="password" class="form-control-lg w-100 " placeholder="Password">
                        </div>
                        <button type="submit" id="btn" class="btn text-white" :disabled="!input">Register</button>
                        <p class="mt-3 text-center">Already have a Blanja Barokah account? <a href="#" id=forgot @click="$emit('login-event')">Login</a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      store: '',
      password: ''
    }
  },
  computed: {
    input: function () {
      return this.name && this.email && this.phone && this.store && this.password
    }
  }
}
</script>
