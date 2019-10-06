import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import SwitchNavigator from "./screens";
console.disableYellowBox = false;
function getActiveRouteName(navigationState){
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
      return getActiveRouteName(route);
    }
    return route.routeName;
}
export default class index extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <View style={styles.contener}>
          <SwitchNavigator
            ref={nav => {
              this.navigator = nav;
            }}
            onNavigationStateChange={(prevState, currentState, action) => {
              const currentScreen = getActiveRouteName(currentState);
              const prevScreen = getActiveRouteName(prevState);
              if (prevScreen !== currentScreen) {
                console.log("Current Screen " + currentScreen);
              }
            }}
          />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  contener: {
    flex: 1
  }
});
