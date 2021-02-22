import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import './Checkout.css';

function Checkout() {
    
    const [{ basket }] = useStateValue();

    return (
        <div className='checkout'>
            {basket?.length === 0 ? (
                <div><h2> Please add some item in your cart.</h2></div>
            ) : (
                <div className='checkoutTitle'> <h2>Your shopping Basket.</h2>
                {basket?.map(item => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
                
                </div>
            )}

            {basket.length > 0 && (
                <div className='checkoutright'>
                    <h1>Subtotal</h1>
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout;
