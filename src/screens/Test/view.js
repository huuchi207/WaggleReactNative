import React from "react";
import { Text, View, Button, Alert } from "react-native";
import BaseComponent from "../../helper/base";
import Loading from "../../helper/components/loading";
import { Kohana, KeyboardScroll, AppButton, Toast } from "../../helper";
import FlatList from "../../helper/components/keyboard-aware-scroll-view/KeyboardAwareFlatList";
import CustomRow from "../../helper/components/item-list/itemforecast";
const BASE_ICON_URL = "http://openweathermap.org/img/w/";

class Test extends BaseComponent {
  constructor(props) {
    super(props);
  }
  getData() {
    this.props.onGetData();
  }
  showMessage() {
    Alert.alert("You tapped the button!");
  }
  render() {
    super.render();
    return (
      <View>
        {this.props.loading ? <Loading /> : null}
        <Button
          title={"Get list data"}
          onPress={() => {
            this.getData();
          }}
        />
        {this.props.success ? (
          <FlatList
            data={this.props.success}
            renderItem={({ item }) => (
              <CustomRow
                title={item.name}
                description={item.weather[0].description}
                image_url={BASE_ICON_URL + item.weather[0].icon + ".png"}
                data={item.main.temp + " °C"}
                onPressItem={() => {
                  this.showMessage();
                }}
              />
            )}
          />
        ) : null}
        {this.props.error ? <Text>{this.props.error}</Text> : null}
      </View>
    );
  }
}
export default Test;
