import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    }
  },
  actions: {
    loginSeller (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:4000/api/v1/users/login/seller', payload)
          .then((res) => {
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', this.state.token)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert('Login Error')
            reject(err)
          })
      })
    },
    loginCustomer (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:4000/api/v1/users/login/custommer/', payload)
          .then((res) => {
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', this.state.token)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert('Login Error')
            reject(err)
          })
      })
    },
    registerSeller (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:4000/api/v1/users/register/seller/', payload)
          .then((res) => {
            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert('Register Error')
            reject(err)
          })
      })
    },
    registerCustomer (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:4000/api/v1/users/register/custommer/', payload)
          .then((res) => {
            resolve(res.data.result[0])
          })
          .catch((err) => {
            alert('Register Error')
            reject(err)
          })
      })
    }
  },
  modules: {
  }
})
