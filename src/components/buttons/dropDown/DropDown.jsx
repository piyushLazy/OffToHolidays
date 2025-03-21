import { useState } from 'react';
import './DropDown.css';

const DropDown = ({ defaultValue, options = [], icon }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-option-container">
        {icon && <img src={icon} alt="icon" width={20} height={20} />}
        <select value={selectedValue} onChange={handleChange}>
          <option value="" disabled className="dropdown-option">
            {defaultValue}
          </option>
          {options.map((option) => (
            <option value={option.value} key={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDown;
