import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router"; // Import Vue Router
//import Home from "./views/Home.vue"; // Import the Home component
import SignUp from "./views/SignUp.vue";
import PlusOne from "./views/PlusOne.vue";
import Successful from "./views/Successful.vue";
import Dashboard from "./views/Dashboard.vue";
import PlusTwo from "./views/PlusTwo.vue";
import Login from "./views/Login.vue";
import MemberList from "./views/Apointment.vue";
import "./style.css";
import { Component } from "lucide-react";

// Define your routes
const routes = [
  {
    path: "/", // Define the path for the home route
    // Set the component for the route
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp, // Add the component here
  },
  {
    path: "/add-plus-one",
    name: "PlusOne",
    component: PlusOne, // Add the component here
  },

  {
    path: "/add-plus-two",
    name: "PlusTwo",
    component: PlusTwo, // Add the component here
  },
  {
    path: "/success",
    name: "Successful",
    component: Successful, // Add the component here
  },
  {
    path: "/login",
    name: "Login",
    component: Login, // Add the component here
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard, // Add the component here
  },
  {
    path: "/dashboard/verify-guest",
    name: "MemberList",
    component: MemberList, // Add the component here
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Use the HTML5 history mode
  routes,
});

const app = createApp(App);

// Use the router
app.use(router);

app.mount("#app");
