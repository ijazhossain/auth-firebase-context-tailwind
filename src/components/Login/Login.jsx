import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const { user, signInUser } = useContext(AuthContext);
    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const signedUser = result.user
                console.log(signedUser);
                form.reset()
            }).catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-7 text-center">Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100 lg:mx-auto">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <Link className="text-[#661ae6]" to="/register">New to Auth Master! Please register</Link>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;