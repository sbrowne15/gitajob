const errorsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ERRORS':  //add API error if any into the redux store
            return {
                error: action.error
            };  
        case 'RESET_ERRORS':  //remove error object from redux store if no error
            return {};
        default:
            return state;
    }
};

export default errorsReducer;