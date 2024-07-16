import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const mobileNumber = form.mobileNumber.value;
        const pin = form.pin.value;
        const loginInfo ={
            mobileNumber,pin
        }
        console.log(loginInfo);
    }
    return (
        <div>
            <div className="text-center  flex justify-center mt-10 items-center">
                <div className="hero-content  flex-col ">
                    <div className="text-center lg:text-left  ">
                        <h1 className="text-5xl font-bold text-white mb-8">Welcome <span className="text-[#3fbad6]">Back.</span> </h1>
                    </div>
                    <div className="card bg-[#1f242d]  w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Mobile Number/Email</span>
                                </label>
                                <input type="text" placeholder="Mobile Number or Email" name="mobileNumber" className="input input-bordered bg-[#323946] text-gray-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Your Pin</span>
                                </label>
                                <input type="password" placeholder="Enter your pin" name="pin" className="input input-bordered bg-[#323946] text-gray-200" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#3fbad6] hover:bg-[#2a313c] text-white border-none w-full" type="submit">Log in</button>
                                <p className="text-gray-300 pt-4">Not Registered? <Link to='/register'><span className="text-[#3fbad6] font-bold cursor-pointer">Register</span></Link> now!</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;