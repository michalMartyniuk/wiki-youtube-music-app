import React from 'react'
import './VideoList.scss'
import VideoListItem from '../VideoListItem/VideoListItem'

const VideoList = props => {
  if (!props.state) {
    return null
  }
  const videoItems = props.videos.map(video => {
    return <VideoListItem
      key={video.id}
      video={video}
      videoSelect={props.videoSelect}
    />
  })
  return (
    <ul className="video-list">
      {videoItems}
    </ul>
  )
}

export default VideoList