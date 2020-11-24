const incrementReducer = (state = 0, actions) => {
    switch (actions.type) {
        case 'INCREMENT':
            return state + actions.payload;
        case 'DECREMENT':
            return state - actions.payload;
        default:
            return state;
    }
}

export default incrementReducer;