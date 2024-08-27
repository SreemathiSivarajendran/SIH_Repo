
import {jobData} from "../jobsData"
import JobsCard from "./JobsCard"

const JobList = () => {
   

    return(
        <>
            <div className="job-list">
                {jobData.map(job => (
                    <JobsCard key={job.id} job={job} />
                ))}
            </div>

        </>
    );
};

export default JobList;