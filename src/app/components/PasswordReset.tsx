'use client';

import { ArrowLeft, Check, Code, Key, LockIcon } from "lucide-react";
import { useState } from "react";

interface PasswordResetProps {
    isOpen: boolean;
    onClose: () => void;
}

const PasswordReset: React.FC<PasswordResetProps> = ({ isOpen, onClose }) => {

    const [index, setIndex] = useState(1)

    if (!isOpen) {
        return null;
    }

    return (
        <div className="flex items-center justify-center min-h-screen px-4 fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg" onClick={onClose}></div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl w-[60%] z-50 max-md:w-[100%]">

                {index === 1 && <div>
                    <div className="flex justify-center">
                        <div className="mt-6 bg-black py-8 px-8 rounded-full">
                            <LockIcon className="text-white" />
                        </div>
                    </div>

                    <div className="p-6 flex flex-col items-center">
                        <div className="text-center mb-5">
                            <h2 className="text-2xl font-semibold">Forgot your password?</h2>
                            <p className="text-sm text-gray-500">Enter your email to reset it!</p>
                        </div>
                        <div className="flex-col w-full max-w-sm">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-black"
                                placeholder="Enter your e-mail"
                            />
                            <button className="w-full mt-8 text-center px-3 py-3 bg-black text-white rounded-2xl shadow-sm focus:outline-none focus:border-black" onClick={() => setIndex(2)}>Continue</button>
                        </div>

                    </div>
                </div>}

                {index === 2 && <div>
                    <div className="flex justify-center">
                        <div className="mt-6 bg-black py-8 px-8 rounded-full">
                            <Code className="text-white" />
                        </div>
                    </div>

                    <div className="max-sm:p-3 p-6 flex flex-col items-center">
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">Enter the Code</h2>
                            <p className="text-sm text-gray-500">Enter the four digit code that we sent to your email address.</p>
                        </div>
                        <div className="flex-col w-full max-w-sm">
                            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs mt-10 gap-5">
                                {[1, 2, 3, 4].map((index) => (
                                    <div key={index} className="w-16 h-16 border-2 border-black rounded-xl">
                                        <input
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-black"
                                            type="text"
                                        />
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-4 text-center px-3 py-3 bg-black text-white rounded-2xl shadow-sm focus:outline-none focus:border-black" onClick={() => setIndex(3)}>Continue</button>
                        </div>

                    </div>
                </div>}

                {index === 3 && <div>
                    <div className="flex justify-center">
                        <div className="mt-6 bg-black py-8 px-8 rounded-full">
                            <Key className="text-white" />
                        </div>
                    </div>

                    <div className="max-sm:p-3 p-6 flex flex-col items-center">
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">Set your new password</h2>
                            <p className="text-sm text-gray-500">Your new password should be different from passwords previously used.</p>
                        </div>
                        <div className="flex-col w-full max-w-sm">
                            <div className="my-3">
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password1"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-black"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="text-sm font-medium text-gray-700">Confirm your new password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="password2"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-black"
                                />
                            </div>
                            <button className="w-full mt-4 text-center px-3 py-3 bg-black text-white rounded-2xl shadow-sm focus:outline-none focus:border-black" onClick={() => setIndex(4)}>Continue</button>
                        </div>

                    </div>
                </div>}


                {index === 4 && <div>
                    <div className="flex justify-center">
                        <div className="mt-6 bg-black py-8 px-8 rounded-full">
                            <Check className="text-white" />
                        </div>
                    </div>

                    <div className="p-6 flex flex-col items-center">
                        <div className="text-center mb-1">
                            <h2 className="text-2xl font-semibold">Password Reset!</h2>
                            <p className="mt-6 text-sm text-gray-500">Your password has been successfully reset,<br /> click below to continue access</p>
                        </div>
                        <div className="w-[90%]">
                            <button className="w-full mt-8 text-center px-3 py-3 bg-black text-white rounded-2xl shadow-sm focus:outline-none focus:border-black" onClick={onClose}>Continue</button>
                        </div>

                    </div>
                </div>}


                <div className="flex justify-center">
                    <button className="text-black text-sm mb-6 text-center flex gap-1 items-center" onClick={onClose}><ArrowLeft height={16} />Return to the login screen</button>
                </div>
            </div>
        </div>
    );
};

export default PasswordReset;
