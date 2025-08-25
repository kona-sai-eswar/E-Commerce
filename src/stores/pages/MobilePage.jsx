import React from 'react'
import Navbar from '../components/Navbar'
import { mobileData } from '../data/mobiles'
import {Link} from "react-router-dom"
import { useState } from 'react'

const MobilePage = () => {
    const[selectedProduct, setSelectedProduct]=useState([])
    function companyHandler(mango){
        if(selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item=>item!==mango))
        }else{
            setSelectedProduct([...selectedProduct, mango])
        }
    }

    const filteredProduct = selectedProduct.length===0?
        mobileData : mobileData.filter((orange)=>selectedProduct.includes(orange.company))

  return (
    <>
        <Navbar/>
        <div className='fullpage'>
        <div className='pro-selected'>
            {
                mobileData.map((item)=>{
                    return(
                        <div className='pro-input'>
                            <label>
                                <input type="checkbox" checked={selectedProduct.includes(item.company)}
                                        onChange={()=>companyHandler(item.company)}
                                />
                                {item.company}
                            </label>
                        </div>
                    )
                })
            }
        </div>
        <div className='pageSection'>
            {
                filteredProduct.map((item)=>{
                    return (
                        <div>
                            <Link to={`/mobiles/${item.id}`}>
                            <div className='pageImg'>
                                <img src={item.image}/>
                            </div>
                            </Link>
                            <div className="proMobel">
                                {item.company}, {item.model}
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    </>
  )
}

export default MobilePage