'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Camera, Trash } from 'lucide-react'
function page() {

    const [selectedImage, setSelectedImage] = useState(null)

    const [method, setMethod] = useState('General')

    const handleImageChange = (event: any) => {
        const file = event.target.files[0]
        if (file) {
            const reader: any = new FileReader()
            reader.onloadend = () => {
                setSelectedImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleRemoveImage = () => {
        setSelectedImage(null)
    }
    const handleNextClick = () => {
        setMethod('Advance')
    }
    return (
        <div className='my-3 mx-3 w-screen'>
            <div className='flex justify-between items-center mb-5'>
                <div>
                    <h1 className='text-3xl font-semibold'>Add New Product</h1>
                    <p>You can see sales analysis results more clearly and completely.</p>
                </div>

                <div className='flex gap-5'>
                    <button className='border-2 border-black px-8 rounded-full'>Cancel</button>
                    <button className='bg-[#5c77ff] px-10 py-2 rounded-full text-[#fff]'>Save</button>
                </div>
            </div>

            <div className='flex gap-5 mb-5 mx-5'>
                <h2 className={`${method == "General" ? 'text-[#5c77ff] underline' : ''}`}>General</h2>
                <h2 className={`${method == "Advance" ? 'text-[#5c77ff] underline' : ''}`}>Advance</h2>
            </div>

            <div className='flex gap-5 justify-between w-[100%]'>
                <div className=' w-1/3'>


                    <div className='border-2 p-3 rounded-3xl mb-3'>
                        <h2 className='text-left text-xl'>Tumbnail</h2>

                        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg max-w-lg mx-auto">
                            <label className="relative cursor-pointer">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                                <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg transition-all hover:border-black">
                                    {selectedImage ? (
                                        <Image
                                            src={selectedImage}
                                            alt="Selected"
                                            width={300}
                                            height={300}
                                            className="object-cover rounded-lg h-[10rem] w-[12rem]"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center text-gray-500">
                                            <Camera size={48} />
                                            <p className="mt-2">Click to upload an image</p>
                                        </div>
                                    )}
                                </div>
                            </label>
                            {selectedImage && (
                                <button
                                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all flex items-center"
                                    onClick={handleRemoveImage}
                                >
                                    <Trash className="mr-2" />
                                    Remove Image
                                </button>
                            )}
                        </div>

                    </div>

                    <div className='border-2 p-3 rounded-3xl'>
                        <h2 className='text-left text-xl mb-3'>Product Information</h2>
                        <hr />

                        <div className='mt-3'>
                            <h3 className=''>Categories</h3>

                            <select name="" id="" className='border-2 w-full h-10 rounded-3xl px-3 mt-3'>
                                <option value="women">Women</option>
                                <option value="men">Men</option>
                                <option value="kids">Kids</option>
                            </select>
                        </div>
                    </div>

                    <div className='border-2 p-3 rounded-3xl mt-5'>
                        <div className='flex justify-between'>
                            <h2 className='text-left text-xl mb-3'>Status</h2>
                            <div className='bg-green-500 w-3 h-3 rounded-full'></div>
                        </div>
                        <hr />

                        <div className='mt-3'>
                            <h3 className=''>Set status</h3>

                            <select name="" id="" className='border-2 w-full h-10 rounded-3xl px-3 mt-3'>
                                <option value="women">Published</option>
                                <option value="men">Not Published</option>
                                <option value="kids">Pending</option>
                            </select>
                        </div>
                    </div>
                    <button className='mt-5 bg-[#5c77ff] w-full text-white py-3 rounded-3xl' onClick={handleNextClick}>Next</button>
                </div>

                {method == 'General' &&
                    <div className=' w-[70%]'>
                        <div className='px-5 py-5'>
                            <div className=''>
                                <div className='border-2 rounded-3xl px-5 mb-5'>
                                    <h1 className='my-3 text-2xl'>General</h1>
                                    <hr />

                                    <h3 className='mt-3 mb-2'>Product Name</h3>
                                    <div className='flex-col border-2 rounded-3xl px-3 py-2'>
                                        <input type="text" name="" id="" placeholder="Product Name" />
                                    </div>
                                    <label htmlFor="" className='text-xs'>A product name is required and recommended to be unique</label>

                                    <h3 className='mt-3 mb-2'>Description</h3>
                                    <div className='flex-col border-2 rounded-3xl px-3 py-2'>
                                        <textarea name="" id="" placeholder='Enter the product description here...' className='w-full hover:border-none'></textarea>
                                    </div>
                                    <label htmlFor="" className='text-xs'>Set a description to the product for beter visibility.</label>

                                </div>
                                <div className='border-2 rounded-3xl px-5 mb-5'>
                                    <h1 className='my-3 text-2xl'>Pricing</h1>
                                    <hr />

                                    <h3 className='mt-3 mb-2'>Base Price</h3>
                                    <div className='flex-col border-2 rounded-3xl px-3 py-2'>
                                        <input type="text" name="" id="" placeholder="Base price" />
                                    </div>
                                    <label htmlFor="" className='text-xs'>Set product price</label>

                                    <h3 className='mt-3 mb-2'>Discount Type</h3>
                                    <div className='flex gap-5'>
                                        <div className='border-2 rounded-3xl px-3 py-2'>Method 01</div>
                                        <div className='border-2 rounded-3xl px-3 py-2'>Method 01</div>
                                        <div className='border-2 rounded-3xl px-3 py-2'>Method 01</div>

                                    </div>
                                    <label htmlFor="" className='text-xs mt-1'>Select discount method if have</label>

                                </div>

                            </div>
                        </div>
                    </div>
                }

                {method == 'Advance' &&
                    <div className=' w-[70%]'>

                        <div className='px-5 py-5'>
                            <div className=''>
                                <div className='border-2 rounded-3xl px-5 mb-5'>
                                    <h1 className='my-3 text-2xl'>General</h1>
                                    <hr />

                                    <h3 className='mt-3 mb-2'>Product Name</h3>
                                    <div className='flex-col border-2 rounded-3xl px-3 py-2'>
                                        <input type="text" name="" id="" placeholder="Product Name" />
                                    </div>
                                    <label htmlFor="" className='text-xs'>A product name is required and recommended to be unique</label>

                                    <h3 className='mt-3 mb-2'>Description</h3>
                                    <div className='flex-col border-2 rounded-3xl px-3 py-2'>
                                        <textarea name="" id="" placeholder='Enter the product description here...' className='w-full hover:border-none'></textarea>
                                    </div>
                                    <label htmlFor="" className='text-xs'>Set a description to the product for beter visibility.</label>

                                </div>
                                <div className='border-2 rounded-3xl px-5 mb-5'>
                                    <h1 className='my-3 text-2xl'>Pricing</h1>
                                    <hr />

                                    <h3 className='mt-3 mb-2'>Base Price</h3>
                                    <div className='flex-col border-2 rounded-3xl px-3 py-2'>
                                        <input type="text" name="" id="" placeholder="Base price" />
                                    </div>
                                    <label htmlFor="" className='text-xs'>Set product price</label>

                                    <h3 className='mt-3 mb-2'>Discount Type</h3>
                                    <div className='flex gap-5'>
                                        <div className='border-2 rounded-3xl px-3 py-2'>Method 01</div>
                                        <div className='border-2 rounded-3xl px-3 py-2'>Method 01</div>
                                        <div className='border-2 rounded-3xl px-3 py-2'>Method 01</div>

                                    </div>
                                    <label htmlFor="" className='text-xs mt-1'>Select discount method if have</label>

                                </div>

                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default page