import React from 'react';
import community1 from "@/assets/community1.png";
import community2 from "@/assets/community2.png";
import community3 from "@/assets/community3.png";
import Image from 'next/image';

function page() {
    return (
        <div className='flex flex-col w-[90%] gap-20 m-auto justify-center items-center mt-10 text-center'>
            <header className='flex flex-col gap-6 m-auto'>
                <h1 className='text-6xl font-bold'>
                    One shared passion: 
                </h1>
                <p>
                    Join our community and relive your journeys with people who love exploring as much as you do!
                </p>
            </header>
            <main className='flex flex-col gap-10 m-auto text-center items-center'>
                <h2 className='text-4xl font-bold'>
                    Community Perks
                </h2>
                <ul className='flex flex-col gap-6 text-2xl'>
                    <li>
                        <Image className='w-[8rem] h-[8rem] m-auto mb-4' src={community1} alt="Share & discover trips icon"/>
                        <p>Share & Discover Trips</p>
                    </li>
                    <li>
                        <Image className='w-[8rem] h-[8rem] m-auto mb-4' src={community2} alt="Share & discover trips icon"/>
                        <p>Log memories & photos</p>
                    </li>
                    <li>
                        <Image className='w-[8rem] h-[8rem] m-auto mb-4' src={community3} alt="Share & discover trips icon"/>
                        <p>Find travel buddies & like-minded explorers</p>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default page;