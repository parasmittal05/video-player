import React from 'react';
import './Homescreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import requests from '../Requests';
import Row from '../Row';

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>
       <Banner/>
       <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title="Science Fiction" fetchUrl={requests.fetchSciFi} isLargeRow />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow/>
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation} isLargeRow />
      <Row title="Horror Movies" fetchUrl={requests.fetchMystery} isLargeRow />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow />
      <Row title="Western Movies" fetchUrl={requests.fetchWestern} isLargeRow />
      <Row title="TV" fetchUrl={requests.fetchTV} isLargeRow/>

      
    </div>
  )
}

export default HomeScreen
