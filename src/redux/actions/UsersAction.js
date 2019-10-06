import ActionsType from '../../constants/ActionsType'
import API from '../../api'
import { requesting, finishedRequest } from './ActionGlobal';
import StatusResponse from '../../constants/StatusResponse';


function successGetList (data = {}, callbackSuccess) {
    if (callbackSuccess) {
      callbackSuccess(data)
    }
    return {
      type: ActionsType.SUCCESS_GETLIST_USER,
      data
    }
  }
  
  function faildGetList(message, callbackError) {
    if (callbackError) {
      callbackError(message)
    }
    return {
      type: ActionsType.FAILD_GETLIST_USER
    }
  }

  function successGetUser (data = {}, callbackSuccess) {
    if (callbackSuccess) {
      callbackSuccess(data)
    }
    return {
      type: ActionsType.SUCCESS_GET_USER,
      data
    }
  }
  
  function faildGetUser(message, callbackError) {
    if (callbackError) {
      callbackError(message)
    }
    return {
      type: ActionsType.FAILD_GET_USER
    }
  }
  
export function actionGetList (form,callbackSuccess, callbackError) {
    return (dispatch) => {
      dispatch(requesting());
      API.getListUser(form).then(res => {
        dispatch(finishedRequest());
        if (res.status === StatusResponse.SUCCESS) {
          return dispatch(successGetList(res.data, callbackSuccess))
        } else {
          return dispatch(faildGetList('Can not get', callbackError))
        }
      })
    }
  }
  export function actionGetUser (callbackSuccess, callbackError) {
    return (dispatch) => {
      dispatch(requesting());
      API.getUser().then(res => {
        dispatch(finishedRequest());
        if (res.status === StatusResponse.SUCCESS) {
          return dispatch(successGetUser(res.data, callbackSuccess))
        } else {
          return dispatch(faildGetUser('Can not get', callbackError))
        }
      })
    }
  }
  
  




