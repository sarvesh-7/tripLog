'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppLogo from "@/assets/AppLogo.png";
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

function MainHeader() {

    return (
        <header className="w-full bg-linear-to-r from-[#6a5247] to-[#8f3a09] text-white shadow-md">
            <nav className="px-6 py-4 flex justify-between gap-4 items-center">
                <div>
                    <Link href="/" className='font-bold flex gap-2 items-center'>
                        <Image src={AppLogo} height={40} width={40} alt='App logo' />
                        NEXTLEVEL TRIP
                    </Link>
                </div>
                <ul className='flex gap-6 font-bold'>
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
            </nav>
        </header>
    );
}

export default MainHeader;