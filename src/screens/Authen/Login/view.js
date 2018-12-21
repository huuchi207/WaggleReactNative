import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  Alert,
  ActivityIndicator
} from "react-native";
import {startMainApp} from "../../../config/Navigation";
import styles from "./styles";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
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
import {setItem, saveItem} from "../../../helper/utils/global";

class Login extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {sum: 0};
  }

  componentDidMount = () => {
    AsyncStorage.getItem(Constants.kSum).then((value) => {
      this.setState({sum: value});
    });
  }

  render() {
    super.render();
    return (
      <View style={styles.rootView}><Text>Sum
        = {this.state.sum !== undefined ? this.state.sum : ""}</Text></View>
    );
  }
}

export default Login;
