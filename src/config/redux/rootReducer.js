import { combineReducers } from 'redux';
import loadReducer from '../../store/reducers/loadReducer';
import productsReducer from '../../store/reducers/productsReducer';

export default combineReducers({
    loadReducer,
    productsReducer,
})