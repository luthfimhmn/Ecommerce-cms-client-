import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: [],
    editedProduct: '',
    banners: [],
    editedBanner: ''
  },
  mutations: {
    insertProduct (state, payload) {
      state.product = payload
    },
    insertNewProduct (state, payload) {
      state.product.push(payload)
    },
    deleteProduct (state, payload) {
      state.product = state.product.filter(product => product.id !== payload)
    },
    getEditProduct (state, payload) {
      state.editedProduct = payload
    },
    insertBanner (state, payload) {
      state.banners = payload
    },
    insertNewBanner (state, payload) {
      state.banners.push(payload)
    },
    deleteBanner (state, payload) {
      state.banners = state.banners.filter(banner => banner.id !== payload)
    },
    getEditBanner (state, payload) {
      state.editedBanner = payload
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
          Swal.fire({
            title: 'Login success!',
            icon: 'success'
          })
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
          Swal.fire({
            title: 'Add Product success!',
            icon: 'success'
          })
          console.log(data)
          router.push('/dashboard')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Something is wrong',
            text: `${err}`
          })
          console.log(err.message)
          console.log(err)
        })
    },
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('insertProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            axios({
              url: `http://localhost:3000/products/${id}`,
              method: 'DELETE',
              headers: { access_token: localStorage.access_token }
            })
              .then(() => {
                Swal.fire(
                  'Deleted!',
                  'Product has been deleted.',
                  'success'
                )
                context.commit('deleteProduct', id)
              })
              .catch(err => {
                console.log(err)
              })
          }
        })
    },
    editProduct (context, payload) {
      axios({
        method: 'PUT',
        url: `http://localhost:3000/products/${payload.prodId}`,
        headers: { access_token: localStorage.access_token },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          Swal.fire({
            title: 'Edit Success',
            icon: 'success'
          })
          router.push('/dashboard')
        })
        .catch(err => console.log(err))
    },
    getEditProduct (context, id) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/products/${id}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(data => {
          context.commit('getEditProduct', data)
          router.push(`/dashboard/${id}/edit`)
        })
        .catch(err => console.log(err))
    },
    addBanner (context, payload) {
      axios({
        url: '/banners',
        method: 'POST',
        headers: { access_token: localStorage.access_token },
        data: {
          title: payload.title,
          status: payload.status,
          image_url: payload.image_url
        }
      })
        .then(({ data }) => {
          context.commit('insertNewBanner', data)
          Swal.fire({
            title: 'Banner Added',
            icon: 'success'
          })
          router.push('/banners')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Something is wrong',
            text: `${err}`
          })
          console.log(err)
        })
    },
    fetchBanner (context, payload) {
      axios({
        url: '/banners',
        method: 'GET',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('insertBanner', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteBanner (context, id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            axios({
              url: `/banners/${id}`,
              method: 'DELETE',
              headers: { access_token: localStorage.access_token }
            })
              .then(() => context.commit('deleteBanner', id))
              .catch(err => console.log(err))
          }
        })
    },
    getEditBanner (context, id) {
      axios({
        method: 'GET',
        url: `/banners/${id}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(data => {
          context.commit('getEditBanner', data)
          router.push(`/banners/${id}/edit`)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editBanner (context, payload) {
      axios({
        method: 'PUT',
        url: `/banners/${payload.bannerId}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(() => {
          Swal.fire({
            title: 'Edit Banner success',
            icon: 'success'
          })
          router.push('/banners')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
