import React, { Component } from 'react';
import './Header.css';
import {FaSearch} from 'react-icons/fa';
class Search extends Component {
    render() {
        return (
            <div className= 'Search'>
              <FaSearch className='iconSearch'/>
        <input placeholder="Kitap Ara"/>
            </div>
        )
    }
}
export default Search;