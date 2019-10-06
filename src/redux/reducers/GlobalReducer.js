import ActionsType from '../../constants/ActionsType'

const defaultState = {
  loading: false,
}
const GlobalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionsType.REQUESTING:
      return {
        ... state,
        loading: true,
      }
     case ActionsType.FINISHED_REQUEST:
      return {
        ... state,
        loading: false
      }
      default:
      return state
  }
}

export default GlobalReducer
