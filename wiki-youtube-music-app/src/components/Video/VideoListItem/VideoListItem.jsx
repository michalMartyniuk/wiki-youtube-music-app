import React from 'react'
import './VideoListItem.scss'

const VideoListItem = ({ video, videoSelect }) => {
  const imageUrl = video.thumbnails.medium.url
  return (
    <li onClick={() => videoSelect(video)} className="video-item">
      <img src={imageUrl} alt="" />
      <div className="video-item__text-wrapper">
        <h3 className="video-item__title">{video.title}</h3>
        <p className="video-item__description">{video.description}</p>
      </div>
    </li>
  )
}

export default VideoListItem