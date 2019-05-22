import { WIKIPEDIA_RESULTS, WIKIPEDIA_ERROR } from './actionTypes'

export const wikipediaReducer = (state = {
  informations: {},
  error: {}
}, action) => {
  switch (action.type) {
    case WIKIPEDIA_RESULTS:
      return { ...state, informations: action.payload }

    case WIKIPEDIA_ERROR:
      return { ...state, error: action.payload }

    default:
      return state
  }
}