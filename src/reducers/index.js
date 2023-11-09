import { combineReducers } from 'redux';
import DataReducer from './DataReducer'


const allReducers = combineReducers({
    data: DataReducer,
});

export default allReducers;