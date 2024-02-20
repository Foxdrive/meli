import React from 'react';
import './searchItem.css';

function SearchItem({ item }) {
  return (
    <div className='row searchItem'>
      <div className='col-3'>
        <img src={item.thumbnail} style={{ width: '200px', height: '200px'}}/>
      </div>
      <div className='col-6 text'>
        <div className='price clearfix'>
          $ {item.price}
        </div>
        <div className='description'>
          {item.title}
        </div>
      </div>
      <div className='col-3'>
        <div className='region'>
          Mendoza
        </div>
      </div>
    </div>
  )
}

export default SearchItem;