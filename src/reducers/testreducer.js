const testReducer = (state = 0, actions) => {
    switch (actions.type) {
        case 'ONE':
            return state + 1;
        case 'TWO':
            return state - 1;
        default:
            return state;
    }
}

export default testReducer;