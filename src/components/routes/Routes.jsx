import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import AgentDashboard from "../pages/AgentDashboard/AgentDashboard";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";


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
        path:'/user-dashboard',
        element:<UserDashboard></UserDashboard>
      },
      {
        path:'/agent-dashboard',
        element:<AgentDashboard></AgentDashboard>
      },
      {
        path:'/admin-dashboard',
        element:<AdminDashboard></AdminDashboard>
      }
    
  ]);

export default router;