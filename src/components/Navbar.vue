<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/addproduct">Add Product</router-link> |
    <router-link to="/banners">Banner</router-link> |
    <router-link to="/addbanner">Add Banner</router-link> |
    <button class="btn btn-primary" @click="logout">logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      localStorage.removeItem('name')
      localStorage.removeItem('role')
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
