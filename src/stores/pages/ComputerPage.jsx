import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { computerData } from '../data/computers'

const ComputerPage = () => {

    const[selectedProduct, setSelectedProduct]=useState([])
    function companyHandler(mango){
        if(selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item=>item!==mango))
        }else{
            setSelectedProduct([...selectedProduct, mango])
        }
    }

    const filteredProduct = selectedProduct.length===0?
    computerData : computerData.filter((orange)=>selectedProduct.includes(orange.company))


  return (
    <>
        <Navbar/>
        <div className="fullpage">
        <div className='pro-selected'>
            {
                computerData.map((item)=>{
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
                            <Link to={`/computers/${item.id}`}>
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

export default ComputerPage