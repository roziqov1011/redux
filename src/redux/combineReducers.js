const combineReducers = (reducers) => {
    const reducerKeys = Object.keys(reducers)
    
    return (state = {}, action) => {
        let hasChanged = false
        const nextState = {}
        
        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i]
            const reducer = reducers[key]
            const prevStateForkey = state[key]
            const nextStateForkey = reducer(prevStateForkey, action)
            
            nextState[key] = nextStateForkey
            hasChanged = hasChanged || nextStateForkey !== prevStateForkey
        }
        hasChanged = hasChanged || reducerKeys.length !== Object.keys(state)
        
        return hasChanged ? nextState : state
    }
}

export default combineReducers;