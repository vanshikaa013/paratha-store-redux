import React from 'react'
import Cards from './Cards'
import { useSelector } from 'react-redux'

const Menu = () => {
  // const {menu} = useSelector(state => state.menu)
  return (
    <div id='Menu' className='p-5  bg-gradient-to-br from-yellow-100 to-orange-100 flex flex-col items-center'>
        <h1 className='text-5xl my-4 font-bold'>Menu</h1>

        <div className='flex'>
          <Cards/>
        </div>
    </div>
  )
}

export default Menu