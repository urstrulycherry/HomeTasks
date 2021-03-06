import { UPDATE_MY_ADDRESS, ADD_TO_CART, ADD_ORDER, EMPTY_CART } from '../actions/ActionTypes';
const initialState = {
    cart: [],
    orders: [],
    address: {
        'HNo': '1-1',
        'Street': 'Xyz',
        'City': 'Hyd',
        'ZipCode': '11111'
    }
};
const StoreReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case ADD_ORDER:
            return {
                ...state,
                orders: [...state.orders, ...action.payload]
            };
        case UPDATE_MY_ADDRESS:
            return {
                ...state,
                address: action.payload
            };
        case EMPTY_CART:
            return {
                ...state,
                cart: []
            };
        default:
            return state;
    }
};
export default StoreReducer;
