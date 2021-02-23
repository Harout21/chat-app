import * as actions from './actionTypes';

const initialState = {
    value: '',
    data: [],
    searchData: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_Value:
            return {
                value: action.payload

            };
        case actions.GET_DATA:
            return {
                ...state,
                data: action.payload,
                searchData:action.payload
            };
        case actions.SEARCH:
            return {
                ...state,
                searchData: state.data.filter((item) => item.name.toLowerCase().includes(action.payload)),
            };
        case actions.SET_MESSAGE:
            return {
                ...state,
                data: state.data.map((item) => {
                    if (item.id === action.payload.id) {
                        return {...item, sentMessage: [...item.sentMessage, action.payload.message]}
                    }
                    return item
                }),
            };
        default:
            return state
    }
};
