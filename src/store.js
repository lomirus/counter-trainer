import { createStore } from 'redux';

const reducer = (state = { mode: 'Practice', type: 'Number' }, action) => ({
    mode: action.type === "CHANGE_MODE" ? action.payload : state.mode,
    type: action.type === "CHANGE_TYPE" ? action.payload : state.type
})

const store = createStore(reducer)

export { store };
