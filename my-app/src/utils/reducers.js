import { useReducer } from "react";
import { UPDATE_USERS, REMOVE_POST } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case REMOVE_POST:
      let newState = state.posts.filter((post) => {
        return post._id !== action._id;
      });

      return {
        ...state,
        postOpen: newState.length > 0,
        post: newState,
      };
    default:
      return state;
  }
};

export function useUserReducer(initialState) {
  return useReducer(reducer, initialState);
}
