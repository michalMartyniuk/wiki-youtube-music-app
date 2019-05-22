import { YOUTUBE_RESULTS, VIDEO_SELECT } from './actionTypes'
import { wikipediaSearch } from '../../Wikipedia/redux/actions'

export const youtubeResults = videos => ({
  type: YOUTUBE_RESULTS,
  payload: videos
})

export const videoSelect = video => dispatch => {
  dispatch(wikipediaSearch(video.title))
  dispatch({
    type: VIDEO_SELECT,
    payload: video
  })
}