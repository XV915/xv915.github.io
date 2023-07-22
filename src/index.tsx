import { AppRegistry, Platform } from "react-native";
import App from "./App";

AppRegistry.registerComponent("xv915_homepage", () => App);
if (Platform.OS === "web") {
  AppRegistry.runApplication("xv915_homepage", {
    rootTag: document.getElementById("root"),
  });
}
