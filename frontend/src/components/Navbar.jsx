import { Link } from "react-router-dom";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser, HiOutlineGift } from "react-icons/hi";

import avatarImg from "../assets/avatar.png"
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";

const navigation = [
    {name: "Dashboard", href:"/user-dashboard"},
    {name: "Orders", href:"/orders"},
    {name: "Cart Page", href:"/cart"},
    {name: "Check Out", href:"/checkout"},
]

const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems);
    const wishlistItems = useSelector(state => state.wishlist?.wishlistItems || []);
   
    const {currentUser, logout} = useAuth()
    
    const handleLogOut = () => {
        logout()
    }

    const token = localStorage.getItem('token');
  
    return (
        <header className="w-full font-primary">
            {/* Top Announcement Bar */}
            <div className="bg-gray-100 text-center py-2 text-sm text-gray-800">
                50% Off Store is Live, <strong>Shop Now!</strong>
            </div>

            {/* Main Navbar */}
            <nav className="bg-primary w-full py-4 px-4 md:px-8 border-b-2 border-primary">
                <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4">
                    
                    {/* Left - Logo */}
                    <Link to="/" className="flex items-center gap-2 flex-shrink-0">
                        {/* Custom Fake Logo to mimic Crossword */}
                        <div className="border-[3px] border-black p-1">
                            <span className="font-secondary font-bold text-xl block leading-none">C</span>
                        </div>
                        <span className="font-secondary font-bold text-lg tracking-widest uppercase hidden md:inline-block">CROSSWORD</span>
                    </Link>

                    {/* Left-Mid - Nav Links */}
                    <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
                        <Link to="/" className="hover:opacity-75">Books</Link>
                        <Link to="/" className="hover:opacity-75">Stationery</Link>
                        <Link to="/" className="hover:opacity-75">Toys</Link>
                        <Link to="/" className="hover:opacity-75">Gifts</Link>
                    </div>

                    {/* Center - Search */}
                    <div className="flex-1 max-w-xl relative hidden md:block group">
                        <input 
                            type="text" 
                            placeholder="Search For ISBN, Book Name, Author"
                            className="w-full bg-white text-gray-800 py-2.5 pl-4 pr-10 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-black/20"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black">
                            <IoSearchOutline className="size-5" />
                        </button>
                    </div>

                    {/* Right - Icons */}
                    <div className="flex items-center gap-5">
                         {/* Gift Icon placeholder */}
                        <Link to="/" className="hover:opacity-75 hidden sm:block">
                            <HiOutlineGift className="size-6" />
                        </Link>

                        {/* User Dropdown */}
                        <div className="relative">
                            {
                                currentUser ? <>
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-black' : ''}`} />
                                </button>
                                {
                                    isDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border border-gray-100 rounded z-40">
                                            <ul className="py-2 text-gray-700">
                                                { navigation.map((item) => (
                                                        <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                                            <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-50">
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                <li>
                                                    <button onClick={handleLogOut} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-red-500">
                                                        Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                                </> : token ? <Link to="/dashboard" className='hover:underline font-semibold'>Dashboard</Link> : (
                                    <Link to="/login" className="hover:opacity-75"> 
                                        <HiOutlineUser className="size-6" />
                                    </Link>
                                )
                            }
                        </div>
                        
                        {/* Wishlist */}
                        <Link to="/" className="hover:opacity-75 relative hidden sm:block">
                            <HiOutlineHeart className="size-6" />
                            {wishlistItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                                    {wishlistItems.length}
                               </span>
                            )}
                        </Link>

                        {/* Cart */}
                        <Link to="/cart" className="hover:opacity-75 relative flex items-center">
                            <HiOutlineShoppingCart className="size-6" />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-black text-primary text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                                    {cartItems.length}
                               </span>
                            )}
                        </Link>
                    </div>

                </div>
                
                {/* Mobile Search (Shows below nav on small screens) */}
                <div className="mt-3 md:hidden relative w-full">
                    <input 
                        type="text" 
                        placeholder="Search For ISBN, Book Name..."
                        className="w-full bg-white py-2 pl-4 pr-10 rounded focus:outline-none"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <IoSearchOutline className="size-5" />
                    </button>
                </div>

            </nav>
        </header>
    )
}

export default Navbar;