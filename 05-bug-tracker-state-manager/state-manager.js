
var StateManager = (function(){
	var _currentState = undefined,
		_reducer = undefined,
		_listeners = [],
		_init_action = '@@INIT_ACTION';

	function getState(){
		return _currentState;
	}

	function subscribe(listenerFn){
		if (typeof listenerFn === 'function')
			_listeners.push(listenerFn);
	}

	function triggerChange(){
		_listeners.forEach(listenerFn => listenerFn());
	}

	function dispatch(action){
		var _newState = _reducer(_currentState, action);
		if (_newState === _currentState) return;
		_currentState = _newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = reducer(_currentState, _init_action);
		return {
			getState : getState,
			dispatch : dispatch,
			subscribe : subscribe
		}
	}
	function bindActionCreators(actionCreators, dispatch){
		let result = {};
		for(let key in actionCreators){
			result[key] = function(){
				let action = actionCreators[key].apply(undefined, arguments);
				dispatch(action);
			}
		}
		return result;
	}
	return {
		createStore : createStore,
		bindActionCreators : bindActionCreators
	};
})();