import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { JOBS_API_END_POINT } from '@/utils/constant';
import { setAllJobs } from '@/store/jobSlice';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const { searchedQuery } = useSelector(store => store.job);

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const params = new URLSearchParams();
                if (Array.isArray(searchedQuery)) {
                    searchedQuery.forEach(q => params.append('keyword', q));
                } else {
                    params.append('keyword', searchedQuery);
                }

                const res = await axios.get(`${JOBS_API_END_POINT}/get?${params.toString()}`, {
                    withCredentials: true
                });

                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchAllJobs();
    }, [searchedQuery, dispatch]);
};

export default useGetAllJobs;
