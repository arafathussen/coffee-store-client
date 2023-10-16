import { NavLink } from "react-router-dom";


const Header = () => {
   
    return (
       <div className="text-center space-x-6 font-bold bg-slate-400">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
        <NavLink to='/signin'>Sign In</NavLink>
        <NavLink to='/addCoffee'>Add Coffee</NavLink>
        
       </div>
    );
};

export default Header;