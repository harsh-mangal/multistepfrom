import React, { useState, useEffect } from 'react';

const Medication = () => {
  const [selectedMedication, setSelectedMedication] = useState('');


  useEffect(() => {
    const savedValue = localStorage.getItem('selectedMedication');
    if (savedValue) {
      setSelectedMedication(savedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedMedication', selectedMedication);
  }, [selectedMedication]);

  const handleRadioChange = (value) => {
    setSelectedMedication(value);
  };

  return (
    <div className="Container">
      <h4>Medication</h4>
      <table style={{ marginLeft: "30px" }}>
        <tbody>
          <tr>
            <td>
              <input
                type='radio'
                id='no'
                checked={selectedMedication === 'No'}
                onChange={() => handleRadioChange('No')}
              />
              <label htmlFor='no'>No</label><br />
            </td>
            <td>
              <input
                type='radio'
                id='antiThyroid'
                checked={selectedMedication === 'Anti Thyroid'}
                onChange={() => handleRadioChange('Anti Thyroid')}
              />
              <label htmlFor='antiThyroid'>Anti Thyroid</label><br />
            </td>
            <td>
              <input
                type='radio'
                id='nsaids'
                checked={selectedMedication === 'NSAIDS'}
                onChange={() => handleRadioChange('NSAIDS')}
              />
              <label htmlFor='nsaids'>NSAIDS</label><br />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type='radio'
                id='antiDepressants'
                checked={selectedMedication === 'Anti Depressants'}
                onChange={() => handleRadioChange('Anti Depressants')}
              />
              <label htmlFor='antiDepressants'>Anti Depressants</label><br />
            </td>
            <td>
              <input
                type='radio'
                id='antiConvulsant'
                checked={selectedMedication === 'Anti Convulsant'}
                onChange={() => handleRadioChange('Anti Convulsant')}
              />
              <label htmlFor='antiConvulsant'>Anti Convulsant</label><br />
            </td>
            <td>
              <input
                type='radio'
                id='antiCoagulant'
                checked={selectedMedication === 'Anti Coagulant'}
                onChange={() => handleRadioChange('Anti Coagulant')}
              />
              <label htmlFor='antiCoagulant'>Anti Coagulant</label><br />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type='radio'
                id='antiBiotics'
                checked={selectedMedication === 'Anti Biotics'}
                onChange={() => handleRadioChange('Anti Biotics')}
              />
              <label htmlFor='antiBiotics'>Anti Biotics</label><br />
            </td>
            <td>
              <input
                type='radio'
                id='antiEpileptic'
                checked={selectedMedication === 'Anti Epileptic'}
                onChange={() => handleRadioChange('Anti Epileptic')}
              />
              <label htmlFor='antiEpileptic'>Anti Epileptic</label><br />
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Medication;
