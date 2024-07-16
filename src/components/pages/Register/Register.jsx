import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const mobileNumber = form.mobileNumber.value;
        const email = form.email.value;
        const pin = form.pin.value;
        const role = form.role.value;

        // Remove country code for backend storage
        const formattedMobileNumber = mobileNumber.startsWith("+880") ? mobileNumber.slice(4) : mobileNumber;

        if (formattedMobileNumber.length !== 11) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Mobile number must be 11 digits long.",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }

        const newUser = {
            name,
            mobileNumber: mobileNumber,
            email,
            pin,
            role
        };

        console.log("New User Data: ", newUser);

        if (pin.length === 5) {
            axios.post('http://localhost:5000/register', newUser)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Registered successfully, waiting for admin approval",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
                .catch(err => {
                    console.error(err);
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: `${err.response.data}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Pin must be 5 digits.",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div className="bg-[#323946] min-h-screen">
            <div className="text-3xl text-white font-bold mx-auto container pt-10 flex gap-1 items-center">
                <img className="w-[50px] h-[50px]" src="/logo.png" alt="" />
                <h2 >Cash <span className="text-[#3fbad6]">Plus+</span></h2>
            </div>
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
                                <input type="number" placeholder="+8801XXXXXXXXX" name="mobileNumber" className="input input-bordered bg-[#323946] text-gray-200" required pattern="\+8801[0-9]{9}" maxLength="14" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered bg-[#323946] text-gray-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Create Pin</span>
                                </label>
                                <input type="number" placeholder="Create a 5 digit pin" name="pin" className="input input-bordered bg-[#323946] text-gray-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Role (User/Agent)</span>
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