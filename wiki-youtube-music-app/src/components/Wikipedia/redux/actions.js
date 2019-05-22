import axios from 'axios'
import { WIKIPEDIA_RESULTS, WIKIPEDIA_ERROR } from './actionTypes'

export const wikipediaSearch = searchEntry => dispatch => {
  axios.get(`http://localhost:7000/${searchEntry}`)
    .then(response => {
      console.log(response.data.result)
      dispatch({
        type: WIKIPEDIA_RESULTS,
        payload: response.data.result
      })
    })
    .catch(error => {
      dispatch({
        type: WIKIPEDIA_ERROR,
        payload: error
      })
    })
}