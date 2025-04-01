import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCard = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-grey-200 cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg'>Company Name</h1>
                <p className='text-sm text-grey-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Job Title</h1>
                <p className='text-sm text-grey-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius reiciendis dolores!</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge variant='ghost' className='font-bold text-blue-700'>Part time</Badge>
                <Badge variant='ghost' className='font-bold text-[#960064]'>12 Positions</Badge>
                <Badge variant='ghost' className='font-bold text-[#00aeff]'>13LPA</Badge>
            </div>
        </div>
    )
}

export default LatestJobCard