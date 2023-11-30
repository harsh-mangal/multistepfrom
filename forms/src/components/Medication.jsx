import React from 'react'

const Medication = () => {
  return (
    <div className="Container">
         <h4>Medication</h4>
       <table style={{marginLeft:"30px"}}>
        <tbody>
          <tr>
            <td><input type='radio'/>
        <label for="html">No</label><br></br></td>
            <td><input type='radio'/>
        <label for="html">Anti Thyroid</label><br></br></td>
            <td> <input type='radio'/>
        <label for="html">NSAIDS</label><br></br></td>
          </tr>
          <tr>
            <td><input type='radio'/>
        <label for="html">Anti Depressents</label><br></br></td>
            <td><input type='radio'/>
        <label for="html">Anti Convulsant</label><br></br></td>
            <td><input type='radio'/>
        <label for="html">Anti Coagulant</label><br></br></td>
          </tr>
          <tr>
            <td> <input type='radio'/>
        <label for="html">Anti Biotics</label><br></br></td>
            <td> <input type='radio'/>
        <label for="html">Anti epileptic</label><br></br></td>
            <td></td>
          </tr>
        </tbody>
       </table>
        
        
       
        
        
        
       
       
    </div>
  )
}

export default Medication