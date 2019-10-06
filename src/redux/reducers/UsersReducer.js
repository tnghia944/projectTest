import ActionsType from "../../constants/ActionsType";
const initState = {
  users: [],
  item: {},
  type: ""
};

const UsersReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionsType.SUCCESS_GETLIST_USER:
      return {
        ...state,
        type: ActionsType.SUCCESS_GETLIST_USER,
        users: action.data || []
      };
    case ActionsType.FAILD_GETLIST_USER:
      return {
        ...state,
        type: ActionsType.FAILD_GETLIST_USER,
        users: []
      };
    case ActionsType.SUCCESS_GET_USER:
      return {
        ...state,
        type: ActionsType.SUCCESS_GET_USER,
        item: action.data || []
      };
    case ActionsType.FAILD_GET_USER:
      return {
        ...state,
        type: ActionsType.FAILD_GET_USER,
        item: {}
      };
  }

  return state;
};

export default UsersReducer;
