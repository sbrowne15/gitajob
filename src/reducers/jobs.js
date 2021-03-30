const jobsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_JOBS':
            return action.jobs;  //Add new job data from API 
        case 'LOAD_MORE_JOBS':
            return [...state, ...action.jobs];  //Get more job postings and add to array using spread operator
        default:
            return state;
    }
};

export default jobsReducer;