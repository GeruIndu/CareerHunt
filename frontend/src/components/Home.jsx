import React from 'react'
import Navbar from './shared/navbar'
import Herosections from './Herosections'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'

const Home = () => {
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