import React from 'react'

const Any = () => {
  return (
    <div className="Container">
          <h4>Any Other ND</h4>
          <table style={{marginLeft:"100px"}}>
        <tbody >
          <tr>
            <td><input type='radio'/>
        <label for="html">No</label><br></br></td>
            <td><input type='radio'/>
        <label for="html">Yes</label><br></br></td>
            <td> <input type='radio'/>
        <label for="html">Autism</label><br></br></td>
          </tr>
          <tr>
            <td><input type='radio'/>
        <label for="html">Down Syndrome</label><br></br></td>
            <td><input type='radio'/>
        <label for="html">ADHD</label><br></br></td>
            <td><input type='radio'/>
        <label for="html">OCD</label><br></br></td>
          </tr>
          <tr>
            <td> <input type='radio'/>
        <label for="html">Dyslexia</label><br></br></td>
            
          </tr>
        </tbody>
       </table>
    </div>
  )
}

export default Any