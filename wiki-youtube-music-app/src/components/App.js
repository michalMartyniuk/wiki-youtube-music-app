import React, { Component } from 'react'
import './App.scss'
import SearchField from './Search-field/Search-field'
import { Select } from './Select/Select'
import VideoList from './Youtube/Video-list/Video-list'
import VideoDetail from './Youtube/Video-detail/Video-detail'
import Wikipedia from './Wikipedia/Wikipedia'
import Buttons from './Buttons/Buttons'
import { connect } from 'react-redux'
import { searchVideos } from './Search-field/redux/actions'
import { wikipediaSearch } from './Wikipedia/redux/actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.searchVideos(this.props.search.value)
  }

  render() {
    console.log(this.props)
    const { videoSelected } = this.props.youtube
    const { wikipediaState, videoListState } = this.props.buttons
    return (
      <div className="App">
        <SearchField />
        <VideoDetail video={videoSelected} />
        <Buttons />
        <Select />
        <Wikipedia />
        <VideoList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    searchVideos: searchEntry => dispatch(searchVideos(searchEntry)),
    wikipediaSearch: searchEntry => dispatch(wikipediaSearch(searchEntry))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
