import axios from "axios";
import { useEffect, useState } from "react";
import { FaHistory,  FaUser } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";


const AdminDashboard = () => {
    const { id } = useParams();
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

   
    useEffect(() => {
        axios.get('http://localhost:5000/register')
            .then(res => {
                setUsers(res.data); 
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

//    find currentUser
    const currentUser = users.find(user => user._id === id);


    const handleLogOut = () =>{
        localStorage.removeItem('token');
        navigate('/login')
    }
    


    const handleUserManage = () => {
        // Add logic for send money operation
        console.log('Send Money');
    };

    const handleTransection = () => {
        // Add logic for cash out operation
        console.log('Cash Out');
    };


    return (
        <div className="bg-[#323946] min-h-screen">
            <div className="mx-auto container">
                <div className="text-3xl text-white font-bold pt-10 flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <img className="w-[50px] h-[50px]" src="/logo.png" alt="" />
                        <h2>Cash <span className="text-[#3fbad6]">Plus+</span></h2>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FaUser className='text-[#3fbad6]' />
                        <h3 className="text-[#3fbad6]">{currentUser?.name}</h3>
                        <button onClick={handleLogOut} className="btn bg-[#3fbad6] border-none text-white">Logout</button>
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <div className="card bg-[#1f242d] w-full max-w-lg p-6 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <FaUser className="text-4xl  text-[#3fbad6]" />
                            <h3 className="text-xl text-gray-300">{currentUser?.role}</h3>
                            
                        </div>
                        <div className="gap-4">
                            <button
                                className="btn my-3 border-none bg-[#3fbad6] hover:bg-[#2a313c] text-white flex items-center justify-center w-full py-3"
                                onClick={handleUserManage}
                            >
                                <FaUser className="mr-2" />
                                Users Management
                            </button>
                            <button
                                className="btn my-3 border-none bg-[#3fbad6] hover:bg-[#2a313c] text-white flex items-center justify-center w-full py-3"
                                onClick={handleTransection}
                            >
                                <FaHistory className="mr-2" />
                                Transection History
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default AdminDashboard;