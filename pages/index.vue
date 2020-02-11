<template>
  <div>
    <b-container>
      <b-breadcrumb :items="bcItems"></b-breadcrumb>
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
          v-for="(discipline, index) in disciplines"
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
          v-for="(lifecycle, index) in lifecycles"
          :key="index"
          class="my-2 col-sm col-md-6 col-lg-4 align-self-stretch"
        >
          <b-card tag="div">
            <b-card-title>{{lifecycle.title}}</b-card-title>

            <b-button href="/documents" variant="secondary" class="nt-auto">Go somewhere</b-button>
          </b-card>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disciplines: [
        {
          id: 1,
          title: "General principles and scheme governance"
        },
        {
          id: 2,
          title: "Sustainability and Environment"
        },
        {
          id: 3,
          title: "Road layout"
        },
        {
          id: 4,
          title: "Pavement"
        },
        {
          id: 5,
          title: "Structures and Bridges"
        },
        {
          id: 6,
          title: "Drainage"
        },
        {
          id: 7,
          title: "Geotechnics"
        },
        {
          id: 8,
          title: "Control & Communications Technology"
        },
        {
          id: 9,
          title: "Road Lighting"
        }
      ],
      lifecycles: [
        {
          id: 1,
          title: "General Information"
        },
        {
          id: 2,
          title: "Appraisal"
        },
        {
          id: 3,
          title: "Design"
        },
        {
          id: 4,
          title: "Construction"
        },
        {
          id: 5,
          title: "Maintenance and Operation"
        },
        {
          id: 6,
          title: "Inspection and Assessment"
        },
        {
          id: 7,
          title: "Disposal"
        }
      ],
      bcItems: [
        {
          text: "Standards for highways",
          href: "http://www.standardsforhighways.co.uk"
        },
        {
          text: "DMRB",
          href: "#"
        }
      ]
    };
  }
};
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