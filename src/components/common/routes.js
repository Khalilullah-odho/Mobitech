import Home from "../home";
import Brands from "../brands";
import BrandModel from "../brandModels";
import LoginForm from "../loginForm";
import Logout from "../logout";
import NotFound from "../notFound";
import DeviceDetail from "../deviceDetail";
import Contact from "../contact";

const routes = [
  {
    title: "Home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    title: "Brands",
    path: "/brands",
    exact: true,
    component: Brands,
  },
  {
    title: "BrandModel",
    path: "/brands/:name",
    component: BrandModel,
  },
  {
    title: "Login",
    path: "/login",
    component: LoginForm,
  },
  {
    title: "Logout",
    path: "/logout",
    component: Logout,
  },
  {
    title: "NotFound",
    path: "/notFound",
    component: NotFound,
  },
  {
    title: "DeviceDetail",
    path: "/mobile/:name",
    component: DeviceDetail,
  },
  {
    title: "Contact",
    path: "/contact",
    component: Contact,
  },
];

export default routes;
