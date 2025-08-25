import React from 'react'
import Acs from './Acs'
import Computers from './Computers'
import Fridge from './Fridge'
import Mobiles from './Mobiles'
import Watches from './Watches'

const Products = () => {
  return (
    <div>
        <Mobiles/>
        <Computers/>
        <Watches/>
        <Fridge/>
        <Acs/>
    </div>
  )
}

export default Products