import React from 'react'
import BtnSymbol from '../../../assets/down.svg'
import './ViewAll.css'
function ViewAll() {
  return (
    <div className='view-all-container'>
        <p className='view-all'>View All</p>
        <img src={BtnSymbol}
        className="down"/>
    </div>
    
  )
}

export default ViewAll