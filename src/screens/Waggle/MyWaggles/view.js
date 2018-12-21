import React from "react";
import {Text, TouchableOpacity, View, FlatList, TextInput, AsyncStorage} from "react-native";
import styles from "./styles";
import {
  Kohana,
  KeyboardScroll,
  AppButton,
  Toast,
  Loading,
  BaseComponent,
  Global,
  Constants
} from "../../../helper";
import {Navigation} from "react-native-navigation";
import {startLogin, startMainApp} from "../../../config/Navigation";

class MyWaggles extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  plusAction = () => {
    if (isNaN(this.state.a) || isNaN(this.state.b)) {

    } else {
      Global.saveItem(Constants.kSum, Number(this.state.a) + Number(this.state.b));
      startLogin();
    }
  };
  minusAction = () => {
    if (isNaN(this.state.a) || isNaN(this.state.b)) {

    } else {
      console.log(this.state.a);
      console.log(this.state.b);
      console.log(parseFloat(this.state.a) - parseFloat(this.state.b));
      // this.props.navigator.({results: 'one'});
      this.props.navigator.switchToTab({tabIndex: 1, results: parseFloat(this.state.a) - parseFloat(this.state.b)});
    }
  }

  render() {
    return (
      <View style={styles.rootView}>
        <View style={[styles.centerView, {
          flexDirection: "column",
          width: Constants.DEVICE.width / 2,
          height: Constants.DEVICE.height / 2,
          flex: 1,
        }]}>
          <View style={[styles.centerView,
            {flexDirection: "row", flex: 0.1}]}>
            <Text style={{flex: 0.2}}>a</Text>
            <TextInput style={{flex: 0.7}}
                       onChangeText={(a) => this.setState({a})}/>
          </View>
          <View style={[styles.centerView,
            {flexDirection: "row", flex: 0.1}]}>
            <Text style={{flex: 0.2}}>b</Text>
            <TextInput style={{flex: 0.7}}
                       onChangeText={(b) => this.setState({b})}/>
          </View>
          <View style={[styles.centerView, {flexDirection: "row", flex: 0.1}]}>
            <AppButton style={{flex: 0.5, marginRight: 50}}
                       onPress={this.plusAction}>PLUS</AppButton>
            <AppButton style={{flex: 0.5}} onPress={this.minusAction}>MINUS</AppButton>
          </View>
        </View>

      </View>
    );
  }
}

export default MyWaggles;
