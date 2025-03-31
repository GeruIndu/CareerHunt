import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button';
import { LogOut, User2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = false;

  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between mx-auto max-w-6xl h-16'>
        <div>
          <Link to='/'><h1 className='text-2xl font-bold'>Career<span className='text-[#0244f8]'>Hunt</span></h1></Link>
        </div>
        <div className='flex gap-12'>
          <ul className='flex font-medium items-center gap-5 cursor-pointer'>
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>

          {!user ? <div className='flex items-center gap-2'>
            <Link to='/login'><Button variant='outline' className='cursor-pointer'>Login</Button></Link>
            <Link to='/signup'><Button className='bg-[#6A38C2] cursor-pointer hover:bg-[#57427c]'>Signup</Button></Link>
          </div> :
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className='flex space-y-4 gap-5'>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  </Avatar>
                  <div>
                    <h1 className='font-medium'>Indrajit Mondal</h1>
                    <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>

                <div className='flex flex-col my-2 text-gray-500'>
                  <div className='flex w-fit items-center gap-2 cursor-pointer outline-none'>
                    <User2 />
                    <Button variant='link'>View Profile</Button>
                  </div>
                  <div className='flex w-fit items-center gap-2'>
                    <LogOut />
                    <Button variant='link' className='cursor-pointer outline-none'>Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar;