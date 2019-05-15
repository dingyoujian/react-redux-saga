import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { renderRoutes } from "react-router-config";
import { Menu } from "./components/Menu";
import styles from "./style.module.css";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.fade = false;
    this.className = "push";
  }

  componentWillMount() {
    document.body.style.margin = "0px";
    // 这是防止页面被拖拽
    document.body.addEventListener(
      "touchmove",
      ev => {
        ev.preventDefault();
      },
      { passive: false }
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.url === nextProps.location.pathname &&
      this.hash === nextProps.location.hash
    ) {
      return false;
    } else {
      let action = nextProps.history.action.toLowerCase();
      this.url = nextProps.location.pathname;
      this.hash = nextProps.location.hash;
      this.fade = !this.fade;
      if (action === "pop") {
        this.className = "pop";
      } else {
        this.className = "push";
      }
      return true;
    }
  }

  matchRoute(path, routes) {
    let isShow = false;
    routes &&
      routes.forEach(r => {
        if (r.path === path && r.showMenu) {
          isShow = true;
        }
      });
    return isShow;
  }

  render() {
    const { route, location } = this.props;
    const isShowMenu = this.matchRoute(location.pathname, route.routes);

    return (
      <div className={styles.app}>
        <CSSTransition in={this.fade} classNames={this.className} timeout={150}>
          <div key={this.props.location.pathname} className={styles.container}>
            {renderRoutes(route.routes)}
          </div>
        </CSSTransition>
        {isShowMenu && <Menu />}
      </div>
    );
  }
}

export default App;
