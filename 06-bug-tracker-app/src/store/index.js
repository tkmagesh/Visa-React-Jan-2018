import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugTracker/reducers';
import spinnerReducer from '../spinner/reducers';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

let appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;