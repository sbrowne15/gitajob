import React, { useContext } from 'react';
import JobItem from './JobItem';
import JobsContext from '../context/jobs';
// loop through results array and pass data into JobItem for display
const Results = () => {
    const { results } = useContext(JobsContext);
    return (
        <div className="search-results">
            {results.map((job, index) => (
                <JobItem 
                    key={job.id} 
                    {...job} 
                    index={index}                     
                />
            ))}
        </div>
    );
};

export default Results;