import React from 'react'
import Navbar from './shared/navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'

const skillList = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB'];

const Profile = () => {
    const isResume = true;

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-3'>
                        <Avatar className='h-24 w-24'>
                            <AvatarImage src='https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg' />
                        </Avatar>
                        <div>
                            <h1 className='font-bold text-xl'>Indrajit Mondal</h1>
                            <p className='text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit doloribus earum hic?</p>
                        </div>
                    </div>
                    <Button className='text-right' variant='outline'><Pen /></Button>
                </div>
                <div className="my-5">
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>indrajitmondal@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>8159045335</span>
                    </div>
                </div>
                <div>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            skillList.length ? skillList.map((skill, index) => {
                                return <Badge key={index}>{skill}</Badge>
                            }) : <span>NA</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1 mt-5'>
                    <Label className='text-md font-bold'>Resume</Label>
                    {
                        isResume ? <a target='_blank' href="https://github.com/geruindu" className='w-full text-blue-500 hover:underline cursor-pointer'>indrajit.pdf</a> : <span>NA</span>
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl mb-10'>
                <h1 className='font-bold text-xl py-5'>Applied Jobs</h1>
                <AppliedJobTable />
            </div>
        </div>
    )
}

export default Profile