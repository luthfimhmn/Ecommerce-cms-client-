<template>
  <div class="container">
        <div class="div-center">
            <div class="content">
                <h3>Edit Banner</h3>
                <form @submit.prevent="editBanner">
                    <div class="form-group">
                        <label for="title">Banner Title :</label>
                        <input v-model="editedBanner.data.title" type="text" class="form-control" placeholder="Banner URL">
                    </div>
                    <div class="form-group">
                        <label for="description">Status :</label>
                        <input v-model="editedBanner.data.status" type="text" class="form-control" placeholder="Banner's Stock">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Image Url:</label>
                        <input v-model="editedBanner.data.image_url" type="text" class="form-control" placeholder="Banner's Status">
                    </div><br>
                    <button type="submit" class="btn btn-primary" >Edit Banner</button> &nbsp; &nbsp;
                    <button type="cancel" class="btn btn-danger cancel" @click.prevent="cancel">Cancel</button>
                    <hr />
                </form>
            </div>
        </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    editBanner () {
      const bannerId = this.$route.params.id
      const data = {
        bannerId,
        title: this.editedBanner.data.title,
        status: this.editedBanner.data.status,
        image_url: this.editedBanner.data.image_url
      }
      this.$store.dispacth('editBanner', data)
    },
    cancel () {
      this.$router.push('/banners')
    }
  },
  computed: {
    ...mapState(['editedBanner'])
  }
}
</script>

<style>

</style>
