import axios from 'axios';
import moment from 'moment';
import { BASE_API_URL } from '../utils/constants';
import { setErrors } from './errors';

// Get JSON Job Data with API call to Express Server in Node.
export const initiateGetJobs = (data) => {
    return async (dispatch) => {
        try {
            let { description, full_time, location, page } = data;
            description = description ? encodeURIComponent(description) : '';
            location = location ? encodeURIComponent(location) : '';
            full_time = full_time ? '&full_time=true' : '';
            
            if (page) {
                page = parseInt(page);
                page = isNaN(page) ? '' : `&page=${page}`;
            }

            const jobs = await axios.get(
                `${BASE_API_URL}/jobs?description=${description}&location=${location}${full_time}${page}`
            );
            const sortedJobs = jobs.data.sort(
                (a, b) =>
                    moment(new Date(b.created_at)) - moment(new Date(a.created_at))
            );
            return dispatch(setJobs(sortedJobs));
        }   catch (error) {
            error.response && dispatch(setErrors(error.response.data));
        }
    };
};

// When Data Received, dispatch to redux store using jobs reducer
export const setjobs = (jobs) => ({
    type: 'SET_JOBS',
    jobs
});

// enable load more jobs option from jobs reducer
export const setLoadMoreJobs = (jobs) => ({
    type: 'LOAD_MORE_JOBS',
    jobs
});