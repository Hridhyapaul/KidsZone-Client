import { useContext, useState } from 'react';
import image from '../../../public/images/login.jpg'
import { FaCheckCircle } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { loginUser } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                form.reset()
                setError('')
                setSuccess('You have logged in successfully')
            })
            .catch(error => {
                console.log(error.message)
                if (error.message === 'Error (auth/user-not-found)') {
                    setError('User not found. Please check your credentials and try again.')
                }
                if (error.message === 'Error (auth/wrong-password)') {
                    setError('Invalid password. Please check your password and try again.')
                }
                setSuccess('')
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-[45%] text-center lg:text-left">
                        <img className='h-[650px] rounded-2xl w-[800px]' src={image} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-[45%] max-w-lg bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-center"><span className='text-[#D268CC]'>Login</span> now!</h1>
                            <div className='text-center'>
                            {
                                error && <p className='text-[#f0ad4e] mt-3'>{error}</p>
                            }
                            {
                                success && <div className='mt-3 flex justify-center'>
                                    <p className='text-[#4BB543] font-semibold flex justify-start items-center gap-2'><FaCheckCircle className='text-[#4BB543]'></FaCheckCircle> <span>{success}</span> </p>
                                </div>
                            }
                            </div>
                            <form onSubmit={handleLogin}>
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
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-[#D268CC] hover:bg-[#bd5cb8] border-0">Login</button>
                                </div>
                            </form>
                            {/* Divider */}
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;