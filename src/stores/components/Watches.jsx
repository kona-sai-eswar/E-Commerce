import React from 'react'
import {watchData} from "../data/watch"


const Watches = () => {
    const firstFiveImages=watchData.slice(0,5)
  return (
    <>
        <div className='proTitle'>
    <h2>Watches</h2>
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

export default Watches