import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10  justify-between gap-5 screen'>
        <div className='py-5 px-5 rounded-xl w-[45%] bg-red-500 '>
            <h2 className='text-3xl mb-1 font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='py-5 px-5 rounded-xl w-[45%] bg-emerald-500 '>
            <h2 className='text-3xl mb-1 font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='py-5 px-5 rounded-xl w-[45%] bg-blue-500 '>
            <h2 className='text-3xl mb-1 font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='py-5 px-5 rounded-xl w-[45%] bg-orange-300 '>
            <h2 className='text-3xl mb-1 font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber