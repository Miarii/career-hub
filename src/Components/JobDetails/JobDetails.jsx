import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "../../utilities/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  
  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("Applied Successfully");
  };

  // console.log(job);
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3 justify-start p-2">
          <h2 className="my-6 text-justify">
            <span className="font-bold">Job Description: </span>
            {job.job_description}
          </h2>
          <h2 className="my-6 text-justify">
            <span className="font-bold">Job Responsibility: </span>
            {job.job_responsibility}
          </h2>
          <h2 className="my-6 text-justify">
            <span className="font-bold">Educational Requirements: </span>
            <br />
            {job.educational_requirements}
          </h2>
          <h2 className="my-6 text-justify">
            <span className="font-bold">Experiences: </span>
            <br />
            {job.experiences}
          </h2>
        </div>
        <div className="border">
          <div>
            <h2 className="text-2xl my-2 text-justify">Job Details</h2>
            <p>Salary</p>
            <p>Job Title</p>
          </div>
          <div>
            <p>phone</p>
            <p>Email</p>
            <p>Address</p>
          </div>
          <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default JobDetails;