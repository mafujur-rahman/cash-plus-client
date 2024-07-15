import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="bg-[#323946] min-h-screen ">
            <div className="text-3xl text-white font-bold mx-auto container pt-10 flex gap-1 items-center">
                <img className="w-[50px] h-[50px]" src="/logo.png" alt="" />
                <h2 >Cash <span className="text-[#3fbad6]">Plus+</span></h2>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;