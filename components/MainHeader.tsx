'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppLogo from "@/assets/AppLogo.png";
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

function MainHeader() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-linear-to-r from-[#6a5247] to-[#8f3a09] text-white shadow-md">
            <nav className="px-6 py-4 flex justify-between gap-4 items-center">
                <div>
                    <Link href="/" className='font-bold flex gap-2 items-center'>
                        <Image src={AppLogo} height={40} width={40} alt='App logo' />
                        NEXTLEVEL TRIP
                    </Link>
                </div>
                <ul className='hidden md:flex gap-6 font-bold'>
                    <li>
                        <NavLink href="/trips">
                            Browse Trips
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">
                            Trips Community
                        </NavLink>
                    </li>
                </ul>
                <button
                    className='md:hidden flex flex-col gap-1 bg-[#282c34]'
                    aria-label='Toggle Menu'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className='h-0.5 w-6 bg-white'></span>
                    <span className='h-0.5 w-6 bg-white'></span>
                    <span className='h-0.5 w-6 bg-white'></span>
                </button>
            </nav>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className='md:hidden px-6 pb-4'>
                    <ul className='flex flex-col gap-3 font-bold'>
                        <li>
                            <NavLink href="/trips">
                                Browse Trips
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">
                                Trips Community
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default MainHeader;