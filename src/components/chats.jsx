import React from 'react';
import Navbar from "./navbar"
import {useSelector} from "react-redux";

const Chats = () => {
    const value = useSelector(state => state.reducer.value);

    return (
        <div className="chats">
            <div className="profileImage"><span className="firstName">{value[0].toUpperCase()}</span></div>
            <span className="user-name">{value.toUpperCase()}</span>
            <Navbar/>
        </div>
    );
};

export default Chats;