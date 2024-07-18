import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../Utilities/LocalStorage";
import { useLoaderData } from "react-router-dom";
import AppliedJobCard from "../AppliedJobCard/AppliedJobCard";
const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    };

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            console.log(jobs, storedJobIds, jobsApplied);
        }
    }, [jobs]);
    return (
        <div className="mt-12">
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
                <details className="dropdown">
                    <summary className="btn bg-gradient-to-r from-indigo-500 to-blue-400 text-white">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52">
                        <li onClick={() => handleJobsFilter('all')}><a className="font-bold text-lg">All</a></li>
                        <li onClick={() => handleJobsFilter('remote')}><a className="font-bold text-lg">Remote</a></li>
                        <li onClick={() => handleJobsFilter('onsite')}><a className="font-bold text-lg">onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="">
            {
                displayJobs.map((job) => (
                    <AppliedJobCard key={job.id} job={job}></AppliedJobCard>
                ))
            }
            </div>
        </div>
    );
};



export default AppliedJobs;