import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserDashboard from '../UserDashboard/UserDashboard';
import AgentDashboard from '../AgentDashboard/AgentDashboard';
import AdminDashboard from '../AdminDashboard/AdminDashboard';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const mobileNumberOrEmail = form.mobileNumber.value;
        const pin = form.pin.value;

        const loginInfo = {
            mobileNumber: mobileNumberOrEmail.includes('@') ? undefined : mobileNumberOrEmail,
            email: mobileNumberOrEmail.includes('@') ? mobileNumberOrEmail : undefined,
            pin
        };

        try {
            const res = await axios.post('http://localhost:5000/login', loginInfo);
            console.log(res.data); // Check the response structure for debugging

            // Store the JWT token in local storage
            localStorage.setItem('token', res.data.token);

            // Update the user state
            setUser(res.data.user);

            // Redirect based on the user's role
            if (res.data.user.role === 'User') {
                navigate('/user-dashboard');
            } else if (res.data.user.role === 'Agent') {
                navigate('/agent-dashboard');
            } else if (res.data.user.role === 'Admin') {
                navigate('/admin-dashboard');
            }
            
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Logged in successfully",
                showConfirmButton: false,
                timer: 1500
            });

        } catch (err) {
            console.error(err);
            Swal.fire({
                position: "center",
                icon: "error",
                title: `${err.response ? err.response.data : 'Login failed'}`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    // Conditional rendering of Dashboard based on user role
    const renderDashboard = () => {
        if (user) {
            switch (user.role) {
                case 'User':
                    return <UserDashboard user={user} />;
                case 'Agent':
                    return <AgentDashboard user={user} />;
                case 'Admin':
                    return <AdminDashboard user={user} />;
                default:
                    return null;
            }
        }
        return null;
    };

    // Render login form if user is not logged in yet
    return (
        <div className="bg-[#323946] min-h-screen">
            <div className="text-3xl text-white font-bold mx-auto container pt-10 flex gap-1 items-center">
                <img className="w-[50px] h-[50px]" src="/logo.png" alt="" />
                <h2>Cash <span className="text-[#3fbad6]">Plus+</span></h2>
            </div>
            <div className="text-center flex justify-center mt-10 items-center">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white mb-8">Welcome <span className="text-[#3fbad6]">Back.</span></h1>
                    </div>
                    <div className="card bg-[#1f242d] w-full max-w-sm shrink-0 shadow-2xl">
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
            {/* Render Dashboard based on user role */}
            {renderDashboard()}
        </div>
    );
};

export default Login;
