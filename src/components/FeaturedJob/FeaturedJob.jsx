
import PropTypes from 'prop-types';

import { MdLocationOn, MdCurrencyExchange } from "react-icons/md";
import { Link } from 'react-router-dom';

const FeaturedJob = ({ job }) => {
    const { logo,id, job_title,  company_name, remote_or_onsite, location, job_type, salary} = job;
    // job_description, job_responsibility, educational_requirements, experiences,contact_information




    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className='w-40 h-9'  src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className='px-5 py-2 font-extrabold border rounded mr-4'>{remote_or_onsite}</button>
                        <button className='px-5 py-2 font-extrabold border rounded'>{job_type}</button>
                    </div>
                    <div className='mt-4 flex gap-24'>
                        <h2 className='flex mr-2'><MdLocationOn className='text-2xl'></MdLocationOn>{location}</h2>
                        <h2 className='flex mr-2'><MdCurrencyExchange className='test-2xl'></MdCurrencyExchange>{salary}</h2>
                    </div>
                    <div className="card-actions justify-start">
                        <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

FeaturedJob.propTypes = {
    job: PropTypes.object
}

export default FeaturedJob;