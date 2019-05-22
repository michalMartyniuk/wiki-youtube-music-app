import React from 'react'
import './Wikipedia.scss'
import { Component } from 'react'
import { connect } from 'react-redux'

class Wikipedia extends Component {

  render() {
    const { informations, wikipediaState } = this.props
    if (!wikipediaState) {
      return null
    }

    if (!informations) {
      return null
    }

    let title = informations.songTitle ?
      <div className="wiki-info__wrapper">
        <span className="wiki-info__label">Title: </span>
        <span className="wiki-info__text">{informations.songTitle}</span>
      </div> : null
    let author = informations.author ?
      <div className="wiki-info__wrapper">
        <span className="wiki-info__label">Author: </span>
        <span className="wiki-info__text">{informations.author}</span>
      </div> : null
    let album = informations.album ?
      <div className="wiki-info__wrapper">
        <span className="wiki-info__label">Album: </span>
        <span className="wiki-info__text">{informations.album}</span>
      </div> : null
    let genre = informations.genre ?
      <div className="wiki-info__wrapper">
        <span className="wiki-info__label">Genre: </span>
        <span className="wiki-info__text">{informations.genre}</span>
      </div> : null
    let label = informations.label ?
      <div className="wiki-info__wrapper">
        <span className="wiki-info__label">Label: </span>
        <span className="wiki-info__text">{informations.label}</span>
      </div> : null
    let length = informations.length ?
      <div className="wiki-info__wrapper">
        <span className="wiki-info__label">Length: </span>
        <span className="wiki-info__minutes">{informations.length.min}:</span>
        <span className="wiki-info__seconds">{informations.length.sec}</span>
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
}

const mapStateToProps = state => {
  return {
    ...state.wikipedia,
    ...state.buttons
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wikipedia)
