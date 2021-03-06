import React from 'react';

import { CartItemContainer, CartImgImage, ItemDetailsContainer, } from './cart-item.styles.jsx'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartImgImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
