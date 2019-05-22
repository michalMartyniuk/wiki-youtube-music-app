import { VIDEO_LIST_ACTIVE, WIKIPEDIA_ACTIVE } from './actionTypes'

export const buttonsReducer = (
  state = {
    videoListState: false,
    wikipediaState: true
  },
  action) => {
  switch (action.type) {
    case VIDEO_LIST_ACTIVE:
      return {
        ...state,
        videoListState: true,
        wikipediaState: false
      }
    case WIKIPEDIA_ACTIVE:
      return {
        ...state,
        videoListState: false,
        wikipediaState: true
      }
    default:
      return state
  }
}