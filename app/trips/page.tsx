import Link from 'next/link';
import React, { Suspense } from 'react';
import { fetchTripDetails } from '@/lib/trips';
import { Trip } from '@/lib/models/trip';
import TripsGrid from '@/components/Trip/TripsGrid';

export const metadata = {
    title : "All Trips",
    description: "Browse trips as per your requirement"
}

async function TripsData() {
    const tripsData = await fetchTripDetails();
    if (!tripsData) return <h1>Not found</h1>
    return <TripsGrid tripsData={tripsData} />
}

function Trips() {

    return (
        <div>
            <header className='w-[90%] mt-5 mb-5 ml-auto mr-auto'>
                <h1 className='font-bold text-3xl lg:text-5xl mb-5'>
                    Delightful trips, captured <span className='bg-linear-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent'>by you</span>
                </h1>
                <p className='lg:text-2xl mb-3'>
                    Choose your favorite travel moments and save them forever. It’s easy, inspiring, and fun!
                </p>
                <Link
                    href="/trips/share"
                    className="lg:text-2xl hover:cursor-pointer bg-linear-to-r from-[#f9572a] to-[#d2a915] rounded-md px-2 py-2 font-bold">
                    Explore Memories
                </Link>
            </header>
            <main className='w-[90%] mt-3 ml-auto mr-auto'>
                <Suspense fallback={<p className='flex justify-center my-5'>Loading...</p>} >
                    <TripsData />
                </Suspense>
            </main>
        </div>
    );
}

export default Trips;