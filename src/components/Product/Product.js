import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Product.css';

function Product({ title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log('basket...', basket);
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className='product__rating'>
          {Array(rating).fill().map((_, i) => (
            <p>🌟</p>

          ))}

        </div>
      </div>

        <img
          src={image}
          alt=""
        />

      <button onClick = {addToBasket} >Add to Busket</button>
    </div>
  )
}

export default Product