import { useState, useEffect } from 'react';
import { FaUser, FaPlus, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UserDashboard = () => {
    const { id } = useParams();
    const [users, setUsers] = useState([]);
    const [showBalance, setShowBalance] = useState(false); 
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
    
    const handleCashIn = () => {
        // Add logic for cash in operation
        console.log('Cash In');
    };

    const handleSendMoney = () => {
        // Add logic for send money operation
        console.log('Send Money');
    };

    const handleCashOut = () => {
        // Add logic for cash out operation
        console.log('Cash Out');
    };

    // Function to handle showing balance
    const handleShowBalance = () => {
        setShowBalance(true);
        setTimeout(() => {
            setShowBalance(false);
        }, 3000);
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
                        <h3 className="text-[#3fbad6]">{currentUser?.name }</h3>
                        <button onClick={handleLogOut} className="btn bg-[#3fbad6] border-none text-white">Logout</button>
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <div className="card bg-[#1f242d] w-full max-w-lg p-6 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl text-white font-bold">
                                Balance: {showBalance ? `$${currentUser?.balance}` : <span className="cursor-pointer text-[#3fbad6] border-none  " onClick={handleShowBalance}>Show</span>}
                            </h3>
                            <FaUser className="text-4xl text-[#3fbad6]" />
                        </div>
                        <div className="gap-4">
                            <button
                                className="btn my-3 border-none bg-[#3fbad6] hover:bg-[#2a313c] text-white flex items-center justify-center w-full py-3"
                                onClick={handleCashIn}
                            >
                                <FaPlus className="mr-2" />
                                Cash In
                            </button>
                            <button
                                className="btn my-3 border-none bg-[#3fbad6] hover:bg-[#2a313c] text-white flex items-center justify-center w-full py-3"
                                onClick={handleSendMoney}
                            >
                                <FaArrowUp className="mr-2" />
                                Send Money
                            </button>
                            <button
                                className="btn my-3 border-none bg-[#3fbad6] hover:bg-[#2a313c] text-white flex items-center justify-center w-full py-3"
                                onClick={handleCashOut}
                            >
                                <FaArrowDown className="mr-2" />
                                Cash Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
