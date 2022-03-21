<template>
  <Nav />
  <div class="container-fluid">
    <div class="row">
      <!--  -->
      <Menu />
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        <router-link />
      </main>
    </div>
  </div>
</template>

<script>
/*---- 1. import components ----- */
import Nav from "@/components/Nav.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "Admin",
  components: {
    /*---- 2. setup components ----- */
    Nav,
    Menu,
  },
};
</script>

<style scoped></style>
