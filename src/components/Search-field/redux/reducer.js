import { INPUT_CHANGE } from './actionTypes'

export const searchReducer = (state = {
  value: "",
}, action) => {
  switch (action.type) {

    case INPUT_CHANGE:
      return { ...state, value: action.payload }

    default:
      return state
  }
}