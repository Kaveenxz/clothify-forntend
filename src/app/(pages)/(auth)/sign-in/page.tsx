'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import loginImage from '@/app/images/log0in.jpg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import PasswordReset from '@/app/components/PasswordReset'

function SignInPage() {
    const router = useRouter();
    const [disabled, setIsDisabled] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    async function handleSubmit(event: React.FormEvent<HTMLButtonElement>) {
        let isWrong = false;
        event.preventDefault();

        const validationErrors: any = {
            email: '',
            password: ''
        }

        if (!formData.email.trim()) {
            isWrong = true;
            validationErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            isWrong = true;
            validationErrors.email = "Email is not valid";
        }

        if (!formData.password.trim()) {
            isWrong = true;
            validationErrors.password = "Password is required";
        }

        setErrors(validationErrors);
        if (!isWrong) {
            try {
                console.log(formData)
                router.push('/') // Redirect to home page
            } catch (error: any) {
                console.error(error);
            }
        }
    }

    const [isOpen, setIsOpen] = useState(false);
    const passwordReset = () => {
        setIsOpen(prev => !prev)
    }

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="hidden md:flex md:w-1/2 bg-blue-600 text-white flex-col justify-center items-center p-10" style={{ backgroundImage: `url(${loginImage.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>

            <div className="flex flex-col justify-center items-center bg-white p-10 md:w-1/2 w-full">
                <div className="w-full max-w-md">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold">CLOTHIFY</h2>
                        <p className="text-gray-600">Welcome back! Seller</p>
                    </div>
                    <div>
                        <div className='mb-4 flex flex-col'>
                            <label htmlFor="email" className="mt-3">Email</label>
                            <input
                                type="email"
                                className={`${disabled ? 'bg-[#d8d8d8] border rounded-md w-full px-3 py-3 focus:outline-none' : 'w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500'}`}
                                name="email"
                                onChange={handleChange}
                                placeholder="Enter your Email"
                                disabled={disabled}
                            />
                            {errors.email && <span className='text-red-500 text-xs'>{errors.email}</span>}
                        </div>

                        <div className='mb-4 flex flex-col'>
                            <label htmlFor="password" className="mt-3">Password</label>
                            <input
                                type="password"
                                className={`${disabled ? 'bg-[#d8d8d8] border rounded-md w-full px-3 py-3 focus:outline-none' : 'w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500'}`}
                                name="password"
                                onChange={handleChange}
                                placeholder="Enter your Password"
                                disabled={disabled}
                            />
                            {errors.password && <span className='text-red-500 text-xs'>{errors.password}</span>}
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">Remember me</label>
                            </div>
                            <div>
                                <button onClick={passwordReset} className="text-sm text-blue-600 hover:underline">Forgot Password?</button>
                            </div>
                        </div>

                        <div>
                            <button
                                className="text-white py-3 px-4 rounded-lg w-full shadow-md bg-[#000000]"
                                onClick={handleSubmit} disabled={disabled}
                            >Login
                            </button>
                        </div>

                        {isOpen && (
                            <div className='fixed z-10 inset-0 overflow-y-auto'>
                                <PasswordReset isOpen={isOpen} onClose={passwordReset} />
                            </div>
                        )}
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">Don’t have an account? <Link href="./sign-up" className="text-blue-600 hover:underline">Create an account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;
