<template>
  <div>
    <h1>YOU ARE HERE</h1>
    <nuxt-child :document="document" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  async fetch({ $axios, params, store }) {
    let response = await $axios.get(`/search`);
    let document = response.NODE_ID;
    console.log("response: " + response + "doc: " + document);
    store.commit("SET_CURRENT_DOCUMENT", document);
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