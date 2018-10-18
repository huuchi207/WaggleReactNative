import React from "react";
import { Text, View, Button } from "react-native";
import BaseComponent from "../../helper/base";

class Test extends BaseComponent {
  constructor(props) {
    super(props);
  }

  getData() {
    this.props.onGetData();
  }
  render() {
    super.render();
    return (
      <View>
        <Text>hello world!</Text>
        <Button title={"Get list data"} onPress={this.getData} />
        {/*<Text>{this.success}</Text>*/}
      </View>
    );
  }
}
export default Test;
