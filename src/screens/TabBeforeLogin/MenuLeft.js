import React, {PureComponent} from 'react';
import { StyleSheet, BackHandler} from 'react-native';
import {HEIGHT_STATUS_BAR} from '../../utils/deviceInfo'
import AppNavigate from '../../AppNavigate';
import _ from 'lodash';
import { SafeAreaView } from 'react-navigation';
import color from '../../utils/color';
export default class MenuLeft extends PureComponent{
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);        
  }

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress',this.goBack);  
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress',this.goBack);  
  }
  goBack() {
    if(this.props.navigation && this.props.navigation.state && this.props.navigation.state.isDrawerOpen){
        AppNavigate.closeMenuLeft(this.props.navigation);
        return true;//lock back hardware
    }else{
        return false;
    }    
  }
 
  render() {
    return (
        <SafeAreaView style={{flex: 1}} forceInset={{ top: 'never', horizontal: 'never' }}>
                           
        </SafeAreaView>
    );
}
}


// 44 - on iPhoneX
// 20 - on iOS device
// X - on Android platfrom (runtime value)
const heightTop = 160 + HEIGHT_STATUS_BAR;
const styles = StyleSheet.create({
    buttonTextReg: {
        color: color.active
      },
    buttonReg: {
        flex: 1,
        backgroundColor: "#ffffff",
        borderColor: "#ffffff"
      },
    buttonTextLogin: {
        color: "#ffffff"
      },
    buttonLogin: {
        flex: 1,
        backgroundColor: "transparent",
        borderColor: "#ffffff"
      },
    buttonLend: {
        height: 42,
        flexDirection: "row",
        marginTop: 12,
        marginLeft: 12,
        marginRight: 12,
        borderColor: '#ffffff',
        borderRadius: 2,
        overflow: 'hidden'
    },
    iconAvatar:{
        width: 85,
        height: 85
    },
    backgroundTop:{
        height: heightTop,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewLine:{
        flex:1,
        height: 20,
        backgroundColor: '#F4F4F4'
    },
    viewBottom:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
        marginBottom: 10
    },
    imageBottom:{
        width: 70,
        height: 70
    },
    textNameApp:{        
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textVersion:{
        fontSize: 11,
        color: "#777e84",
        marginTop: 5
    }
});
