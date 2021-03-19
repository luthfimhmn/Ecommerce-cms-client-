<template>
<div class="container">
        <div class="div-center">
            <div class="content">
                <h3>Add Banner</h3>
                <form @submit.prevent="addBanner">
                    <div class="form-group">
                        <label for="title">Banner Title :</label>
                        <input v-model="title" type="text" class="form-control" placeholder="Banner URL">
                    </div>
                    <div class="form-group">
                        <label for="description">Status :</label>
                        <input v-model="status" type="text" class="form-control" placeholder="Banner's Stock">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Image Url:</label>
                        <input v-model="image_url" type="text" class="form-control" placeholder="Banner's Status">
                    </div><br>
                    <button type="submit" class="btn btn-primary" >Add Banner</button> &nbsp; &nbsp;
                    <button type="cancel" class="btn btn-danger cancel" @click="cancel">Cancel</button>
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
      title: '',
      status: '',
      image_url: ''
    }
  },
  methods: {
    addBanner () {
      const data = {
        title: this.title,
        status: this.status,
        image_url: this.image_url
      }
      this.$store.dispatch('addBanner', data)
    },
    cancel () {
      this.$router.push('/banners')
    }
  }
}
</script>

<style>

</style>
