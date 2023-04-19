import React from 'react';

const JobPost = () => {

    const handleJobPost = event => {
        event.preventDefault();
        const form = event.target;
        const company = form.company.value;
        const title = form.title.value;
        const description = form.description.value;
        const requirements = form.requirements.value;
        const salary = form.salary.value;
        const email = form.email.value;
        const jobtype = form.jobtype.value;

        const job = {
            company,
            title,
            description,
            requirements,
            salary,
            email,
            jobtype
        }
        // console.log(job)

        fetch('http://localhost:5000/jobs/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(job)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    alert('Job Palaced successfully')
                    form.reset();
                }
            })
            .catch(er => console.log(er));
    }

    return (
        <div className='w-2/4 mx-auto leading-relaxed'>
            <form onSubmit={handleJobPost} className="my-10">
                <h2 className="text-4xl">Post a Job with valid Information <span className='font-bold'></span></h2>
                <div className=''>
                    <span className="mb-1">Company Name</span>
                    <input name="company" type="text" placeholder="Company Name" className="input input-bordered w-full" />
                    <span className="mb-1">Email</span>
                    <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" />
                    <span className="mb-1">Job title</span>
                    <input name="title" type="text" placeholder="Designation" className="input input-bordered w-full" />
                    <span className="mb-1">Job Description</span>
                    {/* <input className="input input-bordered w-full" /> */}
                    <textarea name="description" type="text" placeholder="Describe about your company or this job" required className="textarea textarea-bordered w-full h-28" ></textarea> <br />


                    <span className="mb-1">Requirements</span>
                    {/* <input name="requirements" type="text" placeholder="Requirements" className="input input-bordered w-full" /> */}
                    <textarea name="requirements" type="text" placeholder="Requirements" required className="textarea textarea-bordered w-full h-28" ></textarea> <br />
                    <span className="mb-1">Salary</span>
                    <input name="salary" type="number" placeholder="Salary in Dollar" className="input input-bordered w-full" />
                    <span className="my-3">Job-type</span> <br />
                    <select name="jobtype" className="select w-full max-w-xs">
                        <option disabled selected>Pick your Job Type</option>
                        <option>Remote</option>
                        <option>Hybrid</option>
                        <option>On-site</option>
                    </select>
                </div>
                <input type="submit" className='btn w-full btn-primary  text-white border hover:border-none my-8' value="Post the Job" />
            </form>
        </div>
    );
};

export default JobPost;