import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
<<<<<<< HEAD
    token: localStorage.getItem('token') || null
=======
    token: localStorage.getItem('token') || null,
    resetId: localStorage.getItem('resetId') || null
>>>>>>> staging
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
<<<<<<< HEAD
=======
    },
    setSesetId (state, id) {
      state.resetId = id
>>>>>>> staging
    }
  },
  actions: {
    loginSeller (setex, payload) {
      return new Promise((resolve, reject) => {
<<<<<<< HEAD
        axios.post('http://localhost:4000/api/v1/users/login/seller', payload)
          .then((res) => {
=======
        axios.post(process.env.VUE_APP_BASE_URL + '/users/login/seller', payload)
          .then((res) => {
            console.log(res.data.result.message)
>>>>>>> staging
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', this.state.token)
            resolve(res.data.result[0])
          })
          .catch((err) => {
<<<<<<< HEAD
=======
            alert(err.response.data.result)
>>>>>>> staging
            reject(err)
          })
      })
    },
    loginCustomer (setex, payload) {
      return new Promise((resolve, reject) => {
<<<<<<< HEAD
        axios.post('http://localhost:4000/api/v1/users/login/custommer/', payload)
=======
        axios.post(process.env.VUE_APP_BASE_URL + '/users/login/custommer/', payload)
>>>>>>> staging
          .then((res) => {
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', this.state.token)
            resolve(res.data.result[0])
          })
          .catch((err) => {
<<<<<<< HEAD
=======
            alert(err.response.data.result)
>>>>>>> staging
            reject(err)
          })
      })
    },
    registerSeller (setex, payload) {
      return new Promise((resolve, reject) => {
<<<<<<< HEAD
        axios.post('http://localhost:4000/api/v1/users/register/seller/', payload)
=======
        axios.post(process.env.VUE_APP_BASE_URL + '/users/register/seller/', payload)
>>>>>>> staging
          .then((res) => {
            resolve(res.data.result[0])
          })
          .catch((err) => {
<<<<<<< HEAD
=======
            alert(err.response.data.result)
>>>>>>> staging
            reject(err)
          })
      })
    },
    registerCustomer (setex, payload) {
      return new Promise((resolve, reject) => {
<<<<<<< HEAD
        axios.post('http://localhost:4000/api/v1/users/register/custommer/', payload)
=======
        axios.post(process.env.VUE_APP_BASE_URL + '/users/register/custommer/', payload)
>>>>>>> staging
          .then((res) => {
            resolve(res.data.result[0])
          })
          .catch((err) => {
<<<<<<< HEAD
            reject(err)
          })
      })
=======
            alert(err.response.data.result)
            reject(err)
          })
      })
    },
    forgotPassword (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/forgotpassword/', payload)
          .then((res) => {
            setex.commit('setSesetId', res.data.result)
            localStorage.setItem('resetId', this.state.resetId)
            console.log(res.data.message)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    resetPassword (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_BASE_URL + `/users/resetpassword/${this.state.resetId}`, payload)
          .then((res) => {
            console.log(res.data.message)
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  },
  getters: {
    resetId (state) {
      return state.resetId
>>>>>>> staging
    }
  },
  modules: {
  }
})
