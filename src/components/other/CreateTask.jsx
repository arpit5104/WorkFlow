import React from 'react'

const CreateTask = () => {
  return (
    <div className='mt-3' >
            <form className='flex items-start p-3  flex-wrap justify-between rounded-md bg-[#1c1c1c]'>
                <div className='w-[60%]'>
                        <div className=''>
                            <h3 className='text-sm tracking-tight'>Task Title</h3>
                            <input type="text" name="taskTitle" placeholder="Enter task title" className='bg-transparent w-[70%] border-[1px] rounded-md px-1 border-white-500 outline-none placeholder:text-sm'/>
                        </div>
                        <div className='mt-2'>
                            <h3  className='text-sm tracking-tight'>Date</h3>
                            <input type="date" name="" id="" className='bg-transparent w-[70%] border-[1px] rounded-md px-1 border-white-200 outline-none placeholder:text-sm ' />
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-sm tracking-tight'>Asign to</h3>
                            <input type="text" placeholder='Employee name' className='bg-transparent w-[70%] border-[1px] rounded-md px-1 border-white-500 outline-none placeholder:text-sm' />
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-sm tracking-tight'>Category</h3>
                            <input type="text" placeholder='Design, Dev, etc' className='bg-transparent w-[70%] border-[1px] rounded-md px-1 border-white-500 outline-none placeholder:text-sm'/>
                        </div>
                </div>
                
                <div className='w-[40%] flex flex-col items-start'>
                    <h3 className='text-sm tracking-tight'>Description</h3>
                    <textarea name="" id="" className='h-44 text-sm bg-transparent w-full border-[1px] rounded-md px-1 border-white-500 outline-none placeholder:text-sm '></textarea>
                    <button className='w-full bg-emerald-500 py-2 rounded-md text-xs font-semibold  hover:bg-emerald-600 mt-4'>Create Task</button>
                </div>
                
                
            </form>
        </div>
  )
}

export default CreateTask