import { create } from 'apisauce'
import Appconfig from '../AppConfig'
import url from './url'
import config from '../config'
let token = ''
export let api = create({
    baseURL: config.baseURL,
    headers: { Accept: 'application/json' },
    timeout: Appconfig.TIME_OUT_REQUEST
})
const setUserToken = userToken => {
    token = userToken
    api.setHeaders({ Accept: 'application/json', authorization: token })
}
const showApi = (api,slug) => {
    console.log('------CONFIG API -------' + JSON.stringify(api,undefined,3));
    console.log('----- URL API-------' + JSON.stringify(slug,undefined,3));
}

const getToken = form => {
    showApi(api,url.GET_TOKEN);
    return api.post(url.GET_TOKEN, form)
}

const getListUser = (form) => {
    showApi(api,url.GET_LIST_USER);
    return api.get(url.GET_LIST_USER,form)
}
const getUser = () => {
    showApi(api,url.GET_USER);
    return api.get(url.GET_USER)
}

export default {
    getToken,
    getListUser,
    setUserToken,
    getUser
}