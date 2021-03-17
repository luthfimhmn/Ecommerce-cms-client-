<template>
    <div class="back">
        <div class="div-center">
            <div class="content">
                <h3>Add Product</h3>
                <form @submit.prevent="addProduct">
                    <div class="form-group">
                        <label for="title">Product Name :</label>
                        <input v-model="name" type="text" class="form-control" placeholder="Name of Product">
                    </div>
                    <div class="form-group">
                        <label for="title">Image URL :</label>
                        <input v-model="image_url" type="text" class="form-control" placeholder="Url Image of Product">
                    </div>
                     <div class="form-group">
                        <label for="exampleInputPassword1">Price:</label>
                        <input v-model="price" type="number" class="form-control" placeholder="Product's Price">
                    </div>
                    <div class="form-group">
                        <label for="description">Stock :</label>
                        <input v-model="stock" type="text" class="form-control" placeholder="Product's Stock">
                    </div><br>
                    <button type="submit" class="btn btn-primary" >Add Product</button>
                    <button type="submit" class="btn btn-danger cancel">Cancel</button>
                    <hr />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  computed: {

  },
  methods: {
    addProduct () {
      const data = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', data)
    }
  }
}
</script>

<style>

</style>
