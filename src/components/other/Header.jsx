import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between  py-5'>
        <h1 className='text-xl font-medium'>Hello, <br/><section className='text-3xl tracking-tighter font-bold'>Arpit 👋</section></h1>
        <button className='bg-red-500 rounded-md text-white font-semibold  px-3 text-xl tracking-tighter'>Log Out</button>
    </div>
  )
}

export default Header