import React from 'react'
import FilterSection from './FilterSection'
import JobCard from './JobCard';
import Navbar from './shared/navbar';
import { useSelector } from 'react-redux';

const Jobs = () => {

    const { allJobs } = useSelector(store => store.job);

    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto mt-5'>
                <div className='flex gap-5'>
                    <div className='w-[20%]'>
                        <FilterSection />
                    </div>
                    {
                        allJobs.length <= 0 ? <span>Job not found</span> : (
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        allJobs.map((job) => (
                                            <div key={job._id}>
                                                <JobCard job={job} />
                                            </div>
                                        ))}
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>

        </div>
    )
}

export default Jobs