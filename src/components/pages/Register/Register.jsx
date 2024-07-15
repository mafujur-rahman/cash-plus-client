import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const mobileNumber = form.mobileNumber.value;
        const email = form.email.value;
        const pin = form.pin.value;
        const role = form.role.value;
        const newUserAgent = {
            name,mobileNumber,email,pin,role
        }
        console.log(newUserAgent);
    }


    return (
        <div>
            <div className="text-center  flex justify-center mt-10 items-center">
                <div className="hero-content  flex-col ">
                    <div className="text-center lg:text-left  ">
                        <h1 className="text-5xl font-bold text-white mb-8">Welcome to <span className="text-[#3fbad6]">Cash Plus+</span> </h1>
                        <h1 className="text-xl text-gray-300 text-center pb-10">Get Started with Registration.</h1>
                    </div>
                    <div className="card bg-[#1f242d]  w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" name="name" className="input input-bordered bg-[#323946] text-gray-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Mobile Number</span>
                                </label>
                                <input type="text" placeholder="Mobile Number" name="mobileNumber" className="input input-bordered bg-[#323946] text-gray-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered bg-[#323946] text-gray-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Pin</span>
                                </label>
                                <input type="password" placeholder="Create a new pin" name="pin" className="input input-bordered bg-[#323946] text-gray-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Role</span>
                                </label>
                                <select name="role" className="input input-bordered bg-[#323946] text-gray-200" required>
                                    <option value="User">User</option>
                                    <option value="Agent">Agent</option>
                                </select>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#3fbad6] hover:bg-[#2a313c] text-white border-none w-full" type="submit">Register</button>
                                <p className="text-gray-300 pt-4">Already Registered? <Link to='/login'><span className="text-[#3fbad6] font-bold cursor-pointer">Login</span></Link> now!</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;