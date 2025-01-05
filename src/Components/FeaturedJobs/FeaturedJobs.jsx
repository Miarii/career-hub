import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = ({ onDisplayToggle }) => {
  const [jobs, setJobs] = useState([]);
  const [displayCount, setDisplayCount] = useState(4);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("jobs.json");
        if (!response.ok) {
          throw new Error("Failed to fetch job listings");
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchJobs();
  }, []);

  if (error) {
    return <div className="text-center text-red-600 py-8">Error: {error}</div>;
  }

  const handleDisplayToggle = () => {
    const newDisplayCount = displayCount === jobs.length ? 4 : jobs.length;
    setDisplayCount(newDisplayCount);
    onDisplayToggle(newDisplayCount, jobs.length);
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Featured Opportunities</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover exceptional career opportunities tailored to your expertise. 
          Browse through our curated selection of positions from industry-leading companies 
          and take the next step in your professional journey.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {jobs.slice(0, displayCount).map((job) => (
          <Job job={job} key={job.id} />
        ))}
      </div>
      {jobs.length > 4 && (
        <div className="text-center mt-12">
          <button
            className={`px-8 py-3 font-semibold rounded-lg transition-all duration-300 
              ${displayCount < jobs.length 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-purple-600 hover:bg-purple-700'
              } text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
            onClick={handleDisplayToggle}
          >
            {displayCount < jobs.length ? 'View More Positions' : 'Show Less'}
          </button>
        </div>
      )}
    </section>
  );
};

export default FeaturedJobs;