import React, { useState } from 'react';
import './Switch.css';

interface SwitchProps {

  setTemperatureUnit: React.Dispatch<React.SetStateAction<'C' | 'F'>>
  temperatureUnit: 'C' | 'F'
}

const Switch: React.FC<SwitchProps> = ({ temperatureUnit,setTemperatureUnit }) => {

  const handleChange = () => {
    setTemperatureUnit(temperatureUnit === 'C' ? 'F' : 'C');
  };

  return (
    <label className="switch">
      <input
        type="checkbox" 
        checked={temperatureUnit === 'C'}
        onChange={handleChange}
      />
      <span className="slider round">
        <div className={temperatureUnit === 'C' ? 'circle left' : 'circle right'}>
          <span>{temperatureUnit}</span>
        </div>
      </span>
    </label>
  );
};

export default Switch;
