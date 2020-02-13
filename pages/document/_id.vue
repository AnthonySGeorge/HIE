<template>
  <div>
    <b-container>
      <b-row>
        <h1>{{document.TITLE}}</h1>
      </b-row>
      <b-row>
        <b-card tag="article" class="mb-2 mr-sm-2 mb-sm-0">
          <!-- <b-card-title>{{ document.TITLE }}</b-card-title> -->
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
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["documents"]),
    document() {
      return this.documents.find(d => d.NODE_ID === this.$route.params.id);
    }
  }
};
</script>

<style>
</style>