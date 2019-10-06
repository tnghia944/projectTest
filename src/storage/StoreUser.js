"use strict";
import { AsyncStorage} from "react-native";
import Key from './Key';
export default class StoreUser{   
    //Save
    static async setUsers(users = []){
        var rs = false;
        try {
          await AsyncStorage.setItem(Key.USERS, JSON.stringify({users:users}) );
          rs = true;
        } catch (e) {
        }
        return rs;
    }  
    static async getUsers(){
        var rs = null;
        try {          
          let temp = await AsyncStorage.getItem(Key.USERS) ;
          rs = JSON.parse(temp);
        } catch(e) {
          console.log("Get exception: " + e);
        }        
        return rs;
    }
    
}


