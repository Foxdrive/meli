import React from 'react';
import { Link } from 'react-router-dom';
import SearchItem from '../search-items/search-Item/searchItem';
import './searchResults.css';

function SearchResults() {
  return (
    <div className='container searchResultContainer' style={{backgroundColor: 'white'}}>
      <Link style={{ textDecoration: 'none' }} to="/item"><SearchItem/></Link>
      <Link style={{ textDecoration: 'none' }} to="/item"><SearchItem/></Link>
      <Link style={{ textDecoration: 'none' }} to="/item"><SearchItem/></Link>
      <Link style={{ textDecoration: 'none' }} to="/item"><SearchItem/></Link>
    </div>
  )
}

export default SearchResults;