import React, { useEffect } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { JOBS_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/store/jobSlice';

const JobDescription = () => {
    const isApplied = false;
    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();
    const { singleJob } = useSelector(store => store.job);

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOBS_API_END_POINT}/getbyid/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                }
            } catch (error) {
                console.log(error, "hello");
                toast.error(error.response.data.message);
            }
        }

        fetchSingleJob();
    }, [jobId, dispatch])

    return (
        <div className='max-w-6xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge variant='ghost' className='font-bold text-blue-700'>{singleJob?.jobtype}</Badge>
                        <Badge variant='ghost' className='font-bold text-[#960064]'>{singleJob?.position} Positions</Badge>
                        <Badge variant='ghost' className='font-bold text-[#00aeff]'>{singleJob?.salary}LPA</Badge>
                    </div>
                </div>
                <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'cursor-not-allowed' : 'bg-[#0003a3] hover:bg-[#00014b] cursor-pointer'}`} > {isApplied ? 'Already applied' : 'Apply'} </Button>
            </div>

            <h1 className='border-b-2 border-b-gray-300 font-medium py-4 mb-4'>Job Description</h1>

            <div>
                <h1 className='font-bold my-1'>Role : <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
                <h1 className='font-bold my-1'>Location : <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
                <h1 className='font-bold my-1'>Description : <span className='pl-4 font-normal text-gray-800'>{singleJob?.description}</span></h1>
                <h1 className='font-bold my-1'>Experience : <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience}yrs</span></h1>
                <h1 className='font-bold my-1'>Salary : <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary} LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants : <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications.length}</span></h1>
                <h1 className='font-bold my-1'>Posted Date : <span className='pl-4 font-normal text-gray-800'>{singleJob?.createdAt.split('T')[0]}</span></h1>
            </div>
        </div>
    )
}

export default JobDescription