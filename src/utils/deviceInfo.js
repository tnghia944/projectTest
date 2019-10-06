import { Dimensions, Platform, PixelRatio, NetInfo } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import DeviceInfo from 'react-native-device-info';
export const HEADER_HEIGHT = Platform.OS === "ios" ? 64 : 50; // scroll end to top
export const HEIGHT_STATUS_BAR = getStatusBarHeight();
export const HEIGHT_DEFAULT_NAVBAR = 60;
export const PIXEL_RATIO = PixelRatio.get();
import _ from 'lodash'

let widthDP = Dimensions.get("screen").width;
let heightDP = Dimensions.get("screen").height;
let widthPixel = PixelRatio.getPixelSizeForLayoutSize(widthDP);
let heightPixel = PixelRatio.getPixelSizeForLayoutSize(heightDP);
let pixelPerInch = 0;
let inch = 0;
if( Platform.OS === "ios"){
  // IOS is PPI = Pixel Per Inch
  pixelPerInch = (Math.sqrt(widthDP * widthDP + heightDP * heightDP) / PixelRatio.get());
  let pixelPerDevice = Math.sqrt(widthPixel * widthPixel + heightPixel * heightPixel);
  inch = pixelPerDevice / pixelPerInch;
}else{
  // Android is DPI = Dot Per Inch (Screen Density)
  inch = Math.sqrt(widthDP * widthDP + heightDP * heightDP) / (160);
  pixelPerInch = (Math.sqrt(widthPixel * widthPixel + heightPixel * heightPixel) / inch);
}
export const SCREEN = {
  width: widthDP,
  height: Dimensions.get("window").height,
  height_full: heightDP,
  width_pixel: widthPixel.toFixed(0),
  height_pixel: heightPixel.toFixed(0),
  pixel_ratio: PixelRatio.get(),
  pixel_per_inch: pixelPerInch.toFixed(0),
  inch: inch.toFixed(1)
}
// get percent of width screen -> return pt //  0< percent <=100
export const width = percent => {
  return (SCREEN.width * percent) / 100;
};

export const height = percent => {
  return (SCREEN.height * percent) / 100;
};
export const isConnected = () => {
  return global.isConnected ? global.isConnected : false;
};

function getSystemVersionFirstNumber(version){
  try{
    if( !_.isNil(version)){
      let temp = parseInt(version);
      if(!_.isNil(temp) && !isNaN(temp)){
        return temp;
      }
    }
  }catch(e){
  }
  return 0;
};
export default UtilDeviceInfo = {
  device_token: null,
  version_app: DeviceInfo.getVersion(),
  version_os: DeviceInfo.getSystemVersion(),
  name_os: DeviceInfo.getSystemName(),  
  device_id: DeviceInfo.getUniqueID(),
  version_os_first_number: getSystemVersionFirstNumber(DeviceInfo.getSystemVersion()),  
  width_pixel: widthPixel.toFixed(0),
  height_pixel: heightPixel.toFixed(0),
  pixel_ratio: PixelRatio.get(),
  pixel_per_inch: pixelPerInch.toFixed(0),
  inch: inch.toFixed(1)
}
NetInfo.isConnected.addEventListener('connectionChange', isConnected => {
    global.isConnected = isConnected;
});

