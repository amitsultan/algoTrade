import Main from "./pages/Home-Page";
// import Profile from "./pages/Profile-Page";
import VueRouter from "vue-router";

// import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/Profile",
    name: "ProfilePage",
    component: () => import("./pages/Profile-Page"),
  },
  {
    path: "/Login",
    name: "login",
    component: () => import("./pages/Login-Page"),
  },
  {
    path: "/Register",
    name: "register",
    component: () => import("./pages/Register-Page"),
  },
    {
    path: "/EmployeeRequests/:user_id",
    name: "employeePage",
    component: () => import("./pages/Employee-Page"),
    props: true
  },
  {
    path: "/About",
    name: "AboutPage",
    component: () => import("./pages/About-Page"),
  },
  {
    path: "/Contact",
    name: "ContactPage",
    component: () => import("./pages/Contact-Page"),
  },
  
  // {
  //     path: "*",
  //     name: "notFound",
  //     component: NotFound,
  // },
];


export default routes;
