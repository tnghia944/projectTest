"use strict";
import { AsyncStorage} from "react-native";
import Key from './Key';
export default class StoreToken{   
    //Save
    static async setToken(strToken){
        var rs = false;
        try {
          await AsyncStorage.setItem(Key.TOKEN, strToken);
          rs = true;
        } catch (e) {
          console.log("Set exception: " + e);
        }
        return rs;
    }  
    static async getToken(){
        var rs = null;
        try {          
          let temp = await AsyncStorage.getItem(Key.TOKEN);
          rs = temp;
        } catch(e) {
          console.log("Get exception: " + e);
        }        
        return rs;
    }
    
}

