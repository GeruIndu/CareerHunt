import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { DeleteIcon, Edit2, MoreHorizontal } from 'lucide-react'

const CompanyTable = () => {
    return (
        <div className='mt-5'>
            <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>
                <TableHeader className='bg-gray-100'>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Avatar className='h-15 w-15'>
                                <AvatarImage src='https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg' />
                            </Avatar>
                        </TableCell>
                        <TableCell>Company Name</TableCell>
                        <TableCell>12/04/2025</TableCell>
                        <TableCell className='text-right cursor-pointer'>
                            <Popover >
                                <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                <PopoverContent className='w-32 '>
                                    <div className='flex items-center gap-3 mb-3 cursor-pointer'>
                                        <Edit2 className='w-4' />
                                        <span>Edit</span>
                                    </div>
                                    <div className='flex items-center gap-3 cursor-pointer'>
                                        <DeleteIcon className='w-4' />
                                        <span>Delete</span>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default CompanyTable