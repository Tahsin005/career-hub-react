import { Link, useLocation, useParams } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const JobDetails = () => {
    const params = useParams();
    const { state } = useLocation();
    const { id, logo, job_title, company_name, job_description, job_responsibility, remote_or_onsite, job_type, salary, educational_requirements, experiences, contact_information } = state;

    console.log(state);
    return (
        <div key={id || params.jobId} className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
            <h1 className="font-bold text-4xl text-center my-12">Job Details</h1>
            <hr />
            <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-8">

                <div className="col-span-8 my-8">
                    <figure><img src={logo} alt="" /></figure>
                    <h1 className="font-bold text-3xl mt-6">{job_title}</h1>
                    <h1 className="font-semibold text-indigo-500">{job_type}</h1>
                    <h1>@{company_name}</h1>
                    <h1><strong>Reponsibilities: </strong>{job_responsibility}</h1>

                    <p><strong>Description: </strong>{job_description}</p>
                    <p className="text-lg font-semibold">☎️: {contact_information.phone}</p>
                    <p className="text-lg font-semibold">📩: {contact_information.email}</p>
                    {/* <div className="flex font-semibold">
                        <h2 className="flex mr-4 text-lg"><MdLocationOn className="text-lg mr-2 mt-1"></MdLocationOn> {contact_information.address}</h2>
                    </div> */}
                    
                    <p>{educational_requirements}</p>
                    <p><span className="text-red-500 font-semibold">Experience:</span> {experiences}</p>
                </div>


                <div className="col-span-4 my-8 flex flex-col items-start justify-center">
                    <div className="w-1/3">
                    <p className="bg-gradient-to-r from-indigo-500 to-blue-400 text-white p-2 rounded-xl">{remote_or_onsite}</p>
                    </div>
                    <div className="mt-4 flex">
                        <h2 className="flex mr-4 text-xl"><MdLocationOn className="text-3xl mr-2 mt-1"></MdLocationOn> {contact_information.address}</h2>
                    </div>
                    <div className="mt-4 flex">
                        <h2 className="flex text-xl"> <AiOutlineDollar className="text-2xl mt-1"></AiOutlineDollar> {salary}</h2>
                    </div>
                    <div className="card-actions mt-4">
                        <Link>
                            <button className="btn bg-gradient-to-r from-indigo-500 to-blue-400 text-white">Apply Now!!</button>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default JobDetails;