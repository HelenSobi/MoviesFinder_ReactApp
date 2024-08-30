import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({ openModal , handleSignOut}) => {
  const [isOpen, setIsOpen] = useState(false);
  const user=useSelector((store) => store.user); 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative md:hidden">
      {/* Hamburger Icon */}
      <button
        className="p-2 text-gray-700 rounded-md focus:outline-none md:hidden"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Full-Screen Overlay Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-gray-700 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="absolute top-4 left-4 p-2 text-2xl text-white focus:outline-none md:top-6 md:right-6">
        <Link to ="/"><img src="/logo.png" className="w-48 md:w-60" alt="Logo" /></Link>
          </div>
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-2 text-white focus:outline-none md:top-6 md:right-6"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Centered Menu Items */}
        <div className="flex flex-col items-center justify-center h-full space-y-6">
           <Link to ="/"
            className="text-2xl text-white hover:text-gray-500"
            onClick={toggleMenu}
          >
            Home
          </Link>
           <Link to ="/"
            className="text-2xl text-white hover:text-gray-500"
            onClick={toggleMenu}
          >
            Movies
          </Link>
          
          {user ? (
            <><p className="text-2xl text-white hover:text-gray-500">hello, {user?.displayName}</p>
            <button  onClick={()=>{
                handleSignOut();
                toggleMenu();
            }} to="/"
            className="text-2xl text-white hover:text-gray-500"
          >
            Logout
          </button>
            </>
          ) : 
          (<button  onClick={()=>{
            openModal();
            toggleMenu();
        }}
            className="text-2xl text-white hover:text-gray-500"
          >
            Login
          </button>)
          }
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
