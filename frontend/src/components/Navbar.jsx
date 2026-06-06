import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    console.log('User logged out');
    navigate('/login');
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 text-white shadow-lg bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="flex items-center">
                <h1 className="text-2xl font-bold text-white">Task Management</h1>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 px-4 py-2 transition bg-white rounded-full bg-opacity-20 hover:bg-opacity-30">
                    <img src="https://ui-avatars.com/api/?name=Ankit&background=007bff&color=fff&size=40" alt="Profile" className="object-cover w-10 h-10 border-2 border-white rounded-full" />
                    <span className="text-base font-medium">Ankit</span>
                </div>
                <button className="px-4 py-2 font-medium text-white transition duration-300 ease-in-out bg-red-500 rounded-lg hover:bg-red-600"
                onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar;