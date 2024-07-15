import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className=""></div>
      <div className="container mx-auto px-6  text-white text-center">
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
          Welcome to <span className="text-[#3fbad6]">Cash Plus+</span>
        </h1>
        <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed mb-12">
          Effortlessly manage your finances with our comprehensive Mobile Financial Service (MFS) platform. Whether you need to send money, cash out, inquire about your balance, or handle various transactions, Cash Plus+ offers a secure, user-friendly experience tailored to your needs. Designed for users, agents, and admins, our platform ensures seamless financial operations anytime, anywhere.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/login"><button className="btn bg-[#3fbad6] hover:bg-[#349bb6] border-none text-white font-semibold px-8 py-3 rounded-full shadow-lg">Login</button></Link>
          <Link to="/register"><button className="btn bg-[#3fbad6] hover:bg-[#349bb6] border-none text-white font-semibold px-8 py-3 rounded-full shadow-lg">Register</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;