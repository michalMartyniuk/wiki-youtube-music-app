import React, { Component } from 'react'
import { connect } from 'react-redux'
import { videoListActive, wikipediaActive } from './redux/actions'

const WikipediaButton = props => (
  <button
    className="wiki-info-button"
    onClick={props.click}
  >Wikipedia info</button>
)

const VideoListButton = props => (
  <button
    className="video-list-button"
    onClick={props.click}
  >Video list</button>
)


class Buttons extends Component {
  render() {
    const {
      videoListActive,
      wikipediaActive,
    } = this.props
    return (
      <div className="switch-buttons">
        <VideoListButton click={videoListActive} />
        <WikipediaButton click={wikipediaActive} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.buttons
}

const mapDispatchToProps = dispatch => {
  return {
    videoListActive: () => dispatch(videoListActive()),
    wikipediaActive: () => dispatch(wikipediaActive())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)