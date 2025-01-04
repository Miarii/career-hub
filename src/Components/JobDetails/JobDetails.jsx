import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { saveJobApplication } from "../../utilities/localstorage";

import moneyIcon from "../../assets/icons/money.png";
import locationIcon from "../../assets/icons/location2.png";
import calenderIcon from "../../assets/icons/calendar.png";
import phoneIcon from "../../assets/icons/phone.png";
import emailIcon from "../../assets/icons/email.png";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast.success("Application submitted successfully!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-4">
        {/* Left Section */}
        <div className="bg-white rounded-lg shadow-md md:col-span-3 p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Job Description</h3>
              <p className="text-gray-700 text-sm">{job.job_description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Job Responsibilities</h3>
              <p className="text-gray-700 text-sm">{job.job_responsibility}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Educational Requirements</h3>
              <p className="text-gray-700 text-sm">{job.educational_requirements}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Experience Required</h3>
              <p className="text-gray-700 text-sm">{job.experiences}</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6 border border-blue-100">
          {/* Job Details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Job Details</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <img src={moneyIcon} alt="Salary" className="w-5 h-5 mr-3" />
                <span className="font-medium">Salary:</span>
                <span className="text-gray-600 ml-2">{job.salary}</span>
              </div>
              <div className="flex items-center text-sm">
                <img src={calenderIcon} alt="Job Title" className="w-5 h-5 mr-3" />
                <span className="font-medium">Job Title:</span>
                <span className="text-gray-600 ml-2">{job.job_title}</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <img src={phoneIcon} alt="Phone" className="w-5 h-5 mr-3" />
                <span className="font-medium">Phone:</span>
                <span className="text-gray-600 ml-2">{job.contact_information.phone}</span>
              </div>
              <div className="flex items-center text-sm">
                <img src={emailIcon} alt="Email" className="w-5 h-5 mr-3" />
                <span className="font-medium">Email:</span>
                <span className="text-gray-600 ml-2">{job.contact_information.email}</span>
              </div>
              <div className="flex items-center text-sm">
                <img src={locationIcon} alt="Location" className="w-5 h-5 mr-3" />
                <span className="font-medium">Address:</span>
                <span className="text-gray-600 ml-2">{job.contact_information.address}</span>
              </div>
            </div>
          </div>

          {/* Apply Now Button */}
          <button
            onClick={handleApplyJob}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default JobDetails;
