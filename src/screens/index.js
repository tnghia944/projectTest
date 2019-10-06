"use strict";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from "react-navigation-drawer";
//Screens
import ScreenAuthLoading from "./ScreenAuthLoading";
import ScreenTabsBeforeLogin from "./TabBeforeLogin";
// import ScreenTabAfterLogin from "./TabAfterLogin";
//Menu
import MenuLeftBeforeLogin from "./TabBeforeLogin/MenuLeft";
import MenuLeft from './TabAfterLogin/MenuLeft';
import { getBottomSpace } from 'react-native-iphone-x-helper';

/*
* Tab Before Login
*/
const StackBeforeLogin = createStackNavigator(
  {
    ScreenTabsBeforeLogin: { screen: ScreenTabsBeforeLogin }
  },
  {
    initialRouteName: "ScreenTabsBeforeLogin",
    headerMode: "none",
    transitionConfig: transitionProps => ({
      containerStyle: {
        paddingBottom: transitionProps.index === 0 ? 0 : getBottomSpace()
      }
    })
  }
);


/*
* Tab After Login
const StackAfterLogin =  createStackNavigator({
  ScreenTabAfterLogin: {screen: ScreenTabAfterLogin},
},
{
  initialRouteName: 'ScreenTabAfterLogin',
  headerMode: 'none',
  transitionConfig: (transitionProps) => ({
    containerStyle: {
      paddingBottom: transitionProps.index === 0 ? 0 : getBottomSpace()
    }
  })
});
*/

/*
* * Drawer Menu Before Login
const DrawerStackBeforeLogin = createDrawerNavigator(
  {
    StackBeforeLogin: { screen: StackBeforeLogin }
  },
  {
    initialRouteName: "StackBeforeLogin",
    drawerLockMode: "locked-closed",
    contentComponent: MenuLeftBeforeLogin
  }
);
*/

/*
* Drawer Menu After Login
const DrawerStackAfterLogin = createDrawerNavigator(
  {
    StackAfterLogin: {screen: StackAfterLogin}
  },
  { 
  initialRouteName: 'StackAfterLogin',
  drawerLockMode: 'locked-closed',
  contentComponent: MenuLeft
});
*/


/*
* Root
*/
const mainNavigation = createSwitchNavigator(
  {
    ScreenAuthLoadingMain: { screen: ScreenAuthLoading },
    ScreenTabsBeforeLoginMain: { screen: StackBeforeLogin },
    // ScreenTabAfterLoginMain: { screen: StackAfterLogin },
    // ScreenTabsBeforeLoginMain: { screen: DrawerStackBeforeLogin },
    // ScreenTabAfterLoginMain: { screen: DrawerStackAfterLogin }
  },
  {
    initialRouteName: "ScreenAuthLoadingMain",
    headerMode: "none"
  }
);
const appContainer = createAppContainer(mainNavigation);
export default appContainer;


