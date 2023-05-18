import image from '../../../public/images/login.jpg'

const Login = () => {
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
                            {/* Email input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            {/* Password input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[#D268CC] hover:bg-[#bd5cb8] border-0">Login</button>
                            </div>
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