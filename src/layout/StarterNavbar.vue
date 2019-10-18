<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{toggle, isToggled}">
      <router-link class="navbar-brand" to="/">
        <img v-lazy="'img/Sling_Stone_Colore_White_small.png'" alt>
      </router-link>
    </template>
    <template slot="navbar-menu">
      <a class="nav-link" href="#/service">
        <i class="now-ui-icons ui-2_settings-90"></i> Capability & Service
      </a>
      <a class="nav-link" href="#/people">
        <i class="now-ui-icons sport_user-run"></i> People
      </a>
      <a class="nav-link" href="#/contactus">
        <i class="now-ui-icons tech_mobile"></i> Contact Us
      </a>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";

export default {
  name: "starter-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink
  }
};
</script>

<style scoped>
</style>
