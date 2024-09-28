import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import savourSpireLogo from "@/../public/assets/savourSpireLogo.png";
import savourSpireLogoDesktop from "@/../public/assets/savourSpireLogoDesktop.png";

const Footer = () => {
    return (
        <footer className=" bg-isabelline text-gray-800 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Image
                            src={savourSpireLogo}
                            className="md:hidden ml-2"
                            width={110}
                            height={52}
                            alt="SavorSpire"
                        />
                        <Image
                            src={savourSpireLogoDesktop}
                            className="hidden md:block"
                            width={203}
                            height={97}
                            alt="SavorSpire"

                        />
                        <h3 className="text-xl font-bold mb-4 ml-10 mt-2">Savour Spire</h3>
                        <p className="mb-4 mr-4">Bringing the flavors of the world to your kitchen.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-800 hover:text-orange-500"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-800 hover:text-orange-500"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-800 hover:text-orange-500"><Twitter size={20} /></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-orange-500">Home</a></li>
                            <li><a href="#" className="hover:text-orange-500">Shop</a></li>
                            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                            <li><a href="#" className="hover:text-orange-500">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-orange-500">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-orange-500">Returns & Exchanges</a></li>
                            <li><a href="#" className="hover:text-orange-500">FAQs</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center"><Mail size={16} className="mr-2" /> info@spicehaven.com</li>
                            <li className="flex items-center"><Phone size={16} className="mr-2" /> (123) 456-7890</li>
                            <li className="flex items-center"><MapPin size={16} className="mr-2" /> 123 Spice Street, Flavor City</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-300 text-center">
                    <p>&copy; 2024 Spice Haven. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;