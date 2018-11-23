import React from 'react'
import './WikiInfo.scss'

const WikiInfo = ({ state, wikiInfo }) => {
  if (!state) {
    return null
  }

  if (!wikiInfo) {
    return null
  }

  let title = wikiInfo.songTitle ?
    <div className="wiki-info__wrapper">
      <span className="wiki-info__label">Title: </span>
      <span className="wiki-info__text">{wikiInfo.songTitle}</span>
    </div> : null
  let author = wikiInfo.author ?
    <div className="wiki-info__wrapper">
      <span className="wiki-info__label">Author: </span>
      <span className="wiki-info__text">{wikiInfo.author}</span>
    </div> : null
  let album = wikiInfo.album ?
    <div className="wiki-info__wrapper">
      <span className="wiki-info__label">Album: </span>
      <span className="wiki-info__text">{wikiInfo.album}</span>
    </div> : null
  let genre = wikiInfo.genre ?
    <div className="wiki-info__wrapper">
      <span className="wiki-info__label">Genre: </span>
      <span className="wiki-info__text">{wikiInfo.genre}</span>
    </div> : null
  let label = wikiInfo.label ?
    <div className="wiki-info__wrapper">
      <span className="wiki-info__label">Label: </span>
      <span className="wiki-info__text">{wikiInfo.label}</span>
    </div> : null
  let length = wikiInfo.length ?
    <div className="wiki-info__wrapper">
      <span className="wiki-info__label">Length: </span>
      <span className="wiki-info__minutes">{wikiInfo.length.min}:</span>
      <span className="wiki-info__seconds">{wikiInfo.length.sec}</span>
    </div> : null




  return (
    <div className="wiki-info">
      {title}
      {author}
      {album}
      {genre}
      {label}
      {length}
      <p className="wiki-info__description"></p>
    </div>
  )
}

export default WikiInfo
