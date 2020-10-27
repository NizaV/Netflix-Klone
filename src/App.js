import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './requests.js'

function App() {
  return (
    <div className="App">
      <h1>Hey NEEZ</h1>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
    </div>
  );
}

export default App;
