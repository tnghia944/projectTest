"use strict";
import TabBarComponent from "./TabBarComponent";
import _ from 'lodash';
const colorBackgroundTab = "#ffffff";
const activeBackgroundColor = "#ffffff";
export const colorActive = "#c21823";
export const colorActiveTab1 = "rgb(27, 42, 56)";
const colorInActive = "#9b9b9b";
const colorLine = "#a8a8a8a9";

global.currentTab = _.isNil(global.currentTab) ? "Tab1" : global.currentTab;
const TabNavigatorConfig = {
  tabBarComponent: TabBarComponent,
  initialRouteName: global.currentTab,
  tabBarPosition: "bottom", // or top,
  swipeEnabled: false, //whether to allow swiping between tabs
  animationEnabled: false, //whether to animate when changing tabs
  lazyLoad: false,
  tabBarOptions: {
    allowFontScaling: false,
    showLabel: true,
    upperCaseLabel: false,
    scrollEnabled: false,
    activeTintColor: colorActive,
    inactiveTintColor: colorInActive,
    inactiveBackgroundColor: colorBackgroundTab, //only for ios
    activeBackgroundColor: activeBackgroundColor, // only for ios,
    showIcon: true,
    style: {
      margin: 0,
      padding: 0,
      backgroundColor: colorBackgroundTab,
      borderTopWidth: 1, // line top
      borderTopColor: colorLine // color top line
    },
    indicatorStyle: {
      opacity: 1 // disable bottom line of android
      //borderBottomColor: "#353539",
      //borderBottomWidth: 2,
    },
    labelStyle: {
      fontSize: 10,
      margin: 0,
      padding: 0
    },
    iconStyle: {
      margin: 0,
      padding: 0
    },
    tabStyle: {
      margin: 0,
      padding: 0
    }
  },
  navigationOptions: {
    tabBarOnPress: ({ navigation, defaultHandler }) => {
      // perform your logic here
      // this is mandatory to perform the actual switch
      // don't call this if you want to prevent focus
      global.currentTab = navigation.state.key;
      defaultHandler();
      console.log('--------Current Tab ---------- ' + global.currentTab);
    }
  }
};
export default TabNavigatorConfig;
