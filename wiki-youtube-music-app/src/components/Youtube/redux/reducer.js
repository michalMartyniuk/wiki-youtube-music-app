import { YOUTUBE_RESULTS, VIDEO_SELECT } from './actionTypes'

export const youtubeReducer = (state = {
  videos: [],
  videoSelected: null,
}, action) => {
  switch (action.type) {

    case YOUTUBE_RESULTS:
      const videos = action.payload
      return {
        ...state,
        videos,
        videoSelected: videos[0],
      }

    case VIDEO_SELECT:
      const video = action.payload
      return {
        ...state,
        videoSelected: video,
      }

    default:
      return state
  }
}