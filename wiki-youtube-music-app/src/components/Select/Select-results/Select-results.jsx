import React from 'react';
import './Select-results.scss';
import Select from 'react-select';

const SelectResults = props => {

  const resultOptions = [
    { value: "1", label: "1" },
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "15", label: "15" },
    { value: "20", label: "20" },
    { value: "25", label: "25" },
    { value: "30", label: "30" },
    { value: "40", label: "40" },
    { value: "50", label: "50" }
  ]


  return (
    <div className="select">
      <h2 className="select__label">Results number: </h2>
      <div className="select__select">
        <Select
          value={props.value}
          onChange={props.onChange}
          options={resultOptions}
        />
      </div>
    </div>
  )
}

export { SelectResults }