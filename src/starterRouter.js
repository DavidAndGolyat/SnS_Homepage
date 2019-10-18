import Vue from "vue";
import Router from "vue-router";
import StarterPage from "./pages/starter/StarterPage.vue";
import ServicePage from "./pages/starter/Service.vue";
import ContactUsPage from "./pages/starter/ContactUs.vue";
import PeoplePage from "./pages/starter/People.vue";
import StarterNavbar from "./layout/StarterNavbar.vue";
import StarterFooter from "./layout/StarterFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: "/",
      name: "starter",
      components: {default: StarterPage, header: StarterNavbar, footer: StarterFooter},
      props: {
        footer: {backgroundColor: 'black'},
        header: {colorOnScroll: 800}
      },
    },
    {
      path: "/service",
      name: "service",
      components: {default: ServicePage, header: StarterNavbar, footer: StarterFooter},
      props: {
        footer: {backgroundColor: 'black'},
      }
    },
    {
      path: "/contactus",
      name: "contact",
      components: {default: ContactUsPage, header: StarterNavbar, footer: StarterFooter},
      props: {
        footer: {backgroundColor: 'black'},
        header: {colorOnScroll: 1000}
      }
    },
    {
      path: "/people",
      name: "people",
      components: {default: PeoplePage, header: StarterNavbar, footer: StarterFooter},
      props: {
        footer: {backgroundColor: 'black'},
      }
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
});
