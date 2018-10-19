import React from "react";
import { Text, View, Button } from "react-native";
import BaseComponent from "../../helper/base";
import Loading from "../../helper/components/loading";
import { Kohana, KeyboardScroll, AppButton, Toast } from "../../helper";
import FlatList from "../../helper/components/keyboard-aware-scroll-view/KeyboardAwareFlatList";
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
        {this.props.loading ? <Loading /> : null}
        <Button
          title={"Get list data"}
          onPress={() => {
            this.getData();
          }}
        />
        {this.props.success ? (
          <FlatList
            data={
              // [
              // { id: "1", name: "A" },
              // { id: "2", name: "B" },
              // { id: "3", name: "C" }
            // ]
              this.props.success
            }
            renderItem={({ item }) => (
              <Text>
                {item.name}
              </Text>
            )}
          />
        ) : null}
        {this.props.error ? <Text>{this.props.error}</Text> : null}
      </View>
    );
  }
}
export default Test;
