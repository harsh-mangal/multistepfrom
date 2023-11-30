import React from 'react'

const Hom = () => {
  return (
    <div className="Container" style={{display:"flex",alignItems:"center",justifyContent:"left",flexDirection:"column"}}>
          <h4>Health of Mother</h4>
          <div style={{display:"flex",alignItems:"baseline",justifyContent:"left",flexDirection:"column",gap:"0.5rem"}}>
       <div> <input type='radio'/>
        <label for="html">Good</label></div>
       <div> <input type='radio'/>
        <label for="html">Bad</label></div>
       <div> <input type='radio'/>
        <label for="html">Poor</label></div>
       <div> <input type='radio'/>
        <label for="html">Low immunity</label></div>
      </div>
    </div>
  )
}

export default Hom