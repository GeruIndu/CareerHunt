import React from 'react'
import Navbar from './shared/navbar'
import JobCard from './JobCard'

const randomJobs = [1, 3, 4]

const Browse = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto'>
                <h1 className='font-bold text-xl my-5'>Search Results (3)</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        randomJobs.map(() => {
                            return <JobCard />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Browse