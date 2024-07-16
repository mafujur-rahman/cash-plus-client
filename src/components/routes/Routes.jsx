import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import AgentDashboard from "../pages/AgentDashboard/AgentDashboard";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import CashIn from "../pages/UserDashboard/CashIn";
import SendMoney from "../pages/UserDashboard/SendMoney";
import CashOut from "../pages/UserDashboard/CashOut";


const router = createBrowserRouter([
  
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:'/user-dashboard/:id',
        element:<UserDashboard></UserDashboard>
      },
      {
        path:'/send-money',
        element:<SendMoney></SendMoney>
      },
      {
        path:'/cash-in',
        element:<CashIn></CashIn>
      },
      {
        path:'/cash-out',
        element:<CashOut></CashOut>
      },
      {
        path:'/agent-dashboard/:id',
        element:<AgentDashboard></AgentDashboard>
      },
      {
        path:'/admin-dashboard/:id',
        element:<AdminDashboard></AdminDashboard>
      }
    
  ]);

export default router;