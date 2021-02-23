import * as actions from './actionTypes'
import axios from "axios";

export const getValue = (data) => {
    return {
        type: actions.GET_Value,
        payload: data
    }
};
export const getData = (data) => {
    return {
        type: actions.GET_DATA,
        payload: data
    }
};
export const setMessage = (id, newMessage) => {
    return {
        type: actions.SET_MESSAGE,
        payload: {id: id, message: newMessage}
    };
};
export const searchAction = (search) => {
    return {
        type: actions.SEARCH,
        payload: search
    };
};


export const getDataAction = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('messages.json');
            dispatch(getData(res.data.messages));
        } catch (err) {
            console.log(err);
        }
    }
};