import App from "../containers/App";
import Home from "../containers/Home";
import Evaluate from "../containers/Evaluate";
import Mine from "../containers/Mine";

export const routes = [
  {
    component: App,
    routes: [
      {
        name: "首页",
        path: "/home",
        component: Home,
        showMenu: true
      },
      {
        name: "我的",
        path: "/mine",
        component: Mine,
        showMenu: true
      },
      {
        name: "资格评定",
        path: "/evaluate",
        component: Evaluate
      }
    ]
  }
];
