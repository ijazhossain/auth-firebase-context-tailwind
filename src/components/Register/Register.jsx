import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const { user, createUser, googleSignIn } = useContext(AuthContext)
    console.log(user, createUser);
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
            }).catch(error => {
                console.error(error)
            })
    }
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            }).catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="w-full">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-7 text-center">Register now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100 lg:mx-auto">
                    <form onSubmit={handleFormSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
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
                        <Link className="text-[#661ae6]" to="/login">Already have an account?</Link>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                </div>
                <p className='text-center'>
                    <button onClick={handleGoogleLogIn} className="btn text-center">Google Sign In</button>
                </p>
            </div>
        </div>
    );
};

export default Register;