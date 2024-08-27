import '../App.css'

const JobsCard = ({ job }) => {
    return (
        <>
           <div className="job-container">
            <div className="job-card">
                <div className="job-header">
                    <span className="date">{job.date}</span>
                    <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
                
                <h3>{job.title}</h3>
                <div className="details">
                    <p className="company">{job.company} - {job.location}</p>
                    <div className="tags">
                        {job.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                    </div>
                </div>
                <div className="footer">
                    <p className="salary">{job.salary}</p>
                    <button>Details</button>
                </div>
            </div>

            </div>


        </>
    );
};


export default JobsCard;