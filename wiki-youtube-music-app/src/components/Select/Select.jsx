import React, { Component } from 'react';
import './Select.scss';
import { SelectResults } from './Select-results/Select-results';
import { SelectRate } from './Select-rate/Select-rate';

class Select extends Component {

  state = {
    selectedOption: { value: "0" },
    resultOption: { value: "5" }
  }

  resultsOnChange = resultOption => {
    this.setState(
      { resultOption },
    );
  }

  rateOnChange = (selectedOption) => {
    this.setState(
      { selectedOption }
    )
  }

  render() {
    return (
      <div className="select-wrapper">
        <SelectResults
          value={this.state.resultOption.value}
          onChange={this.resultsOnChange}
        />
        <SelectRate
          value={this.state.selectedOption.value}
          onChange={this.rateOnChange}
        />
      </div>
    )
  }
}

export { Select };

