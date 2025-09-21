

import React from 'react'
import Logo from '../../ui/Logo'
import { IoIosSend } from "react-icons/io";
import { RiMailUnreadLine } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import FooterDesktop from './FooterDesktop';


const Footer = () => {
    return (
        <>
            <div className=' pt-20 lg:hidden '>
                <div>
                    <div className='grid p-inline gap-4'>
                        <Logo />
                        <div className={"flex relative border rounded-lg border-gray-15 px-4 md:w-fit items-center"}>
                            <RiMailUnreadLine className='w-6 h-6' />
                            <input className='p-3 placeholder:text-sm w-full  outline-0' type='email' placeholder='Enter your Email' />
                            <IoIosSend className='w-6 h-6' />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 py-8 p-inline mt-10'>
                        <div className='grid pr-6'>
                            <ul className='grid  gap-3'>
                                <li className='mb-4 text-grey-60'>Home</li>

                                <li>
                                    <a href="#hero">Hero</a>
                                </li>
                                <li>
                                    <a href="#hero">Features</a>
                                </li>
                                <li>
                                    <a href="#hero">Properties</a>
                                </li>
                                <li>
                                    <a href="#hero">Testimonials</a>
                                </li>
                                <li className='border-b pb-6 border-gray-15 '>
                                    <a href="#hero">FAQ's</a>
                                </li>

                            </ul>

                            <ul className='grid py-6 border-b border-gray-15 gap-3'>
                                <li className='mb-4 text-grey-60'>Properties</li>

                                <li>
                                    <a href="#hero">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#hero">Categoies</a>
                                </li>


                            </ul>

                            <ul className='grid py-6 border-b border-gray-15 gap-3'>
                                <li className='mb-4 text-grey-60'>Contact Us</li>

                                <li>
                                    <a href="#hero">Contact Form</a>
                                </li>
                                <li>
                                    <a href="#hero">Our office</a>
                                </li>


                            </ul>

                        </div>

                        <div className=''>
                            <ul className='grid pl-6  border-l border-gray-15 gap-3'>
                                <li className='mb-4 text-grey-60'>About Us</li>

                                <li>
                                    <a href="#hero">Our Story</a>
                                </li>
                                <li>
                                    <a href="#hero">Our Works</a>
                                </li>
                                <li>
                                    <a href="#hero">How it Works</a>
                                </li>
                                <li>
                                    <a href="#hero">Our Team</a>
                                </li>
                                <li className='border-b  border-gray-15 pb-6'>
                                    <a href="#hero">Our Clients</a>
                                </li>

                            </ul>

                            <ul className='grid pl-6  border-l mt-4 border-gray-15 gap-3'>
                                <li className='mb-4 text-grey-60'>Services</li>

                                <li>
                                    <a href="#hero">Valuation Mastery</a>
                                </li>
                                <li>
                                    <a href="#hero">Strategic Marketing</a>
                                </li>
                                <li>
                                    <a href="#hero">Negotiation Wizardry</a>
                                </li>
                                <li>
                                    <a href="#hero">Closing Success</a>
                                </li>
                                <li className='border-b  border-gray-15 pb-6'>
                                    <a href="#hero">Properly Management</a>
                                </li>

                            </ul>
                        </div>





                    </div>
                </div>

                <div className=' flex mt-12 py-8 p-inline  bg-gray-10  gap-4 flex-col-reverse '>
                    <div className='text-center grid gap-2'>
                        <p>@2023 Estatien. All Rights Reserved.</p>
                        <p>Terms & Conditions</p>


                    </div>

                    <ul className='flex items-center gap-2 justify-center'>
                        <li className='grid place-content-center square-14 rounded-full bg-gray-80'>
                            <a href="">
                                <IoLogoFacebook className={"square-5"} />
                            </a>
                        </li>
                        <li className='grid place-content-center square-14 rounded-full bg-gray-80'>
                            <a href="">
                                <FaLinkedin className={"square-5"} />
                            </a>
                        </li>
                        <li className='grid place-content-center square-14 rounded-full bg-gray-80'>
                            <a href="">
                                <FaTwitter className={"square-5"} />
                            </a>
                        </li>

                        <li className='grid place-content-center square-14 rounded-full bg-gray-80'>
                            <a href="">
                                <IoLogoYoutube className={"square-5"} />                        </a>
                        </li>
                    </ul>
                </div>
            </div>
            <FooterDesktop />
        </>

    )
}

export default Footer