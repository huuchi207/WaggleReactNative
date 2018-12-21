import React, { Component } from "react";
import { connect } from "react-redux";
import View from "./view";
import { requestApiError } from "../../../actions/Global";
import {loginAction, onPlus} from "../../../actions/Login";

class MyWaggles extends Component {
  render() {
    return <View {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onPlus: (a, b) => {
      dispatch(onPlus(a,b));
    },};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyWaggles);
