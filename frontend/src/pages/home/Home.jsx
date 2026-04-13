import React from 'react'
import Banner from './Banner'
import TopSellers from './TopSellers'
import Recommened from './Recommened'

import DiscoverGreatAuthors from './DiscoverGreatAuthors'
import ChosenEssentials from './ChosenEssentials'
import BooksByAge from './BooksByAge'

const Home = () => {
  return (
    <>
        <Banner/>
        <TopSellers/>
        <DiscoverGreatAuthors />
        <ChosenEssentials />
        <Recommened/>
        <BooksByAge />
    </>
  )
}

export default Home