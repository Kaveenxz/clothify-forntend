'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import signupImage from '@/app/images/signup.jpg'; // Replace with the actual image path
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Page() {
    const route = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        contact: ''
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        contact: ''
    });

    function handleChange(event:any) {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    function validateStep1() {
        let isWrong = false;
        const validationErrors:any = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };

        if (!formData.firstName.trim()) {
            isWrong = true;
            validationErrors.firstName = "First name is required";
        }
        if (!formData.lastName.trim()) {
            isWrong = true;
            validationErrors.lastName = "Last name is required";
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
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/.test(formData.password)) {
            isWrong = true;
            validationErrors.password = "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, and a special character";
        }

        setErrors(validationErrors);
        return !isWrong;
    }

    async function handleSubmit(event:any) {
        event.preventDefault();
        if (step === 1) {
            if (validateStep1()) {
                setStep(2);
            }
        } else {
            // Validate Step 2
            console.log(formData);
            // Simulating form submission
            route.push("/login");
        }
    }

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="hidden md:flex md:w-1/2 bg-blue-600 text-white flex-col justify-center items-center p-10" style={{ backgroundImage: `url(${signupImage.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
            <div className="flex flex-col justify-center items-center bg-white p-10 md:w-1/2 w-full">
                <div className="w-full max-w-md">
                    <form onSubmit={handleSubmit}>
                        {step === 1 && (
                            <>
                                <div className="text-center mb-6">
                                    <h2 className="text-3xl font-bold">CLOTHIFY</h2>
                                    <p className="text-gray-600">Welcome to Clothify! Register here</p>
                                </div>
                                <div className="mb-4 w-full flex gap-4 max-md:flex-col">
                                    <label htmlFor="firstName" className="sr-only">First Name</label>
                                    <div>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full px-3 lg:py-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                            name='firstName'
                                            onChange={handleChange}
                                            placeholder="First Name"
                                        />
                                        {errors.firstName && <span className='text-red-700 text-xs'>{errors.firstName}</span>}
                                    </div>
                                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                                    <div>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full px-3 lg:py-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                            name='lastName'
                                            onChange={handleChange}
                                            placeholder="Last Name"
                                        />
                                        {errors.lastName && <span className='text-red-700 text-xs'>{errors.lastName}</span>}
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='email' className='sr-only'>Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-3 lg:py-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                        name='email'
                                        onChange={handleChange}
                                        placeholder="Enter your Email"
                                    />
                                    {errors.email && <span className='text-red-700 text-xs'>{errors.email}</span>}
                                </div>
                                <div className='w-full flex flex-col'>
                                    <label htmlFor='password' className='sr-only'>Password</label>
                                    <input
                                        type="password"
                                        className="w-full px-3 lg:py-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                        name='password'
                                        onChange={handleChange}
                                        placeholder="Enter your Password"
                                    />
                                    {errors.password && <span className='text-red-700 text-xs'>{errors.password}</span>}
                                </div>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <div className='mb-3 md:mt-6 lx:mt-0'>
                                    <label htmlFor='address' className='sr-only'>Address</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 lg:py-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                        name='address'
                                        onChange={handleChange}
                                        placeholder="Address"
                                    />
                                    {errors.address && <span className='text-red-700 text-xs'>{errors.address}</span>}
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='contact' className='sr-only'>Contact Number</label>
                                    <input
                                        type="text"
                                        className="w-full px-3 lg:py-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                        name='contact'
                                        onChange={handleChange}
                                        placeholder="Contact Number"
                                    />
                                    {errors.contact && <span className='text-red-700 text-xs'>{errors.contact}</span>}
                                </div>
                            </>
                        )}
                        <div className="flex items-center justify-between my-4">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="h-4 w-4 text-[#1837DB] border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="remember" className="ml-2 text-sm text-gray-700">I agree to all the <b>Terms</b> and <b>Privacy Policies</b></label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className={`w-full lg:py-3 py-2 px-4 bg-[#000000] text-white rounded-lg shadow-md focus:outline-none`}>
                                {step === 1 ? 'Next' : 'Register'}
                            </button>
                        </div>
                        {step === 2 && (
                            <div className="text-center mt-2">
                                <button type="button" onClick={() => setStep(1)} className="text-blue-600 hover:underline">Back</button>
                            </div>
                        )}
                        <div className="text-center mt-2">
                            <p className="text-sm text-gray-600">Already a member? <Link href="./sign-in" className="text-blue-600 hover:underline">Login to account</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;
