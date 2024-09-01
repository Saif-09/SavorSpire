'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import savourSpireLogo from "@/../public/assets/savourSpireLogo.png";
import savourSpireLogoDesktop from "@/../public/assets/savourSpireLogoDesktop.png";
import searchIcon from "@/app/assets/search-icon-mob.svg";
import searchIconDT from "@/app/assets/search-icon-desktop.svg";
import profileIcon from "@/app/assets/profile-icon-mob.svg";
import profileIconDT from "@/app/assets/profile-icon-dt.svg";
import cartIcon from "@/app/assets/cart-icon-mob.svg";
import cartIconDT from "@/app/assets/cart-icon-dt.svg";
import hamburgerIcon from "@/app/assets/hamburger-icon-mob.svg";
import closeIcon from "@/app/assets/close-icon-mob.svg"; // Assuming you have a close icon

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = (): void => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="flex flex-col sticky top-0 z-10 w-full items-center justify-center bg-isabelline">
            <header className="flex md:justify-start items-center w-full max-w-[74rem] py-3 max-lg:px-4 bg-isabelline justify-between px-5">
                <div className="flex flex-row items-center">
                    {/* Hamburger Icon (Mobile Only) */}
                    <Image
                        src={menuOpen ? closeIcon : hamburgerIcon}
                        alt="Menu"
                        className="md:hidden cursor-pointer"
                        onClick={toggleMenu}
                    />

                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src={savourSpireLogo}
                            className="md:hidden ml-2"
                            width={110}
                            height={52}
                            alt="SavorSpire"
                        />
                        <Image
                            src={savourSpireLogoDesktop}
                            className="hidden md:block mr-3"
                            width={203}
                            height={97}
                            alt="SavorSpire"
                        />
                    </Link>
                </div>

                {/* Search Bar (Desktop Only) */}
                <div className="hidden md:flex items-center w-full max-w-[46.85rem] h-[3.125rem] mx-2 border border-silver-low-opacity px-8 py-2 cursor-pointer">
                    <Image
                        src={searchIconDT}
                        alt="Search"
                        className="h-6 w-6 mr-3"
                    />
                    <span className="text-silver text-lg">Search..</span>
                </div>

                {/* Icons */}
                <div className="flex flex-row gap-5 items-center">
                    <Link href="/search">
                        <Image
                            src={searchIcon}
                            alt="Search"
                            className="md:hidden"
                        />
                    </Link>
                    <Link href="/profile">
                        <Image
                            src={profileIcon}
                            alt="Profile"
                            className="md:hidden ml-2"
                        />
                        <Image
                            src={profileIconDT}
                            alt="Profile"
                            className="hidden md:block w-16 h-[3.525rem] mt-[0.325rem]"
                        />
                    </Link>
                    <Link href="/cart">
                        <Image
                            src={cartIcon}
                            alt="Cart"
                            className="md:hidden ml-2"
                        />
                        <Image
                            src={cartIconDT}
                            alt="Cart"
                            className="hidden md:block h-[3.525rem] mt-[0.325rem] -ml-0"
                        />
                    </Link>
                </div>
            </header>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-[4.5rem] left-0 w-full bg-white z-20 flex flex-col p-6 shadow-md">
                    <nav className="flex flex-col gap-4">
                        <Link href="/" className="text-lg text-black" onClick={toggleMenu}>Home</Link>
                        <Link href="/new-launches" className="text-lg text-black" onClick={toggleMenu}>New Launches</Link>
                        <Link href="/healthy-and-yummy" className="text-lg text-black" onClick={toggleMenu}>Healthy And Yummy</Link>
                        <Link href="/exotic-range" className="text-lg text-black" onClick={toggleMenu}>Exotic Range</Link>
                        <Link href="/contact" className="text-lg text-black" onClick={toggleMenu}>Contact Us</Link>
                    </nav>
                    <div className="mt-8">
                        <p className="text-base text-black mb-2">NEED HELP?</p>
                        <p className="text-base text-black">savorspire@gmail.com</p>
                    </div>
                    <div className="mt-8">
                        <p className="text-base text-black mb-2">Follow Us</p>
                        <div className="flex gap-4">
                            <Link href="https://www.facebook.com" className="text-base text-black">Facebook</Link>
                            <Link href="https://www.twitter.com" className="text-base text-black">Twitter</Link>
                            <Link href="https://www.instagram.com" className="text-base text-black">Instagram</Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop Menu */}
            <nav className="hidden md:flex justify-center items-center w-full max-w-[74rem] py-4 bg-isabelline mt-0">
                <div className="flex justify-between w-full max-w-[75rem]">
                    <Link href="/" className="text-base text-cadet-gray px-4 font-light">Home</Link>
                    <Link href="/new-launches" className="text-base text-cadet-gray px-4 font-light">New Launches</Link>
                    <Link href="/healthy-and-yummy" className="text-base text-cadet-gray font-light px-4">Healthy And Yummy</Link>
                    <Link href="/exotic-range" className="text-base text-cadet-gray px-4 font-light">Exotic Range</Link>
                    
                </div>
            </nav>
        </div>
    );
};

export default Header;