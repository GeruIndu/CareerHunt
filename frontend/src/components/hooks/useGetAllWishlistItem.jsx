import { addToWishlist } from '@/store/authSlice';
import { JOBS_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllWishlistItem = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchitems = async () => {
            try {
                const res = await axios.get(`${JOBS_API_END_POINT}/getfromwishlist`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(addToWishlist(res.data.user.wishlist));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchitems();
    }, [])
}

export default useGetAllWishlistItem