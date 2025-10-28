import React from "react";

function Header({ units, onUnitsChange }) {
  const handleUnitsChange = (e) => {
    const selectedUnits = e.target.value;
    if (onUnitsChange) {
      onUnitsChange(selectedUnits);
    }
  };

  return (
    <div className="header-div">
      <div className="logo">
        <img src="/images/logo.svg" alt="Weather App Logo" />
      </div>

      <div className="select-div">
        <span className="icon">
          <img src="/images/icon-units.svg" alt="Units" />
        </span>
        <select 
          name="units" 
          id="units" 
          className="custom-select"
          value={units || "metric"}
          onChange={handleUnitsChange}
        >
          <option value="metric">Metric (°C, km/h, mm)</option>
          <option value="imperial">Imperial (°F, mph, in)</option>
        </select>
        <img src="/images/icon-dropdown.svg" alt="Dropdown" className="dropdown-icon" />
      </div>
    </div>
  );
}

export default Header;