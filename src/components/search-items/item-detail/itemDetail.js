import React from 'react';
import './itemDetail.css';

function ItemDetail() {
  return (
    <div className='container itemDetailContainer'>
      <div className='col'>
        <div className='row'>
          <div className='col-9'>
            <img style={{ width: '600px', height: '600px', backgroundColor: 'red'}}/>
          </div>
          <div className='col-3 col'>
            <div className='infoPrice'>Nuevo - 234 vendidos</div>
            <h2 className='titlePrice'>Deco Reverse Sombrero Oxford</h2>
            <h1 className='detailPrice'>$ 1.980</h1>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in felis tincidunt, volutpat neque eget, maximus eros. Pellentesque placerat nibh et tortor blandit, non sollicitudin ipsum consectetur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris eleifend, magna ac luctus maximus, nibh nisi eleifend felis, eget rutrum tellus massa eget nibh. Fusce a mi a sem interdum tincidunt eget vitae ante. In hac habitasse platea dictumst. Pellentesque bibendum sit amet tellus sollicitudin efficitur. Sed feugiat justo et justo mattis bibendum vel vitae nisi. Donec lacinia mollis eros, nec tristique massa dictum a. Suspendisse id felis efficitur, placerat lacus eget, ornare leo. Nam porttitor mollis pretium. Nunc tempor tortor vehicula sapien finibus posuere. Sed tempor, dolor sit amet congue aliquet, tellus lorem lacinia sapien, malesuada tempor mi libero et arcu. Phasellus volutpat lectus facilisis semper tempor. Vestibulum et ullamcorper dui, et malesuada lacus.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;