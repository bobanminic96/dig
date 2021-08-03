export const BASE = 'dig/reducer/products'

export const ADD_PRODUCTS = BASE + '/add';
export const SET_ACTIVE_PRODUCT = BASE + '/set-active';

const initialState = {
    products: [],
    activeProduct: {}
}

export default productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            console.log(`adding products:`, action.payload.length)
            return {
                ...state,
                products: action.payload
            }
        case SET_ACTIVE_PRODUCT:
            console.log(`active product:`, action.payload)
            return {
                ...state,
                activeProduct: action.payload
            }
        default:
            return state;
    }
}

export const addProductsToReducer = (payload) => {
    return {
        type: ADD_PRODUCTS,
        payload
    }
}
