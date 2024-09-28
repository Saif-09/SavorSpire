'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import savourSpireLogoDesktop from "@/../public/assets/savourSpireLogoDesktop.png";
import loginBlobMobile from "@/../public/assets/loginBlobMobile.png";
import loginPageImage from "@/../public/assets/loginPageImage.webp";
import { User, Lock, Eye, EyeOff, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreePolicy, setAgreePolicy] = useState(false);

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left side: Logo and Image (visible on desktop) */}
            <div className="hidden md:flex md:w-1/2 bg-linen relative">
                <Image
                    src={savourSpireLogoDesktop}
                    alt="SavorSpire"
                    width={203}
                    height={97}
                    className="absolute top-10 left-10 z-10"
                />
                <Image
                    src={loginPageImage}
                    alt="SavorSpire"
                    layout="fill"
                    objectFit="cover"
                    className=""
                />
            </div>

            {/* Right side: Signup Form */}
            <div className="w-full md:w-1/2 flex flex-col">
                {/* Mobile background and logo */}
                <div
                    className='w-full h-[332px] bg-cover bg-center md:hidden'
                    style={{ backgroundImage: `url(${loginBlobMobile.src})` }}
                >
                    <div className='flex items-start pt-12 md:pt-20 md:pl-20'>
                        <Image
                            src={savourSpireLogoDesktop}
                            alt="SavorSpire"
                            width={110}
                            height={52}
                            sizes="(max-width: 768px) 110px, 203px"
                            className="ml-2 w-[110px] h-[52px]"
                        />
                    </div>
                    <h1 className='text-[1.5rem] text-apricot font-semibold mt-[150px] flex justify-end pr-20'>Sign Up</h1>
                </div>

                {/* Desktop heading */}
                <h1 className='hidden md:block text-6xl text-apricot font-semibold mt-32 text-center'>Sign Up</h1>

                {/* Signup form */}
                <div className="px-8 md:px-32 pt-6 pb-8 flex-grow flex flex-col justify-center">
                    <form className="space-y-4">
                        <div className='flex flex-row justify-between gap-2 '>
                            <div className="relative">
                                <input
                                    className="w-full px-3 pl-10 py-3 text-silver border rounded-lg focus:outline-none bg-linen"
                                    type="text"
                                    placeholder="First Name"
                                />
                                <User className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" size={20} />
                            </div>

                            <div className="relative">
                                <input
                                    className="w-full px-3 pl-10 py-3 text-silver border rounded-lg focus:outline-none bg-linen"
                                    type="text"
                                    placeholder="Last Name"
                                />
                                <User className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" size={20} />
                            </div>
                        </div>


                        <div className="relative">
                            <input
                                className="w-full px-3 pl-10 py-3 text-silver border rounded-lg focus:outline-none bg-linen"
                                type="email"
                                placeholder="Email"
                            />
                            <Mail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" size={20} />
                        </div>

                        <div className="relative">
                            <input
                                className="w-full px-3 pl-10 py-3 text-silver border rounded-lg focus:outline-none bg-linen"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                            />
                            <Lock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" size={20} />
                            <button
                                type="button"
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        <div className="relative">
                            <input
                                className="w-full px-3 pl-10 py-3 text-silver border rounded-lg focus:outline-none bg-linen"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                            />
                            <Lock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" size={20} />
                            <button
                                type="button"
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        <div className="flex items-center">
                            <input
                                id="agree-policy"
                                type="checkbox"
                                className="h-4 w-4 text-linen focus:ring-linen border-silver rounded"
                                checked={agreePolicy}
                                onChange={() => setAgreePolicy(!agreePolicy)}
                            />
                            <label htmlFor="agree-policy" className="ml-2 block text-sm text-silver">
                                I agree with the <a href="#" className="text-rose-quartz hover:text-[#5d475e]">Privacy Policy</a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-fawn text-isabelline font-bold py-3 px-4 rounded-lg hover:bg-[#D6B78F] focus:outline-none focus:shadow-outline text-lg"
                        >
                            Sign Up
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500 mb-4">Or Sign up with</p>
                        <div className="flex justify-center space-x-4 mt-1">
                            {[
                                { icon: Facebook, color: '#1877F2' },
                                { icon: Twitter, color: '#1DA1F2' },
                                { icon: Instagram, color: '#E4405F' },
                                { icon: Mail, color: '#EA4335' }
                            ].map(({ icon: Icon, color }, index) => (
                                <button
                                    key={index}
                                    className="p-2 rounded-lg hover:bg-[#E7C8A0] transition-colors duration-200"
                                >
                                    <Icon size={24} color={color} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;