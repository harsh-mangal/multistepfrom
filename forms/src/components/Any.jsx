import React, { useState, useEffect } from 'react';

const Any = () => {
  const [selectedND, setSelectedND] = useState('');

  useEffect(() => {
    const savedValue = localStorage.getItem('selectedND');
    if (savedValue) {
      setSelectedND(savedValue);
    }
  }, []);

  

  useEffect(() => {
    localStorage.setItem('selectedND', selectedND);
  }, [selectedND]);

  const handleRadioChange = (value) => {
    setSelectedND(value);
  };

  return (
    <div className="Container">
      <h4>Any Other ND</h4>
      <table style={{ marginLeft: "100px" }}>
        <tbody>
          <tr>
            <td>
              <input
                type='radio'
                id='noND'
                checked={selectedND === 'No'}
                onChange={() => handleRadioChange('No')}
              />
              <label htmlFor='noND'>No</label><br />
            </td>
            <td>
              <input
                type='radio'
                id='yesND'
                checked={selectedND === 'Yes'}
                onChange={() => handleRadioChange('Yes')}
              />
              <label htmlFor='yesND'>Yes</label><br />
            </td>
            <td>
              <input
                type='radio'
                id='autism'
                checked={selectedND === 'Autism'}
                onChange={() => handleRadioChange('Autism')}
              />
              <label htmlFor='autism'>Autism</label><br />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type='radio'
                id='downSyndrome'
                checked={selectedND === 'Down Syndrome'}
                onChange={() => handleRadioChange('Down Syndrome')}
              />
              <label htmlFor='downSyndrome'>Down Syndrome</label><br />
            </td>
            <td>
              <input
                type='radio'
                id='adhd'
                checked={selectedND === 'ADHD'}
                onChange={() => handleRadioChange('ADHD')}
              />
              <label htmlFor='adhd'>ADHD</label><br />
            </td>
            <td>
              <input
                type='radio'
                id='ocd'
                checked={selectedND === 'OCD'}
                onChange={() => handleRadioChange('OCD')}
              />
              <label htmlFor='ocd'>OCD</label><br />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type='radio'
                id='dyslexia'
                checked={selectedND === 'Dyslexia'}
                onChange={() => handleRadioChange('Dyslexia')}
              />
              <label htmlFor='dyslexia'>Dyslexia</label><br />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Any;
