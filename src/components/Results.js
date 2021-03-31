import React from 'react';
import JobItem from './JobItem';
// loop through results array and pass data into JobItem for display
const Results = ({ results }) => {
    return (
        <div className="search-results">
            {results.map((job, index) => (
                <JobItem key={job.id} {...job} index={index} />
            ))}
        </div>
    );
};

export default Results;