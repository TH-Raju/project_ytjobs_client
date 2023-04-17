import Contact from "../Components/Contact";
import Banner from "../Components/Home/Banner";
import Home from "../Components/Home/Home";
import Job from "../Components/Jobs/Job";
import JobPost from "../Components/Jobs/JobPost";
import Jobs from "../Components/Jobs/Jobs";
import JobsLayout from "../Layout/JobsLayout";
import Main from "../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/jobs',
                element: <JobsLayout></JobsLayout>,
                children: [

                    {
                        path: '/jobs/job/:id',
                        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
                        element: <Jobs></Jobs>
                    }
                ]
            },
            {
                path: '/jobpost',
                element: <JobPost></JobPost>
            },

            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
]);

export default router;