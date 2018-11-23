import React, { Component } from 'react';
import "./SearchBar.scss";

const SearchBar = props => (
    <div className="search-bar">
        <input
            type="text"
            className="search-bar__input"
            onChange={props.change}
            value={props.value}
            onKeyUp={props.keyUp}
        />
        <button
            className="search-bar__button"
            onClick={props.click}
        >Search</button>
    </div>
)

export default SearchBar;
