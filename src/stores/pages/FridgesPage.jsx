import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { fridgeData } from '../data/fridge'

const FridgesPage = () => {
    const[selectedProduct, setSelectedProduct]=useState([])
    function brandHandler(mango){
        if(selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item=>item!==mango))
        }else{
            setSelectedProduct([...selectedProduct, mango])
        }
    }

    const filteredProduct = selectedProduct.length===0?
    fridgeData : fridgeData.filter((orange)=>selectedProduct.includes(orange.brand))
  return (
    <>
        <Navbar/>
        <div className="fullpage">
        <div className='pro-selected'>
            {
                fridgeData.map((item)=>{
                    return(
                        <div className='pro-input'>
                            <label>
                                <input type="checkbox" checked={selectedProduct.includes(item.brand)}
                                        onChange={()=>brandHandler(item.brand)}
                                />
                                {item.brand}
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
                            <Link to={`/fridges/${item.id}`}>
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

export default FridgesPage