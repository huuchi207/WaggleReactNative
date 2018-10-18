import React, { Component } from "react";
import { connect } from "react-redux";
import View from "./view";
import { getData } from "../../actions/Test";
class Test extends Component {
  render() {
    return <View {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    success: state.test.success,
    error: state.test.error,
    loading: state.test.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetData: () => {
      dispatch(getData("/test"));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
