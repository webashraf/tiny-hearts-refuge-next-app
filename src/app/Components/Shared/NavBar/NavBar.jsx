'use client';

import { Avatar, Dropdown, Navbar, li } from 'flowbite-react';


import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div className=''>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between lis-center mx-auto max-w-screen-xl p-4">
                    <Link href="/" className="flex lis-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-blue-950">Tiny-Hearts-Refuge</span>
                    </Link>
                    <div className="flex items-center">
                        <a href="tel:5541251234" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
                        <a href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                    </div>
                </div>
            </nav>
            <Navbar
                fluid
                rounded
            >

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
                    <Navbar.Link href="#">
                        About
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