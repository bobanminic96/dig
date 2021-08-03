export const BASE = 'dig/reducer/products'

export const ADD_PRODUCTS = BASE + '/add';
export const SET_ACTIVE_PRODUCT = BASE + '/set-active';
export const SET_ACTIVE_COMMENTS = BASE + '/comments';

const initialState = {
    products: [],
    activeProduct: {},
    activeProductComments: []
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
            return {
                ...state,
                activeProduct: action.payload
            }
        case SET_ACTIVE_COMMENTS:
            return {
                ...state,
                activeProductComments: action.payload
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

export const addCommentsToReducer = (payload) => {
    return {
        type: SET_ACTIVE_COMMENTS,
        payload
    }
}
