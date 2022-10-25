import React from 'react';
import Movies from '../movies/movies';
import './movielist.css';

class Movielist extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className = "movielist">
                <p> RESULTS </p>
                <Movies />
            </div>
            
            
            )
    }
}


export default Movielist;