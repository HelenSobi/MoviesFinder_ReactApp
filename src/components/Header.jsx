import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Modal from './Modal';
import { auth } from '../utils/firebase';
import { createUser, deleteUser } from "../store/userSlice";
import HamburgerMenu from './HamburgerMenu';
import SearchBar from "./SearchBar";

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openModal = () => { setIsModalOpen(true); };
    const closeModal = () => { setIsModalOpen(false); };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(createUser({ uid: uid, email: email, displayName: displayName }));
            }
        });
        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(deleteUser());
            navigate("/");
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <header className="bg-gray-800 text-white">
            <nav className="flex flex-col md:flex-row justify-between items-center">
                {/* Logo and Hamburger Menu for Mobile */}
                <div className="flex justify-between w-full md:w-auto items-center p-5">
                    <Link to="/" className="text-2xl">
                        <img src="/logo.png" className="w-48 md:w-60" alt="Logo" />
                    </Link>
                    {/* Hamburger Menu only on small screens */}
                    <div className="md:hidden">
                        <HamburgerMenu openModal={openModal} handleSignOut={handleSignOut} />
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative md:order-none w-full md:max-w-sm p-2 md:p-0 bg-gray-900 md:bg-transparent">
                    <SearchBar />
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-4 items-center mr-4 text-lg">
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                    <Link to="/movies" className="hover:text-gray-400">Movies</Link>

                    {/* Login/Logout Links */}
                    {user ? (
                        <>
                            <p className="hover:text-gray-400">hello, {user?.displayName}</p>
                            <Link onClick={handleSignOut} to="/" className="hover:text-gray-400 focus:outline-none">Logout</Link>
                        </>
                    ) : (
                        <Link to="#" onClick={openModal} className="hover:text-gray-400 focus:outline-none">Login</Link>
                    )}
                </div>
            </nav>
            {/* Login Modal */}
            <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </header>
    );
}

export default Header;
