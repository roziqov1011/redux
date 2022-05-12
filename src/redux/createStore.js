import {ActionTypes} from './actionTypes'

const createStore = (reducer)=>{
    let currentReducer = reducer
    let currentState = undefined
    let currentListeners = []


    const getState = ()=>{
        return currentState
    }
    const dispatch = (action)=>{
        currentState = currentReducer(currentState, action)
        const listeners = currentListeners

        for(let i = 0; i< listeners.length; i++){
            const listener = listeners[i]
            listener()
        }
    }

    const subscribe = (listener)=>{
        let isSubscribed = true
        currentListeners.push(listener)

        return ()=>{
            if(!isSubscribed){
                return;
            }
             
            isSubscribed = false
            const index = currentListeners.indexOf(listener)
            currentListeners.slice(index, 1)
        }
    }

    dispatch({type: ActionTypes.INIT})
    const store = {
        getState,
        dispatch,
        subscribe
    }

    return store
}

export default createStore