import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // this is not the best way to load show all data
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div id="jobs" className="mt-24 mb-20">
      <h1 className="text-center font-bold text-3xl md:text-4xl">
        Featured Jobs
      </h1>
      <p className="text-center text-sm my-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <hr />

      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.slice(0, dataLength).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
        <div className="flex items-center justify-center mt-12">
          <div className={dataLength === jobs.length ? "hidden" : ""}>
            <button
              onClick={() => setDataLength(jobs.length)}
              className="btn text-white bg-gradient-to-r from-indigo-500 to-blue-400"
            >
              Show All Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
