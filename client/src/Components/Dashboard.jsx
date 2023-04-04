import Navbar from "./Layout/Navbar";
import Login from "./Login";
import Task from "./Task";
import { Link, NavLink } from "react-router-dom";



const    Dashboard = ()=> {

    return (

        <>
        <Navbar/>
        
        <Task/>
        </>
    )
}
export default Dashboard;