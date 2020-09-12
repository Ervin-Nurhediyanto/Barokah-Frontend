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
                    <h4 class="text-center"><strong>Reset Password</strong></h4>
                    <p class="mx-auto text-danger">You need to change your password to active your account</p>
                    <form role="form" id="login-form">
                        <div class="form-group">
                            <input type="password" v-model="password" class="form-control-lg w-100" name="password" placeholder="Password, min 6 character">
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="confirmPassword" class="form-control-lg w-100" name="confirm_password" placeholder="Confirm Password">
                        </div>
                        <p class="text-right"><a href="#" id="forgot">Forgot Password?</a></p>
                        <!-- <button type="submit" id="btn" class="btn text-white" :disabled="!input"  @click="$emit('login-event')">Reset Password</button> -->
                        <button type="submit" id="btn" class="btn text-white" :disabled="!input"  @click="handleResetPass">Reset Password</button>
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
  name: 'confirm',
  data () {
    return {
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    input: function () {
      return this.password && this.confirmPassword
    }
  },
  methods: {
    ...mapActions(['resetPassword']),
    handleResetPass (e) {
      e.preventDefault()
      const data = {
        password: this.password
      }
      this.resetPassword(data)
        .then((res) => {
          this.$router.push('/login')
        })
    }
  }
}
</script>
