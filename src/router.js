import {createWebHistory, createRouter} from "vue-router";
import Home from "./views/Home";
import Todos from './views/Todos.vue'

const history=createWebHistory()
const router=createRouter({

  history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/todos",
      component: Todos
    },
  ]
});

export default router
