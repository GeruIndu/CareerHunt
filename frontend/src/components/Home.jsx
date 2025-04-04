import React from 'react'
import Navbar from './shared/navbar'
import Herosections from './Herosections'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from './hooks/useGetAllJobs'

const Home = () => {
    useGetAllJobs();
    return (
        <div>
            <Navbar />
            <Herosections />
            <CategoryCarousel />
            <LatestJobs />
            <Footer />
        </div>
    )
}

export default Home