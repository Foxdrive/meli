import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SearchItem from '../search-items/search-Item/searchItem';
import './searchResults.css';

function SearchResults() {
  const items = useLoaderData();
  const arrayItems = items.map( item => <Link key={item.id} style={{ textDecoration: 'none' }} to={`/items/${item.id}`}><SearchItem item={item}/></Link>)

  return (
    <div className='container searchResultContainer' style={{backgroundColor: 'white'}}>
      {arrayItems}
    </div>
  )
}

export default SearchResults;