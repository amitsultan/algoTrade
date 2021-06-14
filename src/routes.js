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
    path: "/EmployeLeave",
    name: "employeeLeavePage",
    component: () => import("./pages/EmployeeLeave"),
    props: true
  },
  {
  path: "/CollectingData",
  name: "CollectingData",
  component: () => import("./pages/CollectingDataPage"),
  },
  {
    path: "/ManagerDecisions",
    name: "ManagerDecisions",
    component: () => import("./pages/ManagerDecisions"),
  },
  {
    path: "/About",
    name: "AboutPage",
    component: () => import("./pages/About-Page")
  },
  {
    path: "/LeavingAction",
    name: "LeavingAction",
    component: () => import("./pages/LeavingAction"),
  },
  {
    path: "/RoboAdvising",
    name: "RoboAdvising",
    component: () => import("./pages/RoboAdvising"),
  },
  {
    path: "/EmployeeDecisions",
    name: "EmployeeDecisions",
    component: () => import("./pages/EmployeeDecisions"),
  },
{
  path: "/EmployeeMoney",
  name: "EmployeeMoney",
  component: () => import("./pages/EmployeeMoney"),
},{
  path: "/EmployeeClosure",
  name: "EmployeeClosure",
  component: () => import("./pages/EmployeeNextJob-page"),
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
