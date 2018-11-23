import React from 'react'
import './VideoDetail.scss'

const VideoDetail = ({ video }) => {

  if (!video) return null

  const url = `https://www.youtube.com/embed/${video.id}`

  return (
    <div className="video-detail">

      <h2 className="video-detail__title">{video.title}</h2>

      <iframe
        className="video-detail__video"
        src={url}
        allow="autoplay"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div >
  )
}

export default VideoDetail