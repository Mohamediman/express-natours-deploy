import {CREATE_BOOKING, BOOKING_SUCCESS, BOOKING_ERROR, GET_BOOKINGS
    } from './../actions/types';

const initialState = {
    toursBooked: null
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_BOOKINGS:
            return {
                ...state,
                toursBooked: action.payload
            }
        default:
            return state;
    }
}