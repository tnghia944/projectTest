"use strict";
import {  createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabNavigatorConfig from "../TabBase/TabNavigatorConfig";
import { getBottomSpace } from 'react-native-iphone-x-helper';
import AllScreenBeforeLogin from "./AllScreenBeforeLogin";

const StackTabA = createStackNavigator(
  AllScreenBeforeLogin,
  {
    initialRouteName: "ScreenLogin",
    headerMode: "none",
    transitionConfig: (transitionProps) => ({
      containerStyle: {
        paddingBottom: transitionProps.index === 0 ? 0 : getBottomSpace()
      }
    })
  }
);
//Hide tab: https://reactnavigation.org/docs/en/navigation-options-resolution.html#a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens
StackTabA.navigationOptions = ({ navigation }) => {
  //let tabBarVisible = navigation.state.index > 0 ? false : true;
  let tabBarVisible = false;
  //Bat buoc phai ten bien tabBarVisible
  return { tabBarVisible };
};

const RouteConfigs = {
  Tab1: {
    screen: StackTabA,
    navigationOptions: {
      tabBarLabel: 'Tab1Before',
    }
  }
};
const tabsBeforeLogin = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);
const containerTabsBeforeLogin = createAppContainer(tabsBeforeLogin);
export default containerTabsBeforeLogin;


