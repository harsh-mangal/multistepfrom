import React, { useState, useEffect } from 'react';

const Mod = () => {
  const [selectedMode, setSelectedMode] = useState('');

  useEffect(() => {
    const savedValue = localStorage.getItem('selectedMode');
    if (savedValue) {
      setSelectedMode(savedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedMode', selectedMode);
  }, [selectedMode]);

  const handleRadioChange = (value) => {
    setSelectedMode(value);
  };

  return (
    <div className="Container" style={{ display: "flex", alignItems: "center", justifyContent: "left", flexDirection: "column" }}>
      <h4>Mode of Delivery</h4>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "left", flexDirection: "column", gap: "0.5rem" }}>
        <div>
          <input
            type='radio'
            id='normal'
            checked={selectedMode === 'Normal'}
            onChange={() => handleRadioChange('Normal')}
          />
          <label htmlFor='normal'>Normal</label>
        </div>
        <div>
          <input
            type='radio'
            id='cesarean'
            checked={selectedMode === 'Cesarean'}
            onChange={() => handleRadioChange('Cesarean')}
          />
          <label htmlFor='cesarean'>Cesarean</label>
        </div>
      </div>
    </div>
  );
}

export default Mod;
