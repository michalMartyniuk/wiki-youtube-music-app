import YTSearch from 'youtube-search';
import { youtubeResults } from '../../Youtube/redux/actions'
import { wikipediaSearch } from '../../Wikipedia/redux/actions'
import { INPUT_CHANGE } from './actionTypes'

export const inputChange = e => ({
  type: INPUT_CHANGE,
  payload: e.target.value
})

export const enterPressed = e => dispatch => {
  if (e.keyCode === 13) {
    dispatch(searchVideos(e.target.value))
  }
}

export const searchVideos = searchEntry => dispatch => {
  const youtube_API_KEY = "AIzaSyAEQUAqUpwWqNcNQ2Dw1iqKo3ggrVOs8Ok"
  const opts = {
    // maxResults: this.state.resultOption.value,
    maxResults: 10,
    key: youtube_API_KEY,
  };

  YTSearch(searchEntry, opts, (err, videos) => {
    if (err) return console.log(err);
    dispatch(youtubeResults(videos))
    dispatch(wikipediaSearch(videos[0].title))
  })
}
