import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const menus = [
  {
    name: "首页",
    path: "/home",
    icon: ""
  },
  {
    name: "我的",
    path: "/mine",
    icon: ""
  }
];
export const Menu = () => {
  return (
    <div className={styles.menu}>
      {menus.map((menu, i) => (
        <NavLink
          className={styles.menu_item}
          key={i}
          to={menu.path}
          activeClassName={styles.selected}
        >
          {menu.name}
        </NavLink>
      ))}
    </div>
  );
};
