import React from 'react';
import './searchItem.css';

function SearchItem() {
  return (
    <div className='row searchItem'>
      <div className='col-3'>
        <img style={{ width: '200px', height: '200px', backgroundColor: 'red'}}/>
      </div>
      <div className='col-6 text'>
        <div className='price clearfix'>
          $ 1.980
        </div>
        <div className='description'>
          Apple Ipod Touch 5G 16gb Negro Igual A Nuevo Completo Unico
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