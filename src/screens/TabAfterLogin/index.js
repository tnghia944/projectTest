"use strict";
import { createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TabNavigatorConfig, { colorActiveTab1 } from "../TabBase/TabNavigatorConfig";
import AllScreenAfterLogin from './AllScreenAfterLogin';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const StackTabA = createStackNavigator(
  AllScreenAfterLogin,
  {
     initialRouteName: "ScreenHome",
    headerMode: "none",
    transitionConfig: (transitionProps) => ({
      containerStyle: {
        paddingBottom: transitionProps.index === 0 ? 0 : getBottomSpace()
      }
    })
  }
);
StackTabA.navigationOptions = ({ navigation }) => {
  let tabBarVisible = navigation.state.index > 0 ? false : true;
  //let tabBarVisible = false;
  //Bat buoc phai ten bien tabBarVisible
  return { tabBarVisible };
};


const StackTabB = createStackNavigator(
  AllScreenAfterLogin,
  {
    initialRouteName: "ScreenOrders",
    headerMode: "none",
    transitionConfig: (transitionProps) => ({
      containerStyle: {
        paddingBottom: transitionProps.index === 0 ? 0 : getBottomSpace()
      }
    })
  }
);
StackTabB.navigationOptions = ({ navigation }) => {
  let tabBarVisible = navigation.state.index > 0 ? false : true;
  //let tabBarVisible = false;
  //Bat buoc phai ten bien tabBarVisible
  return { tabBarVisible };
};

const StackTabC = createStackNavigator(
  AllScreenAfterLogin,
  {
    initialRouteName: "ScreenShop",
    headerMode: "none",
    transitionConfig: (transitionProps) => ({
      containerStyle: {
        paddingBottom: transitionProps.index === 0 ? 0 : getBottomSpace()
      }
    })
  }
);
StackTabC.navigationOptions = ({ navigation }) => {
  let tabBarVisible = navigation.state.index > 0 ? false : true;
  //let tabBarVisible = false;
  //Bat buoc phai ten bien tabBarVisible
  return { tabBarVisible };
};



const StackTabD = createStackNavigator(
  AllScreenAfterLogin,
  {
    initialRouteName: "ScreenMaps",
    headerMode: "none",
    transitionConfig: (transitionProps) => ({
      containerStyle: {
        paddingBottom: transitionProps.index === 0 ? 0 : getBottomSpace()
      }
    })
  }
);
StackTabD.navigationOptions = ({ navigation }) => {
  let tabBarVisible = navigation.state.index > 0 ? false : true;
  //let tabBarVisible = false;
  //Bat buoc phai ten bien tabBarVisible
  return { tabBarVisible };
};

const RouteConfigs = {
  Tab1: {
    screen: StackTabA,
    navigationOptions: {
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        global.currentTab = navigation.state.key;
        defaultHandler();
      },
      tabBarLabel: "home",
      tabBarOptions: { activeTintColor: colorActiveTab1},
    }
  },
  Tab2: {
    screen: StackTabB,
    navigationOptions: {
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        global.currentTab = navigation.state.key;
        defaultHandler();
      },
      tabBarLabel: "Orders",
      tabBarOptions: { activeTintColor: colorActiveTab1},
 
    }
  },
  Tab3: {
    screen: StackTabC,
    navigationOptions: {
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        global.currentTab = navigation.state.key;
        defaultHandler();
      },
      tabBarLabel: "Store",
      tabBarOptions: { activeTintColor: colorActiveTab1},
  
    }
  },
  Tab4: {
    screen: StackTabD,
    navigationOptions: {
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        global.currentTab = navigation.state.key;
        defaultHandler();
      },
      tabBarLabel: "Maps",
      tabBarOptions: { activeTintColor: colorActiveTab1},
   
    }
  }
};
const TabAfterLogin = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);
const containerTabAfterLogin = createAppContainer(TabAfterLogin);
export default containerTabAfterLogin;

