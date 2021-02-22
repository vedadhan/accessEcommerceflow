import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';


function CheckoutProduct({ id, title, image, price, rating}) {

    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }

    return (
        <div className='CheckoutProduct'>
            <img src={image} alt='' className='CheckoutProductImage' />

            <div className='CheckoutProductInfo'>
                <p className='CheckoutProductInfoTitle'>{title}</p>
                <p className='CheckoutProductInfoPrice'><small>₹</small><strong>{price}</strong></p>
                <div className='productrating'>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="read-only" value={rating} readOnly size='small' className='ratingscale' />
                        {Array(rating).fill().map((_,i) => (<p key={id}></p>))}
                    </Box>
                </div> 
                <div className='removebutton'>
                    <Button variant="contained" color="primary" onClick={removeFromBasket}>
                        Remove Item
                    </Button>
                </div>
            </div>  
        </div>
       
    )
}

export default CheckoutProduct;
