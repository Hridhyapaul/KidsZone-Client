import React, { useState } from 'react';
import image from '../../../public/images/signUp.jpg'
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordSuccess, setPasswordSuccess] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const { createUser, setUser } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                const registerUser = result.user
                console.log(registerUser)
                form.reset()
                setPassword('')
                setUser(registerUser);
                setError('')
                setSuccess('User Created Successfully! Welcome to our website.')
                updateUserData(result.user, name, photo)
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
                setSuccess('')
            })
    };

    const handlePassword = event => {
        const passwordInput = event.target.value;
        setPassword(passwordInput)

        const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        const isContainsUppercase = /^(?=.*[A-Z]).*$/;

        if (passwordInput.length < 8) {
            setPasswordError("Password must be 8 characters long");
            setPasswordSuccess('');
        }
        else if (!isContainsUppercase.test(passwordInput)) {
            setPasswordError("Password must have at least one Uppercase Character.");
        }
        else if (!isContainsSymbol.test(passwordInput)) {
            setPasswordError("Password must have at least one special character.");
        }
        else {
            setPasswordError('');
            setPasswordSuccess('Very good');
        }

    }

    const updateUserData = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then(() => {
                console.log('user name updated')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-[45%] text-center lg:text-left">
                        <img className='h-[650px] rounded-2xl w-[900px]' src={image} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-[45%] max-w-lg bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-center"><span className='text-[#D268CC]'>Register</span> now!</h1>
                            <p className='text-center'><span className='text-[#4BB543]'>{success}</span></p>
                            <p className='text-center'><span className='text-[#f0ad4e]'>{error}</span></p>
                            {/* Name input */}
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                </div>
                                {/* Photo URL input */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                {/* Email input */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                                </div>
                                {/* Password input */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type="password" name='password' value={password} onChange={handlePassword} placeholder="Password" className="input input-bordered" />

                                    {
                                        password ?
                                            passwordError ?
                                                <p className='flex items-center mt-2 gap-2'><FaExclamationCircle className='text-[#f0ad4e]'></FaExclamationCircle> <span className='text-[#f0ad4e]'>{passwordError}</span></p>
                                                :
                                                <p className='flex items-center mt-2 gap-2'><FaCheckCircle className='text-[#4BB543]'></FaCheckCircle> <span className='text-[#4BB543]'>{passwordSuccess}</span></p> : ""
                                    }
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-primary bg-[#D268CC] hover:bg-[#bd5cb8] border-0 mb-3 mt-3' type="submit" value="Register" />
                                </div>
                            </form>

                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                            </div>
                            <div>
                                <p className='text-center'>Already have an account! Please <Link to='/login' className='text-[#D268CC] font-semibold'>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;