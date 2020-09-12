<template>
  <div>
    <div class="container">
      <div class="main-content mt-4">
        <div class="container">
          <div class="login-area">
            <div class="row mb-2">
              <div class="mx-auto row">
                  <div id="logo">
                    <img src="../../../assets/Vector.png" alt="">
                  </div>
                  <div id="brand">
                    <strong>Fir'aun Store</strong>
                  </div>
              </div>
            </div>
            <h5>Anda siap murtad ..?</h5>
            <h4 class="m-0"><strong>Please login with your account</strong></h4>
            <form role="form" id="login-form">
              <div class="row">
                <div class="radio-group shadow my-5 mx-auto">
                  <input type="radio" id="costumer" name="selector" value="customer" @change="roleCustomer">
                  <label for="costumer">Costumer</label>
                  <input type="radio" id="seller" name="selector" value="seller" @change="roleSeller">
                  <label for="seller">Seller</label>
                </div>
              </div>
              <div class="form-group">
                <input type="email" v-model="email" class="form-control-lg w-100 border-0 shadow-sm" id="exampleInputEmail1" placeholder="Email">
              </div>
              <div class="form-group">
                <input type="password" v-model="password" class="form-control-lg w-100 shadow-sm" id="exampleInputPassword1" placeholder="Password">
              </div>
              <p class="text-right"><a href="#" id="forgot" @click="$emit('forgot-password')">Forgot Password?</a></p>
              <button v-show="userRole == 1" type="submit" id="btn" class="btn text-white" :disabled="!input" @click="handleLoginSeller">Login</button>
              <button v-show="userRole == 2" type="submit" id="btn" class="btn text-white" :disabled="!input" @click="handleLoginCustomer">Login</button>
              <p class="mt-3 text-center">Don't have a Blanja Barokah account? <a href="#" id="forgot" @click="$emit('register-event')">Register</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'signin',
  data () {
    return {
      email: '',
      password: '',
      userRole: 1
    }
  },
  computed: {
    input: function () {
      return this.password && this.email
    }
  },
  methods: {
    ...mapActions(['loginSeller']),
    ...mapActions(['loginCustomer']),
    handleLoginSeller (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.loginSeller(data)
        .then((res) => {
          this.$router.push('/')
        })
    },
    handleLoginCustomer (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.loginCustomer(data)
        .then((res) => {
          this.$router.push('/')
        })
    },
    roleCustomer () {
      this.userRole = 2
    },
    roleSeller () {
      this.userRole = 1
    }
  }
}
</script>
