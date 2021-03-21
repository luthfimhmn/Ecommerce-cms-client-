<template>
  <div id="nav">
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/addproduct">Add Product</router-link> |
    <router-link to="/banners">Banner</router-link> |
    <router-link to="/addbanner">Add Banner</router-link> |
    <button class="btn btn-primary" @click="logout">logout</button>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      localStorage.removeItem('name')
      localStorage.removeItem('role')
      Swal.fire({
        title: 'Logout Success',
        icon: 'success'
      })
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
