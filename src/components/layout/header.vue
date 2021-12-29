<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand navbar-light desktop">
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Navbar brand -->
        <a class="navbar-brand" href="/">
          <personal-logo />
        </a>
        <!-- Rigth links -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www.linkedin.com/in/danilogarciab/"
              target="blank"
              >Contact</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/Danilo-GB/"
              target="blank"
            >
              <b-icon-github />
            </a>
          </li>
        </ul>
        <!-- Rigth links -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </div>
</template>

<script>
import PersonalLogo from "../logo.vue";
export default {
  components: {
    PersonalLogo
  }
};
</script>

<style></style>
