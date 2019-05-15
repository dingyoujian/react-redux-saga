import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "./action";
import styles from "./style.module.css";

function mapStateToProps(state, ownProps) {
  const { EvaluateReducer } = state;
  return {
    EvaluateReducer
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return { actions: bindActionCreators(Actions, dispatch) };
}

class Evaluate extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div onClick={() => this.props.history.goBack()}>evaluate</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Evaluate);
