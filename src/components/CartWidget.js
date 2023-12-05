import React from 'react';

function CartWidget({ itemCount }) {
  return (
    <div className="cart-widget">
      <span style={{ fontSize: '50px' }}>🛒</span> {itemCount > 0 && <span 
      className="badge badge-pill badge-primary">{itemCount}</span>}
    </div>
  );
}

export default CartWidget;