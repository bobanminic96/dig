export const BASE = 'dig/reducer/products'

export const ADD_PRODUCTS = BASE + '/add';

const initialState = {
    products: [],
}

export default productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS:
            console.log(`adding products:`, action.payload)
            return {
                ...state,
                products: action.payload
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
