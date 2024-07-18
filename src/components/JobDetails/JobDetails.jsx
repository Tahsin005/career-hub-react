import { useLocation, useParams } from "react-router-dom";
import { saveJobApplication } from "../../Utilities/LocalStorage";

const JobDetails = () => {
  const params = useParams();
  const { state } = useLocation();
  const {
    id,
    logo,
    job_title,
    job_description,
    job_responsibility,
    salary,
    educational_requirements,
    experiences,
    contact_information,
  } = state;

  const handleApplyJob = (id) => {
    if (saveJobApplication(id)) {
      alert("Applied successfully");
    } else {
      alert("Already applied for this job");
    }
  };
  return (
    <div
      key={id || params.jobId}
      className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24"
    >
      <h1 className="font-bold text-4xl text-center my-12">Job Details</h1>
      <hr />
      <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-8">
        <div className="col-span-8 my-8">
          <figure>
            <img src={logo} alt="" />
          </figure>

          <p className="mt-3 my-3">
            <strong>Job Reponsibilities: </strong>
            {job_responsibility}
          </p>

          <p className="my-3">
            <strong>Job Description: </strong>
            {job_description}
          </p>

          <p className="font-bold my-3">Educational Requirements</p>
          <p>{educational_requirements}</p>

          <p className="font-bold my-3">Experience:</p>
          <p>{experiences}</p>
        </div>

        <div className="col-span-4 my-8 flex flex-col items-start justify-center w-full">
          <div className=" bg-[#EFECFF] p-6 rounded-xl w-full">
            <h1 className="font-bold text-xl">Job Details</h1>
            <div>
              <p className="text-lg mt-3">
                💲<span className="font-semibold">Salary: </span> {salary}
              </p>
              <p className="text-lg">
                <span className="font-semibold">🗓️ Job Title: </span>
                {job_title}
              </p>
            </div>

            <div className="mt-3">
              <h1 className="font-bold text-xl">Contact information</h1>
            </div>

            <div className="mt-3">
              <p className="text-lg">
                ☎️ <span className="font-semibold">Phone: </span>{" "}
                {contact_information.phone}
              </p>
              <p className="text-lg">
                📩 <span className="font-semibold">Email: </span>{" "}
                {contact_information.email}
              </p>
              <p className="text-lg">
                📍 <span className="font-semibold">Address: </span>
                {contact_information.address}
              </p>
            </div>
          </div>

          <div className="mt-4 w-full">
            <button
              onClick={() => handleApplyJob(id)}
              className="btn bg-gradient-to-r from-indigo-500 to-blue-400 text-white w-full"
            >
              Apply Now!!
            </button>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default JobDetails;
