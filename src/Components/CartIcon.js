import React from 'react';
import { useCart } from 'react-use-cart';

function CartIcon() {
  const { totalItems } = useCart();

  return (
    <div>
      Cart <span className='item-count'>{totalItems}</span>
    </div>
  );
}

export default CartIcon;