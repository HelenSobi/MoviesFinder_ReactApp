import { signOut,onAuthStateChanged } from "firebase/auth";
import HamburgerMenu from './HamburgerMenu';
import Modal from './Modal';
import { auth } from '../utils/firebase'
import { useState , useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { createUser,deleteUser } from "../store/userSlice";
import { useNavigate, Link } from "react-router-dom";

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
        } else {
            dispatch(deleteUser());
            navigate("/");
        }});
        return ()=>unsubscribe();   //remove `onAuthStateChanged` when component unmounts
    },[])

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            dispatch(deleteUser());
            //closeModal();
            navigate("/");
          }).catch((error) => {
            console.log(error)
          });
    }
  return (
    <header>
      <nav className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <div className="text-2xl">
        <Link to="/"> <img src="/logo.png" className="w-48 md:w-60" alt="Logo" /></Link>
       
        </div>
        <HamburgerMenu openModal={openModal} handleSignOut={handleSignOut}/>
        <div className="hidden md:flex space-x-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/"  className="hover:text-gray-400">Movies</Link>
         
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
          (<Link
            onClick={openModal}
            className="hover:text-gray-400 focus:outline-none"
          >
            Login
          </Link>)
          }
        </div>      
      </nav>
      {/* Login Modal */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </header>
  );
}

export default Header;
