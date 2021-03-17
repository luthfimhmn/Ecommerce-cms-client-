import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: []
  },
  mutations: {
    insertProduct (state, payload) {
      state.product = payload
    },
    insertNewProduct (state, payload) {
      state.product.push(payload)
    },
    deleteProduct (state, payload) {
      state.product.filter(product => product.id !== payload)
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('name', response.data.name)
          localStorage.setItem('role', response.data.role)
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/products',
        headers: { access_token: localStorage.access_token },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          context.commit('insertNewProduct', data)
          router.push('/dashboard')
        })
        .catch(err => console.log(err))
    },
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('insertProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, id) {
      axios({
        url: `http://localhost:3000/products/${id}`,
        method: 'DELETE',
        headers: { access_token: localStorage.access_token }
      })
        .then(() => {
          context.commit('deleteProduct', id)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
