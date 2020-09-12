import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: localStorage.getItem('token') || null,
    resetId: localStorage.getItem('resetId') || null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setSesetId (state, id) {
      state.resetId = id
    }
  },
  actions: {
    loginSeller (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/login/seller', payload)
          .then((res) => {
            console.log(res.data.result.message)
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', this.state.token)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert(err.response.data.result)
            reject(err)
          })
      })
    },
    loginCustomer (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/login/custommer/', payload)
          .then((res) => {
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', this.state.token)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert(err.response.data.result)
            reject(err)
          })
      })
    },
    registerSeller (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/register/seller/', payload)
          .then((res) => {
            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert(err.response.data.result)
            reject(err)
          })
      })
    },
    registerCustomer (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_BASE_URL + '/users/register/custommer/', payload)
          .then((res) => {
            resolve(res.data.result[0])
          })
          .catch((err) => {
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
    }
  },
  modules: {
  }
})
