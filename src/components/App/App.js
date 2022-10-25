import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Movielist from '../movielist/movielist';
import './App.css';

class App extends React.Component {
  render () {
  return (
    <div className="App">
      <h1> IMDB MOVIE SEARCH </h1>
      <SearchBar />  
      <Movielist />
    </div>
  
  );
  }
}

export default App;
