import { INPUT_CHANGE } from './actionTypes'

export const searchReducer = (state = {
  value: "Rolling Stones - Paint it Black",
}, action) => {
  switch (action.type) {

    case INPUT_CHANGE:
      return { ...state, value: action.payload }

    default:
      return state
  }
}