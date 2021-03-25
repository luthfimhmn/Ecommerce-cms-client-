<template>
<div>
    <table class="table container">
        <thead>
            <th>No</th>
            <th>Banner</th>
            <th>Status</th>
            <th>Actions</th>
        </thead>
        <tbody>
            <tr v-for="(banner, index) in banners" :key="banner.id">
                <td>{{ index + 1}}</td>
                <td><img :src="banner.image_url" alt="" style="width:800;height:200px;"></td>
                <td>{{ banner.status }}</td>
                <td>
                    <button class="btn btn-danger" @click.prevent="goToEdit(banner.id)">Edit</button> &nbsp; &nbsp;
                    <button class="btn btn-danger" @click.prevent="deleteBanner(banner.id)">Delete</button>
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
    fetchBanner () {
      this.$store.dispatch('fetchBanner')
    },
    goToEdit (id) {
      this.$store.dispatch('getEditBanner', id)
    },
    deleteBanner (id) {
      this.$store.dispatch('deleteBanner', id)
    }
  },
  computed: {
    ...mapState(['banners'])
  },
  created () {
    this.fetchBanner()
  }
}
</script>

<style>

</style>
