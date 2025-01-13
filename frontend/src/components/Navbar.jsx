import React, { useContext, useState } from 'react';
import { assets } from './../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    setToken(false);
    localStorage.removeItem('token');
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      {/* Logo */}
      <p className="text-4xl font-bold text-blue-600 tracking-wider uppercase">
        HEALTH MATE
      </p>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1 hover:text-blue-600">HOME</li>
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1 hover:text-blue-600">ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 hover:text-blue-600">ABOUT</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 hover:text-blue-600">CONTACT</li>
        </NavLink>
      </ul>

      {/* Buttons and Menu */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={userData.image ? userData.image : assets.profile_pic}
              alt=""
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate('my-profile')}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate('my-appointment')}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={logout}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}

        {/* Admin/Doctor Panel Button */}
        <a
  href="https://healthmate-adminpanel1.onrender.com"
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.open("https://healthmate-adminpanel1.onrender.com", "_blank", "noopener,noreferrer");
  }}
  className="bg-blue-600 text-white font-medium py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 hidden md:block"
>
  Admin/Doctor Panel
</a>


        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt=""
        />
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed top-0 right-0 bottom-0 w-full bg-white z-20">
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7 cursor-pointer"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink
              className="px-4 py-2 rounded inline-block"
              onClick={() => setShowMenu(false)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="px-4 py-2 rounded inline-block"
              onClick={() => setShowMenu(false)}
              to="/doctors"
            >
              ALL DOCTORS
            </NavLink>
            <NavLink
              className="px-4 py-2 rounded inline-block"
              onClick={() => setShowMenu(false)}
              to="/about"
            >
              ABOUT
            </NavLink>
            <NavLink
              className="px-4 py-2 rounded inline-block"
              onClick={() => setShowMenu(false)}
              to="/contact"
            >
              CONTACT
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
