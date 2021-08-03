export const BASE = 'dig/reducer/load'

export const SET_PRODUCTS_LOADING = BASE + '/products';
export const SET_PRODUCT_COMMENTS_LOADING = BASE + '/product/comments';

const initialState = {
    products: false,
    comments: false,
}

export default loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_LOADING:
            console.log(`loading products:`, action.payload)
            return {
                ...state,
                products: action.payload
            }
        case SET_PRODUCT_COMMENTS_LOADING:
            console.log(`loading comments:`, action.payload)
            return {
                ...state,
                comments: action.payload
            }
        default:
            return state;
    }
}

export const setProductsLoading = (payload) => {
    return {
        type: SET_PRODUCTS_LOADING,
        payload
    }
}

export const setCommentsLoading = (payload) => {
    return {
        type: SET_PRODUCT_COMMENTS_LOADING,
        payload
    }
}
