import React, { useEffect } from "react";
import icon from "../../assets/icon.png";
export const JobCard = (props) => {
  // integrate logo api
  // GET https://logo.clearbit.com/:domain
  useEffect(() => {
    const logo = fetch("https://logo.clearbit.com/microsoft.com");
  }, []);
  return (
    <div className="shadow-xl rounded-lg p-4">
      <div className="header flex flex-row">
        <div className="company-icon">
          <img src={logo} width={50} alt={props.title} />
        </div>
        <div className="flex flex-col mx-2">
          <div className="company-name">
            <h1 className="font-bold text-md">{props.company}</h1>
          </div>
          <div className="location">
            <p className="text-slate-500 text-sm">{props.location}</p>
          </div>
        </div>
      </div>
      <div className="job-content m-1">
        <h1 className="font-bold  text-md my-2">{props.title}</h1>
        <p className="my-2 ">{props.description}</p>
        <div className="tags flex gap-3">
          <div className="p-1 text-sm rounded bg-gray-100">{props.jobType}</div>
          <div className="p-1 text-sm rounded  bg-gray-100 ">
            {props.salary}
          </div>
          <div className="p-1 text-sm rounded  bg-gray-100 ">2 Positions</div>
        </div>
      </div>
      <div className="btns mt-4 flex gap-3 mx-1">
        <button
          type="submit"
          className="border border-gray-300 p-2 px-2 rounded-md text-sm hover:bg-primary hover:text-white"
        >
          Apply Now
        </button>

        <button
          type="submit"
          className="p-2 px-2 border border-gray-300 text-sm rounded-lg hover:bg-primary hover:text-white"
        >
          Save for Later
        </button>
      </div>
    </div>
  );
};
