import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";



const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength,setDataLength] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    console.log(jobs);
    return (
        <div className="my-10 ">
            <div className="text-center">
                <h2 className="text-5xl font-medium">Featured Jobs</h2>
                <p className="font-light my-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    jobs.slice(0,dataLength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
           <div className={dataLength===jobs.length ? 'hidden':'text-center my-10'}>
            <button 
            onClick={()=>setDataLength(jobs.length)}
            className="btn btn-primary">Show all jobs</button>
           </div>
        </div>
    );
};

export default FeaturedJobs;