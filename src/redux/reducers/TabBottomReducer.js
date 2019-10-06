import ActionsType from '../../constants/ActionsType'
import AppConfig from '../../AppConfig'
const initState = {
   tabName:AppConfig.ADDRESS
}

const TabBottomReducer = (state = initState , action) => {
    switch(action.type){
        case ActionsType.UPDATE_TAB_BOTTOM:
            return {
                ...state,
                tabName:action.tabName || AppConfig.ADDRESS
            }
        }
    return state;
}

export default TabBottomReducer