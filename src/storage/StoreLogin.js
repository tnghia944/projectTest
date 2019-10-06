"use strict";
import { AsyncStorage} from "react-native";
import Key from './Key';
export default class StoreLogin {   
    //Save
    static async setLogin(object){
        var rs = false;
        try {
          var strObject = JSON.stringify(object);
          await AsyncStorage.setItem(Key.LOGIN, strObject);
          rs = true;
        } catch (e) {
          console.log("Set Login exception: " + e);
        }
        return rs;
    }
    static async getLogin(){
      var rs = null;
      try {          
        let temp = await AsyncStorage.getItem(Key.LOGIN);
        rs = JSON.parse(temp);
      } catch(e) {
        console.log("Get Login exception: " + e);
      }        
      return rs;
  }    
    //Save
    static async logOut(){
      var rs = false;
      try {
        await AsyncStorage.removeItem(Key.LOGIN);
        await AsyncStorage.removeItem(Key.TOKEN);
        await AsyncStorage.removeItem(Key.CART);   
      } catch (e) {
        console.log("Set Log out exception: " + e);
      }
      return rs;
  }
    static async getToken() {
      var rs = null;
      try {
        let temp = await AsyncStorage.getItem(Key.TOKEN);
        rs = JSON.parse(temp);
        if (rs != null && rs.data) {
          return rs.data.token_login;
        }
      } catch (e) {
        console.log("Get Login exception: " + e);
      }
      return rs;
    }
}

