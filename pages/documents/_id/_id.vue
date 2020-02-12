<template>
  <div>
    <p>DocumentS - _id.vue</p>
    <nuxt-child :document="document" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  async fetch({ $axios, params, store }) {
    let response = await $axios.get(`/search/${params.id}`);
    let document = response.data.data;

    store.commit("SET_CURRENT_DOCUMENT", DocumentType);
  },
  computed: {
    ...mapState({
      document: "currentDocument"
    })
  }
};
</script>

<style lang="scss" scoped>
</style>