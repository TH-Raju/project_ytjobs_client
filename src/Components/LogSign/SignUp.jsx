import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import login from '../../assets/sign.svg';
import useTitle from '../Shared/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
    useTitle('Sign up')
    const { createUser, googleProviderLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                navigate('/')
                console.log(user);
            })
            .catch(err => console.log(err))

    }
    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
                // saveUser(user?.displayName, user?.email);
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={login} alt="login" className='w-4/5' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up </h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign Up" />
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full hover:bg-blue-700 hover:border-none'>CONTINUE WITH GOOGLE</button>    <p className='text-center'>Already have an account?  <Link to="/login" className='text-orange-700 underline font-bold'>Log in</Link></p>
                </div>
            </div>
        </div >
    );
};

export default SignUp;