
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';

const SendMoney = () => {

    const handleSendMoney = async (e) => {
        e.preventDefault();
        const form = e.target;
        const number = form.number.value;
        const amount = parseFloat(form.amount.value);
        const pin = form.pin.value;
        const token = localStorage.getItem('token'); 

        if (!token) {
            alert("You need to log in first");
            return;
        }

        const decoded = jwtDecode(token);
        const userId = decoded.id;

        if (amount < 50) {
            Swal.fire({
                position: "center",
                title: `Minimum transaction amount is 50 tk.`,
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }

        const totalAmount = amount > 100 ? amount + 5 : amount;

        try {
            const response = await axios.post('http://localhost:5000/send-money', {
                senderId: userId,
                receiverNumber: number,
                amount,
                pin,
                totalAmount
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.data.success) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Transaction successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `${response.data.message}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Error during transaction:", error);
            Swal.fire({
                position: "center",
                icon: "error",
                title: ` Transaction failed'}`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div className="bg-[#323946] min-h-screen">
            <div className="text-3xl text-white font-bold mx-auto container pt-10 flex gap-1 items-center">
                <img className="w-[50px] h-[50px]" src="/logo.png" alt="" />
                <h2>Cash <span className="text-[#3fbad6]">Plus+</span></h2>
            </div>
            <div className="text-center flex justify-center mt-10 items-center">
                <div className="hero-content flex-col">
                    <div className="card bg-[#1f242d] w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSendMoney} className="card-body space-y-4">
                            <h2 className="text-3xl font-bold text-[#3fbad6]">Send Money</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Number</span>
                                </label>
                                <input type="text" placeholder="Agent number" name="number" className="input input-bordered bg-[#323946] text-gray-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Amount</span>
                                </label>
                                <input type="number" placeholder="Enter amount" name="amount" className="input input-bordered bg-[#323946] text-gray-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Your Pin</span>
                                </label>
                                <input type="password" placeholder="Enter your pin" name="pin" className="input input-bordered bg-[#323946] text-gray-200" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#3fbad6] hover:bg-[#2a313c] text-white border-none w-full" type="submit">Send Money</button>
            
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMoney;
