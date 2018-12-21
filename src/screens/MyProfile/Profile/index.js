import React from "react";
import {Text, View, TouchableOpacity, AsyncStorage} from "react-native";
import {startLogin} from "../../../config/Navigation";
import {Constants} from "../../../helper";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      result : 0
    };
  }

  onPressLogout = async () => {
    try {
      await AsyncStorage.removeItem(Constants.kUserToken);
      startLogin();
    } catch (error) {
      throw error;
    }
  };
  componentDidMount = () => {
    // AsyncStorage.getItem(Constants.kMinus).then((value) => {
    //   console.log("kminute result", value);
    //   this.setState({result : value});
    // })

  };


  render() {
    return (
      <View styles={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "center"
      }}>
        <Text>Result = {this.state.result!= undefined ? this.props.navigator.params.results : ""}</Text>
      </View>
    );
  }
}

export default Profile;
