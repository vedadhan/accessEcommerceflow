import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import './Product.css';
import { useStateValue } from './StateProvider';


function Product({ id, title, image, price, rating }) {

    
const [{ basket }, dispatch] = useStateValue();

const addToBasket = () => {
    dispatch({
        type: 'ADD_TO_BASKET',
        item:{
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating
        }
    });
};


    return (
        <div className='product'>
            <div className='productinfo'> 
            <p>{title}</p>
            <p className='productprice'><span>₹</span><strong>{price}</strong></p>
            <div className='productrating'>
            <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="read-only" value={rating} readOnly size='small' className='ratingscale' />
                {Array(rating).fill().map((_) => (<p></p>))}
            </Box>
            </div>   
            </div>
            
            <img src={image} alt='' />    
            <Button variant="contained" color="primary" onClick={addToBasket}>
              Add To Cart
            </Button>
        </div>
    )
}

export default Product;
