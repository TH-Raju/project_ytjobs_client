import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import login from '../../assets/images/login/login.svg';
import login from '../../assets/login.svg';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../Shared/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    useTitle("Login")
    const { signInUser, googleProviderLogin } = useContext(AuthContext)
    const [err, setErr] = useState('');
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const googleProvider = new GoogleAuthProvider();

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => setErr(error.message))

    }
    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={login} alt="login" className='w-3/4' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Log in </h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href=" " className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            {err && <p className='text-red-500 border p-4 border-red-600 border-spacing-2'>{err}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Log in" />
                        </div>
                    </form>
                    <p className='text-center'>New to Genius Car?  <Link to="/signup" className='text-orange-700 underline font-bold'>Sign Up</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full hover:bg-blue-700 hover:border-none'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div >
    );
};

export default Login;