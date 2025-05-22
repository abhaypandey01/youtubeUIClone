import React from 'react'

function ChannelInfo() {
  return (
    <div className='flex w-full space-y-2'>
        <div className='w-30 h-30 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-7xl'>
            A
        </div>
        <div className='flex-1'>
            <div className='flex flex-col'>
                <p className='text-3xl p-2 font-semibold'>Alam Durib</p>
                <p className='text-sm font-semibold pl-2 '>@alamdurib</p>
                <p className='text-gray-500 text-sm pl-2 m '>More about this channel...</p>
            </div>
            <div className='flex gap-2'>
                <button className='bg-gray-700 py-1 px-3 rounded-full mt-2 font-semibold'>
                    Customize channel
                </button>
                <button className='bg-gray-700 py-1 px-3 rounded-full mt-2 font-semibold'>
                    Manage Videos
                </button>
            </div>
        </div>
    </div>
  )
}

export default ChannelInfo