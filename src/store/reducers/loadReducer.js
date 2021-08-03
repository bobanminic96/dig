export const BASE = 'dig/reducer/load'

export const SET_PRODUCTS_LOADING = BASE + '/products';

const initialState = {
    products: false,
}

export default loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_LOADING:
            console.log(`loading products:`, action.payload)
            return {
                ...state,
                products: action.payload
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
