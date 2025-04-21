import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './shared/navbar';
import JobCard from './JobCard';
import { addToWishlist } from '@/store/authSlice';
import { JOBS_API_END_POINT } from '@/utils/constant';
import axios from 'axios';

const WishList = () => {
    const { wishlist } = useSelector(store => store.auth);
    const [allItems, setAllItems] = useState(wishlist);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${JOBS_API_END_POINT}/getfromwishlist`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(addToWishlist(res.data.user.wishlist));
                    setAllItems(res.data.user.wishlist);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [allItems, setAllItems])

    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto'>
                <h1 className='font-bold text-xl my-5'>Wishlist Items ({allItems.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        allItems.map((job) => {
                            return <JobCard key={job._id} job={job} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WishList