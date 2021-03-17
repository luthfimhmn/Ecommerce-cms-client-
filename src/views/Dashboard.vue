<template>
  <div class="about container">
    <h1>This is dashboard page</h1><br>
    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(prod, index) in product" :key="prod.id">
            <td>{{index + 1 }}</td>
            <td><img :src="prod.image_url" alt="" style="width:200;height:50px;"></td>
            <td>{{ prod.name }}</td>
            <td>Category</td>
            <td>{{ prod.price }}</td>
            <td>{{ prod.stock }} </td>
            <td>
              <button class="btn btn-danger" @click="goToEdit">Edit</button> &nbsp; &nbsp;
              <button class="btn btn-danger" @click="deleteProduct(prod.id)">Delete</button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    goToEdit () {
      this.$router.push('/edit')
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    }
  },
  computed: {
    ...mapState(['product'])
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>

</style>
