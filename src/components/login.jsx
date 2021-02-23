import React, {useState} from 'react';
import {Link} from "react-router-dom";
import MainLogo from '../img/logo.png';
import {useDispatch} from "react-redux";
import {getValue} from "../redux/actions";

const Login = () => {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    return (
        <div className='login'>
            <div className='main-logo'><img src={MainLogo} alt="logo"/></div>
            <form className='login-form'>
                <h2>Getting Started </h2>
                <p>Just enter your username, click connect button and start</p>
                <input placeholder='Enter username' type='email' value={value}
                       onChange={e => setValue(e.target.value)}/>
                <Link className={`${value ? 'connect-link' : 'disabled'}`} to='/chats' onClick={()=>dispatch(getValue(value))}> Connect </Link>
            </form>
        </div>
    );
};

export default Login;