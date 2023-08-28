'use client';

import { Avatar, Dropdown, Navbar, } from 'flowbite-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div className=''>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 my-gb2">
                <div className="flex flex-wrap justify-between lis-center mx-auto max-w-screen-xl p-4">
                    <div className='flex gap-3 items-center'>
                        <h2 className='text-gray-500 text-xs'>FOLLOW US</h2>
                        <FaFacebook className='hover:text-gray-500 text-xs'></FaFacebook>
                        <FaTwitter className='hover:text-gray-500 text-xs'></FaTwitter>
                        <FaInstagram className='hover:text-gray-500 text-xs'></FaInstagram>
                        <FaLinkedin className='hover:text-gray-500 text-xs'></FaLinkedin>
                    </div>
                    <div className="flex items-center">
                        <div className='flex flex-row text-end gap-3'>
                            <a href="tel:5541251234" className="mr- text-xs  text-gray-500 dark:text-white hover:underline">Mobile Bank: (555) 412-1234</a>
                            <a href="#" className="mr- text-xs  text-gray-500 dark:text-white hover:underline">Bank: 4242 0654 3456 2345</a>
                            {/* <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Sign Out</a> */}
                        </div>
                    </div>
                </div>
            </nav>
            <Navbar
                fluid
                rounded
                // className='py-8'
            >
                <Link href="/" className="flex lis-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-blue-950">Tiny-Hearts-Refuge</span>
                </Link>
                <div className="flex md:order-2">
                    <Dropdown
                        inline
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
                    >
                        <div>
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    Bonnie Green
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    name@flowbite.com
                                </span>
                            </Dropdown.Header>
                            <ul className='px-4 space-y-3 text-sm'>
                                <li>
                                    Dashboard
                                </li>
                                <li>
                                    Settings
                                </li>
                                <li>
                                    Earnings
                                </li>
                                <Dropdown.Divider />
                                <li>
                                    Sign out
                                </li>
                            </ul>
                        </div>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        active
                        href="#"
                    >
                        <p>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="/template">
                        Template
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>

            </Navbar>

        </div>
    );
};

export default NavBar;