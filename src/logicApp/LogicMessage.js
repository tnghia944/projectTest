import AppConfig from "../AppConfig";

export default class LogicMessage {
    /*
        status : 200 // fetch data thanh cong
        response = {
            error: undefined, // action thanh cong
            message: '',
            data: {
                ...
            }        
        }
    */
   static isSuccess(objResponse, isShowMessage = true){
        let rs = false;
        try{
            let data = objResponse || {};
                if( data.error ){
                        if(isShowMessage)
                            alert(data.message || '');                 
                }else
                    rs = true;
        }catch(e){
        }
        return rs;
    }
    static isSuccessImage(objResponse, isShowMessage = true){
        let rs = false;
        try{
            if( !objResponse.error ){
                   rs = true;
            }else{
                if(isShowMessage){
                }
            }
        }catch(e){
        }
        return rs;
    }
    static isSuccessUploadImage(objResponse, isShowMessage = true){
        let rs = false;
        try{
            if(objResponse.code == AppConfig.UPLOAD_IMAGE_SUCCESS){
                rs = true;
            }else{
                if(isShowMessage ){
                }
            }
        }catch(e){
        }
        return rs;
    }

   
}