<template>
  <div>
    <nuxt-child :document="document" />
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  head() {
    return {
      title: "Design Manual for Roads and Bridges (DMRB)"
      // titleTemplate: `%s ${this.document.TITLE} - Design Manual for Roads and Bridges (DMRB)`
    };
  },
  // async fetch({ $axios, params, store }) {
  //   let response = await $axios.getData(`/search/${params.NODEID}`);
  //   let document = response.data.data;

  //   store.commit("SET_CURRENT_DOCUMENT", document);
  // },
  computed: {
    ...mapState(["documents"])
  }
};
</script>

<style scoped></style>
