<template>
  <div>
    <p></p>
    <nuxt-child />
    <h1>Documents</h1>
    <div v-for="documents in $store.state.documents" :key="document.NODE_ID">
      <nuxt-link :to="`/search/${document.NODE_ID}`">{{ document.TITLE }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import DateFilter from "~/filters/date";
import Vue from "vue";

export default {
  async fetch({ $axios, store }) {
    let response = await $axios.get("/search");
    let document = response.data;

    store.commit("SET_DOCUMENTS", documents);
  }
};
</script>

<style scoped>
</style>
