import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const AppliedJobCard = ({job}) => {
    const { id, logo, job_title, company_name, remote_or_onsite, salary, location } = job;

    return (
        <div key={id} className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
            <div className="flex flex-col md:grid md:grid-cols-12 gap-8">

                <div className="col-span-8 my-8 flex gap-x-8">
                    <div className="flex items-center justify-center">
                        <figure><img src={logo} alt="" /></figure>
                    </div>

                    <div className="">
                        <h1 className="font-bold text-3xl mt-6">{job_title}</h1>
                        <h1 className="font-semibold text-indigo-500">@{company_name}</h1>
                        <div className="w-1/3">
                            <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-400 p-2 rounded-xl">{remote_or_onsite}</p>
                        </div>
                        <div className="mt-4 flex">
                            <h2 className="flex mr-4 text-lg">📍 {location}</h2>
                            <h2 className="flex text-lg">💲 {salary}</h2>
                        </div>
                    </div>
                </div>


                <div className="col-span-4 my-8 flex flex-col sm:items-center md:items-end justify-center ">
                <div className="card-actions">
                    <Link to={`/job/${id}`} state={job}>
                        <button className="btn bg-gradient-to-r from-indigo-500 to-blue-400 text-white">View Details</button>
                    </Link>
                </div>
                   

                </div>

            </div>
            <hr />

        </div>
    );
};


AppliedJobCard.propTypes = {
    job: PropTypes.object.isRequired,
    handleApplyJob: PropTypes.func.isRequired,
}

export default AppliedJobCard;