<template>
  <div>
    <b-container>
      <b-breadcrumb :items="$store.state.bcItems"></b-breadcrumb>
      <p>Homepage - index.vue</p>
      <div class="search mx-auto">
        <b-form inline>
          <label class="sr-only" for="search-input">Search documents:</label>
          <b-input
            id="search-input"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Search documents ..."
          ></b-input>
          <b-button variant="primary">Search</b-button>
        </b-form>
      </div>
    </b-container>
    <b-container class="mt-4">
      <h2>See documents by discipline</h2>
      <b-row>
        <div
          v-for="(discipline, index) in $store.state.disciplines"
          :key="index"
          class="my-2 col-sm col-md-6 col-lg-4 d-flex"
        >
          <b-card tag="div" class="align-self-stretch vw-100">
            <b-card-title>{{discipline.title}}</b-card-title>

            <b-button href="/documents" variant="secondary" class="mt-auto">Go somewhere</b-button>
          </b-card>
        </div>
      </b-row>
    </b-container>
    <b-container class="mt-4">
      <h2>See documents by lifecycle</h2>
      <b-row>
        <div
          v-for="(lifecycle, index) in $store.state.lifecycles"
          :key="index"
          class="my-2 col-sm col-md-6 col-lg-4 align-self-stretch"
        >
          <b-card tag="div">
            <b-card-title>{{lifecycle.title}}</b-card-title>

            <!-- <b-button href="/documents" variant="secondary" class="nt-auto">Go somewhere</b-button> -->
            <nuxt-link :to="'/documents/'+lifecycle.title.replace(' ', '+')">Go Go Go</nuxt-link>
          </b-card>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.search {
  display: block;
  width: 335px;
}
.card-body {
  display: flex;
  flex-direction: column;
}
</style>