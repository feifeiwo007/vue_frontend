import LoginFrom from "../components/Auth/loginform";
import Register from "../components/Auth/register";
import demo404 from "../components/HelloWorld";
//import RouterDemo from './components/RouterDemo'

const routes = [
  { path: "/login", component: LoginFrom, name: "1" },
  { path: "/register", component: Register, name: "2" },
  { path: "/bar", component: demo404 },
  // 当 /user/:id 匹配成功，
  // RouterDemo 会被渲染在 App 的 <router-view />
  { path: "/a", redirect: "/bar" },
  { path: "*", component: demo404, name: "404" },
];

export default routes;
