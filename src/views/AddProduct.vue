<template>
    <div class="container">
        <div class="div-center">
            <div class="content">
                <h3>Add Product</h3><br>
                <form @submit.prevent="addProduct">
                    <div class="form-group">
                        <label for="title">Product Name :</label>
                        <input v-model="name" type="text" class="form-control" placeholder="Name of Product">
                    </div>
                    <div class="form-group">
                        <label for="image_url">Image URL :</label>
                        <input id="image_url" v-model="image_url" type="text" class="form-control" placeholder="Url Image of Product">
                    </div>
                     <div class="form-group">
                        <label for="price">Price:</label>
                        <input id="price" v-model="price" type="number" class="form-control" placeholder="Product's Price">
                    </div>
                    <div class="form-group">
                        <label for="stock">Stock :</label>
                        <input id="stock" v-model="stock" type="text" class="form-control" placeholder="Product's Stock">
                    </div><br>
                    <button type="submit" class="btn btn-primary" >Add Product</button> &nbsp; &nbsp; &nbsp;
                    <button type="cancel" class="btn btn-danger cancel" @click.prevent="cancel">Cancel</button>
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
      stock: '',
      categoryId: '',
      options: [
        { text: 'Fashion', value: 1 },
        { text: 'Foods', value: 2 },
        { text: 'Tools', value: 3 },
        { text: 'Others', value: 4 }
      ]
    }
  },
  methods: {
    addProduct () {
      const data = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        categoryId: this.categoryId
      }
      this.$store.dispatch('addProduct', data)
    },
    cancel () {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style>

</style>
