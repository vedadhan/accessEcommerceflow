import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <Fragment>
                        <p>
                            Subtotal ({basket.length} items) 
                        </p>
                        
                    </Fragment>
                )}



                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            
            />

            <Button variant="outlined" color="secondary">
                Proceed to checkout
            </Button>
        </div>
    );
}

export default Subtotal;
