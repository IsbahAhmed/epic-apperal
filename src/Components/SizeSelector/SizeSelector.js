import React from 'react'

const SizeSelector = ({size,setSelectedSize}) => {
  const handleChange = (e)=>{
setSelectedSize(e.target.value)
  }
    return (
        <div className="modal-size">
                  <h4>Size</h4>
                  <select  onChange={handleChange} >
                    {
                      size.map((value)=> <option key={value}value={value}>{value}</option>)
                    }
               
                  </select>
                </div>
    )
}

export default SizeSelector
