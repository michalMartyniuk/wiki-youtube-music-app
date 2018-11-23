import React, { Component } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/Video/VideoList/VideoList';
import VideoDetail from './components/Video/VideoDetail/VideoDetail';
import WikiInfo from './components/WikiInfo/WikiInfo';
import axios from 'axios';
import Select from 'react-select';
import YTSearch from 'youtube-search';


const selectOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' }
];

const resultOptions = [
  { value: "1", label: "1" },
  { value: "5", label: "5" },
  { value: "10", label: "10" },
  { value: "15", label: "15" },
  { value: "10", label: "10" },
  { value: "20", label: "20" },
  { value: "30", label: "30" },
  { value: "40", label: "40" },
  { value: "50", label: "50" }
]

const youtube_API_KEY = "AIzaSyAEQUAqUpwWqNcNQ2Dw1iqKo3ggrVOs8Ok"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
      resultOption: "10",
      search: "Rolling Stones - Paint it Black",
      videos: [],
      videoTitle: null,
      selected: null,
      wikiInfo: {},
      videoListState: true,
      wikiInfoState: false
    }

    this.search(this.state.search)
    this.wikiSearch(this.state.search)
  }

  handleChange = (selectedOption) => {
    this.setState(
      { selectedOption },
      () => {
        if (this.state.videoTitle) {
          localStorage.setItem(this.state.videoTitle, this.state.videoTitle)
          localStorage.setItem(this.state.videoTitle + "value", this.state.selectedOption.value)
        }
      }
    );
  }

  search(searchEntry) {
    var opts = {
      maxResults: this.state.resultOption.value,
      key: youtube_API_KEY,
    };
     
    YTSearch(searchEntry, opts, (err, videos) => {
      if(err) return console.log(err);   
      
      this.setState({
          videos,
          selected: videos[0],
          videoTitle: videos[0].title,
          selectedOption: null
        },
          () => {
            this.wikiSearch(this.state.videoTitle)
          }
        )
    })
  }

  wikiSearch(searchEntry) {
    axios.get(`http://localhost:7000/${searchEntry}`)
      .then(response => {
        this.setState({
          wikiInfo: response.data.result
        })
      })
      .catch(error => console.log(error))
  }

  inputChangeHandler = (e) => {
    this.setState(
      { search: e.target.value }
    )
  }

  keyUpHandler = (e) => {
    if (e.keyCode == 13) {
      this.searchClickHandler();
    }
  }

  searchClickHandler = () => {
    this.search(this.state.search)
  }

  selectVideoHandler = selected => {
    this.setState(
      {
        selected,
        videoTitle: selected.title,
        selectedOption: null
      },
      () => {
        this.wikiSearch(this.state.videoTitle)
      }
    )
  }

  resultsHandleChange = resultOption => {
    this.setState(
      { resultOption },
      () => this.search(this.state.search)
    );
  }

  render() {
    let rate;
    let rated;
    let resultsNumber = (
      <div className="select-wrapper">
        <h2 className="select__label">Results number: </h2>
        <div className="select__select">
          <Select
            value={this.state.resultsOption}
            onChange={this.resultsHandleChange}
            options={resultOptions}
          />
        </div>
      </div>
    )
    if (!localStorage.getItem(this.state.videoTitle) && !this.state.selectedOption) {
      rate = (
        <div className="select-wrapper">
          <h2 className="select__label">Rate this video: </h2>
          <div className="select__select">
            <Select
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={selectOptions}
            />
          </div>
        </div>
      )
    } else {
      rated = (
        <div className="selected-wrapper">
          <h2 className="selected-text">
            Your rate for this video: {
              localStorage.getItem(this.state.videoTitle + "value") ?
                localStorage.getItem(this.state.videoTitle + "value") :
                this.state.selectedOption.value
            }
          </h2>
        </div>
      )
    }

    return (
      <div className="App">
        <SearchBar
          change={this.inputChangeHandler}
          click={this.searchClickHandler}
          keyUp={this.keyUpHandler}
          value={this.state.search}
        />

        <VideoDetail video={this.state.selected} />
        {this.state.selected ? <div className="switch-buttons">
          <button
            className="video-list-button"
            onClick={() => this.setState({
              videoListState: true,
              wikiInfoState: false
            })}
          >Video list</button>

          <button
            className="wiki-info-button"
            onClick={() => this.setState({
              videoListState: false,
              wikiInfoState: true
            })}
          >Wikipedia info</button>
        </div> : null}
        {rate}
        {rated}
        {resultsNumber}
        <WikiInfo
          state={this.state.wikiInfoState}
          wikiInfo={this.state.wikiInfo}
        />
        <VideoList
          videoSelect={this.selectVideoHandler}
          videos={this.state.videos}
          state={this.state.videoListState}
        />
      </div>
    );
  }
}

export default App;
