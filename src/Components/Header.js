import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';



const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color: 'white',
    objectFit: 'contain',
  },
}));

export default function Header() {

  const [{ basket, user }] = useStateValue();
  //console.log(basket);

  const submitHandler = () => {
    if(user) {
      auth.signOut();
    }
  }

  const classes = useStyles();

  return (
    <div className='header'>
      <AppBar position="static">
        <Toolbar>
        <Link to='/'>
          <Typography variant="h6" className={classes.title}>
            LOGO
          </Typography>
        </Link>
        <div className='headersearch'>
            <input type='text' className='headersearchInput' />
            <SearchIcon className='headersearchIcon' />
         </div>

        <div className='headernav'>
            <Link to={!user && '/login'} className='headerlink'>
                <div onClick={submitHandler} className='headeroption'>
                    <span className='headeroptionOne'>Hello {user?.email}</span>
                    <span className='headeroptionTwo'>{user ? 'Sign out' : 'Sign in'}</span>
                </div>
            </Link>

            <Link to='/' className='headerlink'>
                <div className='headeroption'>
                    <span className='headeroptionOne'>Returns</span>
                    <span className='headeroptionTwo'>& Orders</span>
                </div>
            </Link>

            <Link to='/checkout' className='headerlink'>
                <div className='basket'>
                    <ShoppingBasketIcon />
                    <span className='headeroptionTwo basketCount'>{basket?.length}</span>
                </div>
            </Link>

        </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
