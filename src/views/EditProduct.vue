<template>
 <div class="container">
        <div class="div-center">
            <div class="content">
                <h3>Edit Product</h3><br>
                <form @submit.prevent="editProduct">
                    <div class="form-group">
                        <label for="title">Product Name :</label>
                        <input v-model="editedProduct.data.name" type="text" class="form-control" placeholder="Name of Product">
                    </div>
                    <div class="form-group">
                        <label for="title">Image URL :</label>
                        <input v-model="editedProduct.data.image_url" type="text" class="form-control" placeholder="Url Image of Product">
                    </div>
                     <div class="form-group">
                        <label for="exampleInputPassword1">Price:</label>
                        <input v-model="editedProduct.data.price" type="number" class="form-control" placeholder="Product's Price">
                    </div>
                    <div class="form-group">
                        <label for="description">Stock :</label>
                        <input v-model="editedProduct.data.stock" type="text" class="form-control" placeholder="Product's Stock">
                    </div><br>
                    <button type="submit" class="btn btn-primary" >Edit Product</button> &nbsp; &nbsp;
                    <button type="submit" class="btn btn-danger cancel">Cancel</button>
                    <hr />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // name: '',
      // image_url: '',
      // price: '',
      // stock: ''
    }
  },
  methods: {
    editProduct () {
      const prodId = this.$route.params.id
      const data = {
        prodId,
        name: this.editedProduct.data.name,
        image_url: this.editedProduct.data.image_url,
        price: this.editedProduct.data.price,
        stock: this.editedProduct.data.stock
      }
      this.$store.dispatch('editProduct', data)
      // console.log(data)
    }
  },
  computed: {
    ...mapState(['editedProduct'])
  }
}
</script>

<style>

</style>
