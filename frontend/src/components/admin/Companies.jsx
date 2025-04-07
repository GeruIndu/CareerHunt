import React from 'react'
import Navbar from '../shared/navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompanyTable from './CompanyTable'
import { useNavigate } from 'react-router-dom'

const Companies = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10'>
                <div className='flex items-center justify-between'>
                    <Input
                        className='w-fit py-6'
                        placeholder='Filter by name'
                    />
                    <Button onClick={() => navigate('/admin/companies/create')} className='cursor-pointer'>New Company</Button>
                </div>
                <CompanyTable />
            </div>
        </div>
    )
}

export default Companies