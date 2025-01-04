import { CiDollar } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    company_name,
    job_title,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="card card-compact justify-start bg-base-100 shadow-xl p-6">
      <figure>
        <img src={logo} alt={company_name} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>

        <div>
          <button className="px-5 py-2 font-extrabold border rounded text-[#7E90FE] border-[#7E90FE] mr-4">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded text-[#7E90FE] border-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <h2 className="flex">
            <MdLocationOn className="text-xl" />
            {location}
          </h2>

          <h2 className="flex">
            <CiDollar className="text-xl ml-4" /> {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
