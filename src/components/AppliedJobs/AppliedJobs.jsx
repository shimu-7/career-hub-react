import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])


    const handleJobsFilter = filter =>{

        if(filter==='all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter==='remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite==='Remote');
            setDisplayJobs(remoteJobs);
        }
        else{
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite==='Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }


    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (storedJobIds.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            console.log(jobsApplied, storedJobIds);
        }
    }, [jobs])

    return (
        <div>
            <h2>Jobs I applied</h2>
            <div className="flex justify-end">
                <details className="dropdown mb-32">
                    <summary className="m-1 btn">filter by</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={()=>handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={()=>handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid gap-9">
                {
                    displayJobs.map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;