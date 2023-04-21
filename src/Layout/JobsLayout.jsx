import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import axios from 'axios';

const JobsLayout = () => {
    const [jobs, setJobs] = useState([]);

    const serachBtn = event => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;
        const title = form.title.value;
        const location = form.location.value;
        const salary = form.salary.value;

        const data = {
            search,
            title,
            location,
            salary,
        }
        console.log(data);
        form.reset();
    }

    useEffect(() => {
        fetch('https://ytjobs-server.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col w-5/6 mx-auto">
                {/* <!-- Page content here --> */}
                <div>
                    <form action="" onSubmit={serachBtn}>
                        <input type="text" name="search" placeholder="Search" className="input input-bordered w-full max-w-xs" />
                        <select name="title" className="select w-full max-w-xs mx-5">
                            <option disabled selected>Job Title</option>
                            {/* <option>Remote</option> */}
                            {
                                jobs.map(job => <option key={job._id}>{job.title}</option>)
                            }
                        </select>
                        <select name="location" className="select w-full max-w-xs">
                            <option disabled selected>Location</option>
                            <option>Remote</option>
                            <option>Hybrid</option>
                            <option>On-site</option>
                        </select>
                        <select name="salary" className="select w-full max-w-xs">
                            <option disabled selected>Salary</option>
                            <option>100</option>
                            <option>200</option>
                            <option>300</option>

                        </select>
                        {/* <button className="btn btn-primary mx-4">Search</button> */}
                        <input type="submit" value="Search" className='btn btn-primary mx-4' />

                    </form>
                </div>
                <h1 className='text-center'>Select Your Dream Job</h1>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <div className='bg-red-400'>

                        {
                            jobs.map(job => <Link to={`job/${job._id}`} key={job._id}><div
                                className="text-2xl font-semibold hover:bg-sky-200 rounded-lg p-3 m-4">
                                <div>
                                    <p>{job.title}</p>
                                    <span className='text-sm '>in {job.company}</span>
                                    <div className='flex justify-between text-base'>
                                        <p>{job.jobtype}</p>
                                        <p>Salary: {job.salary}$</p>
                                    </div>
                                </div>
                            </div></Link>

                            )
                        }
                    </div>
                </ul>

            </div>
        </div>
    );
};

export default JobsLayout;