import StoreLogin from './storage/StoreLogin';
import { DrawerActions } from 'react-navigation';
import { NavigationActions } from 'react-navigation';

export default class AppNavigate{
    static next(navigation, keyScreen, objectParams = {}){        
        navigation.navigate(keyScreen, objectParams);
    }    
    static back(navigation){
        navigation.goBack();
    }
    static changeTab(navigation, tabName, screenName ) {
        const navigateAction = NavigationActions.navigate({
            routeName: tabName,
            params: {},
            // navigate can have a nested navigate action that will be run inside the child router
            action: NavigationActions.navigate({ routeName: screenName }),
          });
        navigation.dispatch(navigateAction);
    }
    static backNull(navigation){
        navigation.goBack(null);
        //https://reactnavigation.org/docs/en/navigation-prop.html#goback-close-the-active-screen-and-move-back
    }
    static async logout(navigation){
        await StoreLogin.logOut();
        navigation.navigate('ScreenTabsBeforeLoginMain');
    }
    static async logoutForce(navigation){
        await StoreLogin.logOut();
        navigation.dispatch(NavigationActions.navigate({routeName: 'ScreenTabsBeforeLoginMain'}));        
    }
    // this.props.screenProps.navigation.dispatch(DrawerActions.openDrawer());
    static openMenuLeft(navigation){
        navigation.dispatch(DrawerActions.openDrawer());
    }
    static closeMenuLeft(navigation){
        navigation.dispatch(DrawerActions.closeDrawer());
    }
    static popToHome(navigation){
        if(global.currentTab == 'Tab1'){
            navigation.navigate('ScreenHome');
          }else{
            if(global.currentTab == 'Tab2'){
                navigation.navigate('ScreenOrders');
            }else{
                if(global.currentTab == 'Tab3'){
                    navigation.navigate('ScreenShop');
                }else{
                    if(global.currentTab == 'Tab4'){
                        navigation.navigate('ScreenMaps');
                    }
                    else{
                        navigation.navigate('ScreenWalletHistory');
                    }
                }
            }
        }
    }
}
