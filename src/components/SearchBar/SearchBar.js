import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    render() {
        return ( 
    <div className = "searchBar">
        <h2> Search Options </h2>
        <input className = "actor" placeholder ="Search Actor" />
        <input className = "genre" placeholder = "Search Genre" />
        <input className = "director" placeholder = "Search Director" />
    </div>
        )
    }
}

export default SearchBar;