import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import searchicon from "../../assets/searchicon.png";
import { AiOutlineClose } from 'react-icons/ai';
import menu from "../../assets/menu.svg";
import { ConnectButton } from '@rainbow-me/rainbowkit';



const Navbar = () => {

    const [showMobileNav, setShowMobileNav] = useState(false);

    const handleMobileMenu = () => {
        setShowMobileNav((o) => !o);
    };

    return (
        <nav class="bg-[#121113]">
            <div className='fixed top-0 right-0 left-0 bg-gradient z-50'>
                <div className='flex gap-2 justify-center items-center px-10 pt-8 pr-10'>
                    <img src={logo} alt='logo' />


                    <ul className='flex m-auto gap-16'>
                        <li className='hidden md:inline-block text-white'><Link to='/'>Discover</Link></li>
                        <li className='hidden md:inline-block  text-white'><Link to='/project-details'>Explore</Link></li>
                        <li className='hidden md:inline-block  text-white'><Link to='/contact-us'>Contact us</Link></li>
                        
                    </ul>
                    <img src={searchicon} alt='searchicon' width='13px' height='13px' />
                    {/* <button class="bg-gradient-to-r from-[#69FEB0] to-[#5DE4F7] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> */}
                    {/* Connect Wallet    </button> */}
                    <ConnectButton />
                    {/* Mobile Hamburger Menu */}
                    <div className='tab:hidden'>
                        <button onClick={handleMobileMenu}>
                            <img src={menu} alt='menu' />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {showMobileNav && (
                    <div className='py-9 px-11 tab:hidden fixed bg-[#150E28] w-full min-h-screen top-0 z-50'>
                        <div
                            className='flex justify-end mb-14'
                            onClick={() => setShowMobileNav(false)}
                        >
                            <AiOutlineClose
                                size={23}
                                className='border rounded-full border-purple-50 px-1'
                            />
                        </div>
                        <nav>
                            <ul className='flex flex-col gap-6 sm:gap-8 text-lg'>
                                <li>
                                    <NavLink
                                        href='/'
                                        onClick={handleMobileMenu}
                                        className='cursor-pointer'
                                    >
                                        Discover
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href='/project-details'
                                        onClick={handleMobileMenu}
                                        className='cursor-pointer'
                                    >
                                        Explore
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        href='/contact-us'
                                        onClick={handleMobileMenu}
                                        className='cursor-pointer'
                                    >
                                        Contact us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/sign-up'
                                        onClick={handleMobileMenu}
                                        className='cursor-pointer'
                                    >
                                        Sign up
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/sign-in'
                                        onClick={handleMobileMenu}
                                        className='cursor-pointer'
                                    >
                                        Sign in
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                    </div>
                )}


            </div>
        </nav>
    );
};

export default Navbar;