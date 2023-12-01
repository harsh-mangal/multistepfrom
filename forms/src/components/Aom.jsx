import React, { useState, useEffect } from 'react';

const Aom = (props) => {
  const [ageOfMother, setAgeOfMother] = useState('');

  useEffect(() => {
    const savedValue = localStorage.getItem('ageOfMother');
    if (savedValue) {
      setAgeOfMother(savedValue);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('ageOfMother', ageOfMother);
  }, [ageOfMother]);

  return (
    <div className="Container">
      <h4>Age of Mother</h4>
      <input
        type="text"
        placeholder='Your answer'
        value={ageOfMother}
        onChange={(e) => setAgeOfMother(e.target.value)}
      />
    </div>
  );
}

export default Aom;
