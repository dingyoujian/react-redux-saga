import React, { PureComponent } from "react";
import styles from "./style.module.css";

class Home extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;

    return <div onClick={() => props.history.push("/evaluate")}>home</div>;
  }
}

export default Home;
