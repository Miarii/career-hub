import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getStoredJobApplication } from "../../utilities/localstorage";

const AppliedJob = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/job/${id}`);
  };

  const handleJobFilter = (filter) => {
    switch (filter) {
      case 'all':
        setDisplayJobs(appliedJobs);
        break;
      case 'remote':
        setDisplayJobs(appliedJobs.filter(job => job.remote_or_onsite === 'Remote'));
        break;
      case 'onsite':
        setDisplayJobs(appliedJobs.filter(job => job.remote_or_onsite === 'Onsite'));
        break;
      default:
        setDisplayJobs(appliedJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = storedJobIds
        .map(id => jobs.find(job => job.id === id))
        .filter(Boolean);

      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Applied Jobs ({appliedJobs.length})</h2>

      <div className="mb-6">
        <details className="dropdown">
          <summary className="btn btn-primary">Filter Jobs</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><button className="w-full text-left p-2 hover:bg-gray-100" onClick={() => handleJobFilter('all')}>All Jobs</button></li>
            <li><button className="w-full text-left p-2 hover:bg-gray-100" onClick={() => handleJobFilter('remote')}>Remote Jobs</button></li>
            <li><button className="w-full text-left p-2 hover:bg-gray-100" onClick={() => handleJobFilter('onsite')}>Onsite Jobs</button></li>
          </ul>
        </details>
      </div>

      <ul className="space-y-4">
        {displayJobs.map(job => (
          <li key={job.id} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src={job.logo} alt={`${job.company_name} logo`} className="max-w-full max-h-full object-contain p-2" />
              </div>

              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">{job.job_title}</h3>
                    <p className="text-gray-600 text-lg">{job.company_name}</p>
                    <div className="flex gap-3 mt-2">
                      <span className="px-4 py-1 border border-blue-500 text-blue-500 rounded-full text-sm">
                        {job.remote_or_onsite}
                      </span>
                      <span className="px-4 py-1 border border-blue-500 text-blue-500 rounded-full text-sm">
                        {job.job_type}
                      </span>
                    </div>
                    <div className="flex gap-6 mt-3 text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    <div className="mt-3 text-gray-600">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <span>{job?.contact_information?.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span>{job?.contact_information?.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>{job?.contact_information?.address}</span>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => handleViewDetails(job.id)} className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
   </div>
  );
};

export default AppliedJob;