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
                            <div class="radio-group shadow my-5 mx-auto">
                            <input type="radio" id="costumer" name="selector" value="customer" @change="roleCustomer">
                            <label for="costumer">Costumer</label>
                            <input type="radio" id="seller" name="selector" value="seller" @change="roleSeller">
                            <label for="seller">Seller</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" v-model="name" class="form-control-lg w-100 border-0" placeholder="Name">
                        </div>
                        <div class="form-group">
                            <input type="email" v-model="email" class="form-control-lg w-100 border-0" placeholder="Email">
                        </div>
                        <div class="form-group" v-show="userRole == 1">
                            <input type="number" v-model="phoneNumber" class="form-control-lg w-100 border-0" placeholder="Phone Number">
                        </div>
                        <div class="form-group" v-show="userRole == 1">
                            <input type="text" v-model="storeName" class="form-control-lg w-100 border-0" placeholder="Store Name">
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="password" class="form-control-lg w-100 " placeholder="Password">
                        </div>
                        <button v-show="userRole == 1" type="submit" id="btn" class="btn text-white" :disabled="!inputSeller" @click="handleRegisterSeller">Register</button>
                        <button v-show="userRole == 2" type="submit" id="btn" class="btn text-white" :disabled="!inputCustomer" @click="handleRegisterCustomer">Register</button>
                        <p class="mt-3 text-center">Already have a Blanja Barokah account? <a href="#" id=forgot @click="$emit('login-event')">Login</a></p>
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
  name: 'register',
  data () {
    return {
      name: '',
      email: '',
      phoneNumber: '',
      storeName: '',
      password: '',
      userRole: 1
    }
  },
  computed: {
    inputSeller: function () {
      return this.name && this.email && this.phoneNumber && this.storeName && this.password
    },
    inputCustomer: function () {
      return this.name && this.email && this.password
    }
  },
  methods: {
    ...mapActions(['registerSeller']),
    ...mapActions(['registerCustomer']),
    handleRegisterSeller (e) {
      e.preventDefault()
      const data = {
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        storeName: this.storeName,
        password: this.password
      }
      this.registerSeller(data)
        .then((res) => {
          this.$router.go(0)
        })
    },
    handleRegisterCustomer (e) {
      e.preventDefault()
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      this.registerCustomer(data)
        .then((res) => {
          this.$router.go(0)
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
