1. 
    ````javascript
    import { combineReducers, createStore } from 'redux'
    let reducer = combineReducers({ visibilityFilter, todos })
    let store = createStore(reducer)
    ````