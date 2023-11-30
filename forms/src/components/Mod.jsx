import React from 'react'

const Mod = () => {
  return (
    <div className="Container" style={{display:"flex",alignItems:"center",justifyContent:"left",flexDirection:"column"}}>
          <h4>Mode of Delivery</h4>
          <div style={{display:"flex",alignItems:"baseline",justifyContent:"left",flexDirection:"column",gap:"0.5rem"}}>
       <div> <input type='radio'/>
        <label for="html">Normal</label></div>
       <div> <input type='radio'/>
        <label for="html">Cessarian</label></div>
        </div>
    </div>
  )
}

export default Mod