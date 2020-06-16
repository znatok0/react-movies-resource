import React, { useEffect, useState } from 'react';
import { 
    API_URL,
    API_KEY,
    API_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE 
} from '../config';

import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import Header from './elements/Header';
import Spinner from './elements/Spinner';
import LoadMoreBtn from './elements/LoadMoreBtn';

//Custom hook
import {useHomeFetch} from './hooks/useHomeFetch'

const Home = () => {
    const [{state, loading, error}, fetchMovies] = useHomeFetch();

    return (
        <>
            <HeroImage/>
            <SearchBar/>
            <Grid/>
            <MovieThumb/>
            <Spinner/>
            <LoadMoreBtn/>
        </>
    )

}

export default Home;