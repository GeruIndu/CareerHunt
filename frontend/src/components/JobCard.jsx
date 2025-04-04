import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from './ui/badge'
import { Link } from 'react-router-dom'

const JobCard = ({ job }) => {

    const getDate = (mongodbTime) => {
        const createdDate = new Date(mongodbTime);
        const currentDate = new Date();

        const timeDifference = currentDate - createdDate;

        return Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    }

    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-grey-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-grey-200'>{getDate(job?.createdAt) <= 0 ? "Today" : `${getDate(job?.createdAt)} days ago`}</p>
                <Button variant='outline' className='rounded-full' size='icon'><Bookmark /></Button>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button variant='outline' size='icon'>
                    <Avatar>
                        <AvatarImage src='https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg' />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>{job?.companyId?.name}</h1>
                    <p className='text-sm text-grey-300'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge variant='ghost' className='font-bold text-blue-700'>{job?.jobtype}</Badge>
                <Badge variant='ghost' className='font-bold text-[#960064]'>{job?.position} Positions</Badge>
                <Badge variant='ghost' className='font-bold text-[#00aeff]'>{job?.salary}LPA</Badge>
            </div>
            <div className='flex items-center gap-2 my-4'>
                <Button variant='outline'><Link to={`/description/${job._id}`}>Details</Link></Button>
                <Button className='bg-[#1d66b9]'>Save for later</Button>
            </div>
        </div>
    )
}

export default JobCard