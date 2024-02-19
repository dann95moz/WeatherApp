import React, { useState } from 'react';
import './Switch.css';

interface SwitchProps {
  initialValue: 'C' | 'F';
}

const Switch: React.FC<SwitchProps> = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = () => {
    setValue(value === 'C' ? 'F' : 'C');
  };

  return (
    <label className="switch">
      <input
        type="checkbox" 
        checked={value === 'C'}
        onChange={handleChange}
      />
      <span className="slider round">
        <div className={value === 'C' ? 'circle left' : 'circle right'}>
          <span>{value}</span>
        </div>
      </span>
    </label>
  );
};

export default Switch;
