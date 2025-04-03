import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const JobDescription = () => {

    const isApplied = false;

    return (
        <div className='max-w-6xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Title</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge variant='ghost' className='font-bold text-blue-700'>Part time</Badge>
                        <Badge variant='ghost' className='font-bold text-[#960064]'>12 Positions</Badge>
                        <Badge variant='ghost' className='font-bold text-[#00aeff]'>13LPA</Badge>
                    </div>
                </div>
                <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'cursor-not-allowed' : 'bg-[#0003a3] hover:bg-[#00014b] cursor-pointer'}`} > {isApplied ? 'Already applied' : 'Apply'} </Button>
            </div>

            <h1 className='border-b-2 border-b-gray-300 font-medium py-4 mb-4'>Job Description</h1>

            <div>
                <h1 className='font-bold my-1'>Role : <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
                <h1 className='font-bold my-1'>Location : <span className='pl-4 font-normal text-gray-800'>Delhi</span></h1>
                <h1 className='font-bold my-1'>Description : <span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusantium minus in.</span></h1>
                <h1 className='font-bold my-1'>Experience : <span className='pl-4 font-normal text-gray-800'>2 yrs</span></h1>
                <h1 className='font-bold my-1'>Salary : <span className='pl-4 font-normal text-gray-800'>12 LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants : <span className='pl-4 font-normal text-gray-800'>5</span></h1>
                <h1 className='font-bold my-1'>Posted Date : <span className='pl-4 font-normal text-gray-800'>17/03/2025</span></h1>
            </div>
        </div>
    )
}

export default JobDescription