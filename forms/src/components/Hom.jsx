import React, { useState, useEffect } from 'react';

const Hom = () => {
  const [healthStatus, setHealthStatus] = useState('');

  useEffect(() => {
    const savedValue = localStorage.getItem('healthStatus');
    if (savedValue) {
      setHealthStatus(savedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('healthStatus', healthStatus);
  }, [healthStatus]);

  const handleRadioChange = (value) => {
    setHealthStatus(value);
  };

  return (
    <div className="Container" style={{ display: "flex", alignItems: "center", justifyContent: "left", flexDirection: "column" }}>
      <h4>Health of Mother</h4>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "left", flexDirection: "column", gap: "0.5rem" }}>
        <div>
          <input
            type='radio'
            id='good'
            checked={healthStatus === 'Good'}
            onChange={() => handleRadioChange('Good')}
          />
          <label htmlFor='good'>Good</label>
        </div>
        <div>
          <input
            type='radio'
            id='bad'
            checked={healthStatus === 'Bad'}
            onChange={() => handleRadioChange('Bad')}
          />
          <label htmlFor='bad'>Bad</label>
        </div>
        <div>
          <input
            type='radio'
            id='poor'
            checked={healthStatus === 'Poor'}
            onChange={() => handleRadioChange('Poor')}
          />
          <label htmlFor='poor'>Poor</label>
        </div>
        <div>
          <input
            type='radio'
            id='lowImmunity'
            checked={healthStatus === 'Low immunity'}
            onChange={() => handleRadioChange('Low immunity')}
          />
          <label htmlFor='lowImmunity'>Low immunity</label>
        </div>
      </div>
    </div>
  );
}

export default Hom;
