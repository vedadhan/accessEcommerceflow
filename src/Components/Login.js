import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            history.push('/');
        }).catch(e => alert(e.message));

    }

    const registerHandler = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            history.push('/');
        }).catch(e => alert(e.message));

    }




    return (
        <div className='login'>
            <Link to='/'>
               <img className='loginlogo' src='https://images-na.ssl-images-amazon.com/images/I/71ZVyfMEZ2L._SL1500_.jpg' alt='' />
            </Link>

            <div className='logincontainer'>
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type='email' required />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type='password' required /> <br /> <br />
                    <button type='submit' onClick={submitHandler} className='loginSignbutton'>SignIn</button> &nbsp;&nbsp;&nbsp;<button type='submit' onClick={registerHandler}>create new Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
