import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './shared/navbar';
import useGetAllWishlistItem from './hooks/useGetAllWishlistItem';
import JobCard from './JobCard';

const WishList = () => {
    useGetAllWishlistItem();
    const { wishlist } = useSelector(store => store.auth);

    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto'>
                <h1 className='font-bold text-xl my-5'>Wishlist Items ({wishlist.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        wishlist.map((job) => {
                            return <JobCard key={job._id} job={job} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WishList