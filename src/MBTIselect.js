import React, { useState } from 'react';

const optionGroups = [
  [
    { value: 'E', label: '외향형' },
    { value: 'I', label: '내향형' },
  ],
  [
    { value: 'S', label: '감각형' },
    { value: 'N', label: '직관형' },
  ],
  [
    { value: 'T', label: '사고형' },
    { value: 'F', label: '감정형' },
  ],
  [
    { value: 'J', label: '판단형' },
    { value: 'P', label: '인식형' },
  ],
];

function MBTIOption({ selected, label, value, onClick }) {
  const optionStyle = {
    width: '100px',
    height: '40px',
    border: '2px solid #e7ebf2',
    borderRadius: '16px',
    padding: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#8892a6',
    backgroundColor: selected ? 'black' : 'transparent',
    cursor: 'pointer',
  };

  const charStyle = {
    color: selected ? 'white' : 'black',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  return (
    <div style={optionStyle} onClick={onClick}>
      <span style={charStyle}>{value}</span>
      {label}
    </div>
  );
}


export default function MBTISelect({ value = 'ESTJ', onChange }) {
  const [selectedValues, setSelectedValues] = useState(value);

  const handleChangeAt = (val, position) => {
    setSelectedValues((prevValues) => {
      const nextValues = [...prevValues]; 
      nextValues[position] = val; 
      return nextValues;
    });
    onChange(selectedValues.join('')); 
  };


  const containerStyle = {
    gap: '8px',
    justifyItems: 'center',
    alignItems: 'center',
    margin: '16px auto',
    width: 'fit-content',
  };

  return (
    <div style={containerStyle}>
      {optionGroups.map((options, index) => (
        <div key={index}>
          {options.map((option) => (
            <MBTIOption
              key={option.value}
              selected={option.value === selectedValues[index]}
              label={option.label}
              value={option.value}
              onClick={() => handleChangeAt(option.value, index)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}