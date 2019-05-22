import React, { Component } from 'react'
import './Video-list.scss'
import VideoListItem from '../Video-item/Video-item'
import { connect } from 'react-redux'
import { videoSelect } from '../redux/actions'

class VideoList extends Component {
  render() {
    console.log(this.props)
    const { videos, videoSelect, videoListState } = this.props
    if (!videoListState) {
      return null
    }

    if (!this.props.videos) {
      return null
    }
    const videoItems = videos.map(video => {
      return <VideoListItem
        key={video.id}
        video={video}
        videoSelect={videoSelect}
      />
    })
    return (
      <ul className="video-list">
        {videoItems}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.youtube,
    ...state.buttons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    videoSelect: video => dispatch(videoSelect(video))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoList)