import ActionTypes from '../../constants/ActionsType'
import API from '../../api'

export function updateTabBottom (tabName) {
  return {
    type: ActionTypes.UPDATE_TAB_BOTTOM,
    tabName:tabName
  }
}




