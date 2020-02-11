<template>
  <div>
    <header>
      <b-navbar toggleable="lg" type="dark" variant="light">
        <b-container>
          <b-navbar-brand>
            <nuxt-link to="/">
              <b-img width="200px" src="~/static/wl-logo.png"></b-img>
            </nuxt-link>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <li>
                <nuxt-link to="/documents">Documents</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/documents/16">Link 16</nuxt-link>
              </li>

              <li>
                <nuxt-link to="/documents/23">Link 23</nuxt-link>
              </li>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
      <b-container>
        <b-jumbotron header="Design Manual for Roads and Bridges (DMRB)" class="mt-3"></b-jumbotron>
      </b-container>
    </header>
    <nuxt />
  </div>
</template>
<script>
export default {
  middleware: "get-documents"
};
</script>
<style>
</style>
