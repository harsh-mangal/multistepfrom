import React, { useState, useEffect } from 'react';

const Aof = () => {
  const [ageOfFather, setAgeOfFather] = useState('');

  useEffect(() => {
    const savedValue = localStorage.getItem('ageOfFather');
    if (savedValue) {
      setAgeOfFather(savedValue);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('ageOfFather', ageOfFather);
  }, [ageOfFather]);

  return (
    <div className="Container">
      <h4>Age of Father</h4>
      <input
        type="text"
        placeholder='Your answer'
        value={ageOfFather}
        onChange={(e) => setAgeOfFather(e.target.value)}
      />
    </div>
  );
}

export default Aof;
