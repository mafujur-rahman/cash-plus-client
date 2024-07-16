

const CashIn = () => {
    return (
        <div className="bg-[#323946] min-h-screen">
            <div className="text-3xl text-white font-bold mx-auto container pt-10 flex gap-1 items-center">
                <img className="w-[50px] h-[50px]" src="/logo.png" alt="" />
                <h2>Cash <span className="text-[#3fbad6]">Plus+</span></h2>
            </div>
            <div className="text-center flex justify-center mt-10 items-center">
                <div className="hero-content flex-col">
                    <div className="card bg-[#1f242d] w-full max-w-sm shrink-0 shadow-2xl">
                        <form  className="card-body space-y-4">
                            <h2 className="text-3xl font-bold text-[#3fbad6]">Cash In</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Agent Number</span>
                                </label>
                                <input type="text" placeholder="Agent number" name="agentNumber" className="input input-bordered bg-[#323946] text-gray-200" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-300">Amount</span>
                                </label>
                                <input type="number" placeholder="Enter amount" name="amount" className="input input-bordered bg-[#323946] text-gray-200" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#3fbad6] hover:bg-[#2a313c] text-white border-none w-full" type="submit">Send Request</button>
            
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CashIn;