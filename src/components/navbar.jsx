import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getDataAction, searchAction, setMessage} from "../redux/actions";


const Navbar = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.reducer.data);
    const searchData = useSelector(state => state.reducer.searchData);
    const [value, setValue] = useState("");
    const [newMessage, setNewMessage] = useState("");
    const [clickedPerson, setClickedPerson] = useState({});

    const handleChange = (e) => {
        setValue(e.target.value);
        dispatch(searchAction(e.target.value))
    };

    const handleClick = (person) => {
        setClickedPerson(person);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setMessage(clickedPerson.id, newMessage));
        setNewMessage('')
    };

    useEffect(() => {
        dispatch(getDataAction());
    }, []);

    useEffect(() => {
        if (data) (
            setClickedPerson(data.find(item => item.id === clickedPerson.id) || {})
        )
    }, [data, clickedPerson.id]);

    return (
        <div className="messenger">
            <div className="scrollable sidebar">
                <div className="conversation-list">
                    <div className="toolbar">
                        <h1 className="toolbar-title">Sceyt</h1>
                        <div className="right-items">
                        </div>
                    </div>
                    <div className="conversation-search"><input type="search" name="search"
                                                                className="conversation-search-input"
                                                                value={value}
                                                                placeholder="Search Messages"
                                                                onChange={handleChange}/>
                    </div>
                    {
                        searchData && searchData.length ? searchData.map((item, i) =>
                            <div key={i}>
                                <div className="conversation-list-item" onClick={() => handleClick(item)}
                                ><img className="conversation-photo"
                                      src={item.photo}
                                      alt={item.name}
                                />
                                    <div className="conversation-info"><h1
                                        className="conversation-title">{item.name}</h1></div>
                                </div>
                            </div>
                        ) : ""
                    }

                </div>
            </div>
            <div className="scrollable content">
                <div className="message-list">
                    <div className="message   end">
                        <h3>{clickedPerson.name}</h3>
                        {
                            clickedPerson.message ?
                                <div className="bubble-container">
                                    <div className="bubble" title="Sunday, February 21, 2021 12:18 PM">
                                        {clickedPerson.message}
                                    </div>
                                </div> : ""
                        }
                    </div>

                    <div className="message-list-container">
                        <div className="message mine start end">
                            {
                                clickedPerson.sentMessage ? clickedPerson.sentMessage.map((item, i) => {
                                        return <div key={i} className="bubble-container">
                                            <div className="bubble"
                                                 title="Sunday, February 21, 2021 12:18 PM">{item}
                                            </div>
                                        </div>
                                    })
                                    : ""
                            }

                        </div>
                        {
                            clickedPerson.id ?
                                <div className="compose">
                                    <form onSubmit={handleSubmit}>
                                        <input type="text" className="compose-input" value={newMessage}
                                               placeholder="Type a message, @name"
                                               onChange={(e) => clickedPerson.id && setNewMessage(e.target.value)}/>
                                        <button className="submit-btn" onClick={handleSubmit}>send</button>
                                    </form>
                                </div> : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;