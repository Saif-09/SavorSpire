'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import savourSpireLogoDesktop from "@/../public/assets/savourSpireLogoDesktop.png";
import loginBlobMobile from "@/../public/assets/loginBlobMobile.png";
import loginPageImage from "@/../public/assets/loginPageImage.webp";
import { User, Lock, Eye, EyeOff, Facebook, Twitter, Instagram, Mail, AlertCircle } from 'lucide-react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Here you would typically make an API call to verify the credentials
        // For this example, we'll just simulate an incorrect login
        setError('Incorrect email or password');
        // Add a subtle shake animation to the form
        const form = e.target;
        form.classList.add('animate-shake');
        setTimeout(() => form.classList.remove('animate-shake'), 500);
    };

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

            {/* Right side: Login Form */}
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
                    <h1 className='text-[1.5rem] text-apricot font-semibold mt-[150px] flex justify-end pr-20'>Log In</h1>
                </div>

                {/* Desktop heading */}
                <h1 className='hidden md:block text-6xl text-apricot font-semibold mt-64 text-center'>Log In</h1>

                {/* Login form */}
                <div className="px-8 md:px-32 pt-6 pb-8 flex-grow flex flex-col justify-center">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-100 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <div className="flex items-center">
                                    <AlertCircle className="mr-2" size={20} />
                                    <span>{error}</span>
                                </div>
                            </div>
                        )}
                        <div className="relative">
                            <input
                                className={`w-full px-3 pl-10 py-3 text-silver border rounded-lg focus:outline-none bg-linen ${error ? 'border-red-500' : ''}`}
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <User className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" size={20} />
                        </div>

                        <div className="relative">
                            <input
                                className={`w-full px-3 pl-10 py-3 text-silver border rounded-lg focus:outline-none bg-linen ${error ? 'border-red-500' : ''}`}
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-linen focus:ring-linen border-silver rounded"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-silver">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-rose-quartz hover:text-[#5d475e]">
                                    Forgot Password
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-fawn text-isabelline font-bold py-3 px-4 rounded-lg hover:bg-[#D6B78F] focus:outline-none focus:shadow-outline text-lg"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500 mb-4">Or Sign in with</p>
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

export default Login;