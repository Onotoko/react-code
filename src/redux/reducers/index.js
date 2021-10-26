import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import API from './API'

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    api: API
});

export default reducers;