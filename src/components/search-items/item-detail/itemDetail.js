import React from 'react';
import './itemDetail.css';
import { useLoaderData } from 'react-router';

function ItemDetail() {
  const [ item, itemDescription] = useLoaderData();
  console.log(item, itemDescription)
  return (
    <div className='container itemDetailContainer'>
      <div className='col'>
        <div className='row'>
          <div className='col-9 text-center'>
            <img src={item.pictures[0].url} style={{ maxWidth: '600px', maxHeight: '600px'}}/>
          </div>
          <div className='col-3 col'>
            <div className='infoPrice'>{item.condition} - 234 vendidos</div>
            <h2 className='titlePrice'>{item.title}</h2>
            <h1 className='detailPrice'>$ {item.price}</h1>
            <div className='d-grid gap-2'>
              <button className="btn btn-primary" type="button">Comprar</button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='productInfoTitle'>
            Descripcion del producto
          </div>
          <div className=' col-9'>
            {itemDescription.plain_text}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;