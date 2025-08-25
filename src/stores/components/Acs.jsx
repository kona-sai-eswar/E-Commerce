import React from 'react'
import {acData} from "../data/ac"

const Acs = () => {
    const firstFiveImages=acData.slice(0,5)
  return (
    <>
    <div className='proTitle'>
    <h2>Air Conditioners</h2>
    </div>
        <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return (
                    <div className='imgBox'>
                        <img src={item.image} alt={item.model} className="proImage"/>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Acs