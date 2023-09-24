import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage.js";

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams();
    const job = jobs.find(job => job.id == id)
    const { job_description, job_responsibility, educational_requirements, experiences } = job
    console.log(jobs, id, job);
    const notify = () => {

        saveJobApplication(id);
        toast("You have applied successfully");
    }
    return (
        <div>
            <div className="text-center">< h1 className="text-3xl" >Job Details of <span className="font-medium">{job.job_title}</span></h1></div>
            <div className="grid gap-4 grid-cols-4 my-9">
                <div className="border md:col-span-3 p-6 ">
                    <h2><span className="font-medium">Job Description: </span>{job_description}</h2>
                    <h2><span className="font-medium">Job Responsibility: </span>{job_responsibility}</h2>
                    <h2><span className="font-medium">Educational Requirement: </span>{educational_requirements}</h2>
                    <h2><span className="font-medium">Experiences: </span>{experiences}</h2>
                </div>
                <div className="border p-6 w-full">
                    <h2 className="text-2xl font-bold">Contact info:</h2>
                    <button onClick={notify} className="btn btn-primary">Apply now</button>
                </div>

                <ToastContainer />

            </div>
        </div>
    );
};

export default JobDetails;