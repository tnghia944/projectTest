import AppConfig from "../AppConfig";
import _ from 'lodash'
import UtilDate from "../utils/UtilDate";
export default class LogicCard {
  static _getLabel(type) {
    switch (type) {
      case AppConfig.ADDRESS:
        return "My address is ";
      case AppConfig.ACCOUNT:
        return "Hi, My name is ";
      case AppConfig.PHONE:
        return "My phone number is ";
      case AppConfig.LOCK:
        return "My password is ";
      case AppConfig.CALENDAR:
        return "My birthday is ";
      default:
        return "";
    }
  }
  static _getValueLabel(type,user={}) {
    switch (type) {
      case AppConfig.ADDRESS:
          return _.get(user,'location.street','');
      case AppConfig.ACCOUNT:
          return _.get(user,'name.last','') + ' ' + _.get(user,'name.first','');
      case AppConfig.PHONE:
          return _.get(user,'phone','');
      case AppConfig.LOCK:
          return _.get(user,'password','');
      case AppConfig.CALENDAR:
          return UtilDate.converTimetamps( _.get(user,'dob',''))
      default:
        return "";
    }
  }
  
}
