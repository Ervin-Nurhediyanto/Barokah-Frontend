<template>
  <div class="Login">
    <component v-bind:is="component"
    @register-event="component='register'"
    @login-event="component='signin'"
    @forgot-password="component='reset'"
    @confirm-event="component='confirm'"></component>
  </div>
</template>
<script>
import signin from '../components/login/signin'
import register from '../components/login/register'
import reset from '../components/login/reset'
import confirm from '../components/login/confirm'

export default {
  name: 'Reset',
  components: {
    signin,
    register,
    reset,
    confirm
  },
  data () {
    return {
      component: confirm
    }
  }
}
</script>
<style>
 .main-content {
            margin: 0 auto;
        }

        #brand {
            font-size: 28px;
            color: #d31d0d;
            margin-top: 5px;
            margin-left: 5px;
        }

        .main-content .login-area {
            max-width: 450px;
            margin: 0 auto;
            text-align: center;
        }

        .main-content .login-area form {
            max-width: 400px;
            margin: 0 auto;
            text-align: left;
        }

        .main-content .login-area form .form-control-lg {
            border: 2px solid #bdb7b7 !important;
            margin-bottom: 10px;
            border-radius: 4px;
        }

        .btn {
            height: 48px;
        }

        #btn {
            background: #d31d0d;
            display: block;
            border-radius: 25px;
            width: 100%;
            margin-top: 20px;
        }

        #forgot {
            margin-top: 25px;
            color: #d31d0d;
        }
         input[type=radio] {
            position: absolute;
            visibility: hidden;
            display: none;
        }

        label {
            width: 123px;
            height: 48px;
            margin: 0;
            padding-top: 10px;
            text-align: center;
            display: inline-block;
            cursor: pointer;
        }

        input[type=radio]:checked+label {
            color: white;
            background: #d31d0d;
        }

        .radio-group {
            width: 250px;
            display: flex;
            flex-direction: row;
            color: #bdb7b7;
            border: 2px solid #bdb7b7;
            border-radius: 10px;
            overflow: hidden;
        }
</style>
