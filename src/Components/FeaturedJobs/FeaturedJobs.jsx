import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }
        return res.json();
      })
      .then((data) => setJobs(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. It is your future. Come find it. Manage all your job application
          from start to finish.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        {jobs.slice(0, dataLength).map((job) => (
          <Job job={job} key={job.id}></Job>
        ))}
      </div>
      <div className="text-center mt-8">
        {dataLength < jobs.length ? (
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
            onClick={() => setDataLength(jobs.length)}
          >
            Show More Jobs
          </button>
        ) : (
          <button
            className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
            onClick={() => setDataLength(4)}
          >
            Show Less Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedJobs;