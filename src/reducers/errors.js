const errorsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ERRORS':
            return {
                error: action.error
            };
        case 'RESET_ERRORS':
            return {};
        default:
            returnstate;
    }
};

export default errorsReducer;