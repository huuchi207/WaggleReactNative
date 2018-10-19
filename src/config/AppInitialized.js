import { AsyncStorage } from "react-native";
import { startLogin, startMainApp } from "./Navigation";
import { Constants } from "../helper";
import * as configConstant from "../config/ConfigConstant";
export default async function appInitialized() {
  const token = await AsyncStorage.getItem(Constants.kUserToken);
  if (!token && !configConstant.FAKE) {
    startLogin();
  } else {
    startMainApp();
  }
}
