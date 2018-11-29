import React from 'react';
import './Select-rate.scss';
import Select from 'react-select';

const SelectRate = props => {

  const rateOptions = [
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


  return (
    <div className="select">
      <h2 className="select__label">Rate this video: </h2>
      <div className="select__select">
        <Select
          value={props.value}
          onChange={props.onChange}
          options={rateOptions}
        />
      </div>
    </div>
  )
}

export { SelectRate }