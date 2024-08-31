import { signOut,onAuthStateChanged } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useState , useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import Modal from './Modal';
import { auth } from '../utils/firebase'
import { createUser,deleteUser } from "../store/userSlice";
import HamburgerMenu from './HamburgerMenu';
import SearchMovies from "./SearchBar";

function Header() {
    const [isModalOpen , setIsModalOpen] = useState(false);
    const user=useSelector((store) => store.user); 
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const openModal = () => { // Function to open the modal
      setIsModalOpen(true);
    };
    const closeModal = () => { // Function to close the modal
      setIsModalOpen(false);
    };
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {    //firebase utility
        if (user) {    // User is signed in
            const {uid, email, displayName} = user;
            dispatch(createUser({uid:uid,email:email, displayName:displayName}));    
        } });
        return ()=>unsubscribe();   //remove `onAuthStateChanged` when component unmounts
    },[])

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            dispatch(deleteUser());
            navigate("/");
          }).catch((error) => {
            console.log(error)
          });
    }
  return (
    <header>
      <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <div className="text-2xl order-1">
          <Link to="/"> <img src="/logo.png" className="w-48 md:w-60" alt="Logo" /></Link>
       
        </div>   
        <div className="relative p-3  rounded-lg w-full max-w-sm order-2">
          <SearchMovies/>
      </div>
        <div className="hidden md:flex space-x-4 order-3">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/movies"  className="hover:text-gray-400">Movies</Link>
         
          {/* Login button in navbar */}
          {user ? (
            <><p className="hover:text-gray-400">hello, {user?.displayName}</p>
            <Link onClick={handleSignOut} to="/"
            className="hover:text-gray-400 focus:outline-none"
          >
            Logout
          </Link>
            </>
          ) : 
          (<Link  to="#"
            onClick={openModal}
            className="hover:text-gray-400 focus:outline-none"
          >
            Login
          </Link>)
          }
        </div>   
        <div className="order-3">
        <HamburgerMenu openModal={openModal} handleSignOut={handleSignOut}/>  
        </div> 
      </nav>
      {/* Login Modal */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </header>
  );
}

export default Header;
