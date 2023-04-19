import Contact from "../Components/Contact";
import { Faq } from "../Components/Faq";
import Home from "../Components/Home/Home";
import JobPost from "../Components/Jobs/JobPost";
import Jobs from "../Components/Jobs/Jobs";
import Login from "../Components/LogSign/Login";
import SignUp from "../Components/LogSign/SignUp";
import Errorpage from "../Components/Shared/Errorpage";
import JobsLayout from "../Layout/JobsLayout";
import Main from "../Layout/Main";
import PrivateRoute from "../Route/PrivateRoute";

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
                element: <PrivateRoute><JobsLayout></JobsLayout></PrivateRoute>,
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
                element: <PrivateRoute><JobPost></JobPost></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },

            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: "*",
        element: <Errorpage></Errorpage>
    }
]);

export default router;