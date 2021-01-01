import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    const totalPopulation = cart.reduce((sum, item) => sum + item.population, 0)
    return (
        <div>
            <h2>Total Added : {cart.length}</h2>
            <h5>Total Population Added : {totalPopulation}</h5>

        </div>
    );
};

export default Cart;