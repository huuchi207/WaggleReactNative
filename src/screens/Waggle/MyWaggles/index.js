import React, { Component } from "react";
import { connect } from "react-redux";
import View from "./view";
import { requestApiError } from "../../../actions/Global";

class MyWaggles extends Component {
  render() {
    return <View {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyWaggles);
