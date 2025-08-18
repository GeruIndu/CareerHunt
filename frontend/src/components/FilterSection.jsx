import React, { useEffect, useState } from 'react';
import Checkbox from './ui/Checkbox';  // Import the Checkbox component
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/store/jobSlice';

const filterData = [
    {
        filterType: 'Location',
        array: ['Delhi', 'Mumbai', 'Hyderabad', 'Bengalore', 'Gurugram', 'Kolkata']
    },
    {
        filterType: 'Industry',
        array: ['Frontend Developer', 'Backend Developer', 'Fullstack', 'Data Science']
    },
    {
        filterType: 'Salary',
        array: ['0-40k', '40k-1lakh', '1lakh-5lakh']
    }
];

const FilterSection = () => {
    const dispatch = useDispatch();
    const [selectedFilters, setSelectedFilters] = useState({});

    const handleCheckboxChange = (filterType, value) => {
        setSelectedFilters((prev) => {
            const updatedValues = prev[filterType] || [];
            const newValues = updatedValues.includes(value)
                ? updatedValues.filter((v) => v !== value)
                : [...updatedValues, value];

            return {
                ...prev,
                [filterType]: newValues,
            };
        });
    };

    useEffect(() => {
        const allSelected = Object.values(selectedFilters).flat();
        dispatch(setSearchedQuery(allSelected.join(',')));
        console.log(allSelected.join(','));

    }, [selectedFilters, dispatch]);

    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />

            {filterData.map((data, index) => (
                <div key={index}>
                    <h2 className='font-bold text-lg'>{data.filterType}</h2>

                    {data.array.map((item, idx) => {
                        const itemId = `id${index}-${idx}`;
                        const isChecked =
                            selectedFilters[data.filterType]?.includes(item) || false;

                        return (
                            <div key={idx} className='flex items-center space-x-2 my-2'>
                                <Checkbox
                                    id={itemId}
                                    checked={isChecked}
                                    onChange={() => handleCheckboxChange(data.filterType, item)}
                                />
                                <label htmlFor={itemId}>{item}</label>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default FilterSection;
