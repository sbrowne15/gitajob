import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { initiateGetJobs } from '../actions/jobs';
import { resetErrors } from '../actions/errors';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import JobDetails from './JobDetails';

//Declare State variables and have useState hook store API result to array, flag for loading, and object for error

const HomePage = (props) => {
    const [results, setResults] = useState([]);
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [jobId, setJobId] = useState(-1);
    const [page, setPage] = useState('home');

    //useEffect hook gets list of jobs and any errors
    useEffect(() => {
        setResults(props.jobs);
    }, [props.jobs]);

    useEffect(() => {
        setErrors(props.errors);
    }, [props.errors]);

    const loadJobs = (selection) => {
        const { dispatch } = props;
        const { description, location, full_time, page = 1 } = selection;
        dispatch(resetErrors());
        setIsLoading(true);
        dispatch(initiateGetJobs({ description, location, full_time, page }))
            .then(() => {
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    };

    const handleSearch = (selection) => {
        loadJobs(selection);
    };

    const handleItemClick = (jobId) => {
        setPage('details');
        setJobId(jobId);
    };

    const handleResetPage = () => {
        setPage('home');
    };

    // When details page clicked, filter job from results array and pass to JobDetails component
    let jobDetails = {};
    if (page === 'details') {
        jobDetails = results.find((job) => job.id === jobId);
    }

     return (
        <div>
            <div className={`${page === 'details' && 'hide'}`}>
                <Header />
                <Search onSearch={handleSearch} />
                {!_.isEmpty(errors) && (
                <div className="errorMsg">
                    <p>{errors.error}</p>
                </div>
                )}
                {isLoading && <p className="loading">Loading...</p>}
                <Results results={results} onItemClick={handleItemClick} />
            </div>
            <div className={`${page === 'home' && 'hide'}`}>
                <JobDetails details={jobDetails} onResetPage={handleResetPage} />
            </div>
        </div>
  );
};

//Make data available in props
const mapStateToProps = (state) => ({
    jobs: state.jobs,
    errors: state.errors
});

// pass mapStateToProps using react-redux's connect() funtion
export default connect(mapStateToProps)(HomePage);