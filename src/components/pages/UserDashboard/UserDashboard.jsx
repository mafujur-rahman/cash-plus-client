import PropTypes from 'prop-types';
import { FaUser, FaPlus, FaArrowUp, FaArrowDown } from 'react-icons/fa'; // Importing necessary icons
import { useState } from 'react'; // Importing useState and useEffect for managing state and side effects

const UserDashboard = ({ user }) => {
    // Example state for balance (replace with actual state management if needed)
    const [balance, setBalance] = useState(10000); // Example balance state
    const [showBalance, setShowBalance] = useState(false); // State to control showing balance

    // Example functions for cash operations (replace with actual logic)
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
                        <FaUser />
                        <h3 className="text-white">{user?.name}</h3> {/* Replace with actual user data */}
                        <button className="btn bg-[#3fbad6] border-none text-white">Logout</button>
                    </div>
                </div>

                {/* Balance check field and buttons */}
                <div className="mt-10 flex justify-center">
                    <div className="card bg-[#1f242d] w-full max-w-lg p-6 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-2xl text-white font-bold">
                                Balance: {showBalance ? `$${balance}` : <span className="cursor-pointer text-[#3fbad6] border-none  " onClick={handleShowBalance}>Show</span>}
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

UserDashboard.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserDashboard;
