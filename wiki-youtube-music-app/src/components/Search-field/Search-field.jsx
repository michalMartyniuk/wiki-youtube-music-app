import React, { Component } from 'react';
import "./Search-field.scss";
import { connect } from 'react-redux';
import { inputChange, enterPressed, searchVideos } from './redux/actions';

class Search extends Component {
    render() {
        const { value, enterPressed, inputChange, searchVideos } = this.props
        return (
            <div className="search-bar">
                <input
                    type="text"
                    className="search-bar__input"
                    onChange={inputChange}
                    value={value}
                    onKeyUp={enterPressed}
                />
                <button
                    className="search-bar__button"
                    onClick={() => searchVideos(value)}
                >Search</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state.search;
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange: e => dispatch(inputChange(e)),
        enterPressed: e => dispatch(enterPressed(e)),
        searchVideos: text => dispatch(searchVideos(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
