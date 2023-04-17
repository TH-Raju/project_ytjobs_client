import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Jobs = () => {
    // const [jobs, setJobs] = useState([])
    const job = useLoaderData();
    const { title, company, salary, description, requirements } = job;

    // console.log(job);
    return (
        <div className='my-14'>

            <div className='text-xl leading-relaxed '>
                <h1>Job title : <span className='font-bold'>{title}</span></h1>
                <p>Company : <span className='font-bold'>{company}</span></p>
                <p className='w-4/6'><span className='font-bold'>Descirption</span> :<br /> {description}</p>
                <p className='w-4/6'><span className='font-bold'>Requirements</span> :<br /> {requirements}</p>
                <p><span className='font-bold'>Salary</span>: {salary}$</p>
            </div>

            {/* <button className='btn btn-primary my-16'>Apply</button> */}
            <div className='my-16'>
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn btn-primary">Apply</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                            <label className="block">
                                <span className="mb-1">Full name</span>
                                <input type="text" placeholder="Name" className="block w-full rounded-md p-3 shadow-sm focus:ring focus:ring-opacity-75 " />
                            </label>
                            <label className="block">
                                <span className="mb-1">Email address</span>
                                <input type="email" placeholder="your@gmail.com" className="block w-full p-3 rounded-md shadow-sm focus:ring focus:ring-opacity-75 " />
                            </label>
                            <label className="block">
                                <span className="mb-1">Cover letter</span>
                                <textarea rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 "></textarea>
                            </label>
                            <span className="">Resume/CV</span>
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                            {/* <button type="button" className="self-center px-8 py-3 text-lg focus:ring hover:ring focus:ring-opacity-75 bg-primary text-white w-full rounded-xl   hover:bg-blue-700">Submit</button> */}


                            <div className="modal-action">
                                <label htmlFor="my-modal-3" className="btn btn-primary w-full">Apply</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Jobs;