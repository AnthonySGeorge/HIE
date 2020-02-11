<template>
  <div>
    <b-container>
      <b-row>
        <b-card
          v-for="document in documents"
          :key="document.NODE_ID"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 mr-sm-2 mb-sm-0"
        >
          <b-card-title>{{ document.TITLE }}</b-card-title>
          <b-card-text class="d-flex w-100 justify-content-between">
            <small>
              {{ document.DOCUMENT_REFERENCE }}
              <br />
              {{ document.REVISION }}
            </small>
            <small>
              Discipline:
              <br />
              {{ document.DISCIPLINE }}
            </small>
            <small>
              Lifecycle:
              <br />
              {{ document.LIFECYCLE_STAGE }}
            </small>
          </b-card-text>
          <b-card-text class="d-flex w-100 justify-content-between">
            <small>Date Issued: {{ document.DATE_ISSUED | date }}</small>
          </b-card-text>
          <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
          <nuxt-link :to="`/documents/${document.NODE_ID}`">
            {{
            document.TITLE
            }}
          </nuxt-link>
        </b-card>
      </b-row>
    </b-container>
    <b-container>
      <nuxt-child />
    </b-container>
  </div>
</template>

<script>
import DateFilter from "~/filters/date";
import Vue from "vue";
import { mapState } from "vuex";
Vue.filter("date", DateFilter);
export default {
  head: {
    title: "HIE - Document List"
  },
  // async fetch({ $axios, store }) {
  //   let response = await $axios.get("/search");
  //   let documents = response.data.data;

  //   store.commit("SET_ITEMS", documents);
  //   console.log("mytems: " + documents);
  // }
  computed: {
    ...mapState(["documents"])
  }
};
</script>

<style scoped lang="scss"></style>
