import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

// Import views
import SignUp from "./views/SignUp.vue";
import PlusOne from "./views/PlusOne.vue";
import Successful from "./views/Successful.vue";
import Dashboard from "./views/Dashboard.vue";
import PlusTwo from "./views/PlusTwo.vue";
import Login from "./views/Login.vue";
import MemberList from "./views/Apointment.vue";

// Import styles
import "./style.css";

// Add the icons to the library
library.add(faCoffee, faUser);

const routes = [
  { path: "/signup", name: "SignUp", component: SignUp },
  { path: "/add-plus-one", name: "PlusOne", component: PlusOne },
  { path: "/add-plus-two", name: "PlusTwo", component: PlusTwo },
  { path: "/success", name: "Successful", component: Successful },
  { path: "/login", name: "Login", component: Login },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  {
    path: "/dashboard/verify-guest",
    name: "MemberList",
    component: MemberList,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

// Register FontAwesomeIcon component globally
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
