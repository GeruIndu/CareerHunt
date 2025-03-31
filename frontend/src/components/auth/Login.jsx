import React from 'react'
import Navbar from '../shared/navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my10'>
                    <div className='font-bold text-xl mb-5'>Login</div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type='email'
                            name='email'
                            placeholder='example@gmail.com'
                            className='my-2'
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type='password'
                            name='password'
                            placeholder='12345678'
                            className='my-2'
                        />
                    </div>
                    <div className='flex items-center'>
                        <RadioGroup className='flex items-center gap-4 my-2'>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type='radio'
                                    value='student'
                                    name='role'
                                    className='cursor-pointer'
                                    id='r1'
                                />
                                <Label className='cursor-pointer' htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type='radio'
                                    value='recruiter'
                                    name='role'
                                    className='cursor-pointer'
                                    id='r2'
                                />
                                <Label className='cursor-pointer' htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <Button className='w-full cursor-pointer my-2'>Login</Button>
                    <span>Don't have an account? <Link to='/signup' className='text-blue-800'>Signup</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login