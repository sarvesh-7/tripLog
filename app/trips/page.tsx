import Link from 'next/link';
import React, { Suspense } from 'react';
import { fetchTripDetails } from '@/lib/trips';
import { Trip } from '@/lib/models/trip';
import TripsGrid from '@/components/Trip/TripsGrid';

async function TripsData() {
    const tripsData = await fetchTripDetails();
    if (!tripsData) return <h1>Not found</h1>
    return <TripsGrid tripsData={tripsData} />
}

function Trips() {

    return (
        <div>
            <header className='w-[90%] mt-3 mb-5 ml-auto mr-auto'>
                <h1 className='font-bold text-[3rem] mb-4'>
                    Delightful trips, captured <span className='bg-linear-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent'>by you</span>
                </h1>
                <p className='text-[1.5rem] mb-3'>
                    Choose your favorite travel moments and save them forever. It’s easy, inspiring, and fun!
                </p>
                <Link
                    href="/trips/share"
                    className="text-[1.5rem] hover:cursor-pointer bg-linear-to-r from-[#f9572a] to-[#d2a915] rounded-md px-2 py-2 font-bold">
                    Explore Memories
                </Link>
            </header>
            <main className='w-[90%] mt-3 mb-5 ml-auto mr-auto'>
                <Suspense fallback={<p className='flex justify-center my-5'>Loading...</p>} >
                    <TripsData />
                </Suspense>
            </main>
        </div>
    );
}

export default Trips;