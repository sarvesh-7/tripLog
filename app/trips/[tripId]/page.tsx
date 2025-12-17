import { fetchTripById } from '@/lib/trips';
import mongoose from 'mongoose';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

type PageProps = {
    params: {
        tripId: string
    }
}

async function TripDetailsPage({ params }: PageProps) {

    const { tripId } = await params;
    if (!tripId || !mongoose.isValidObjectId(tripId)) return notFound(); // Next.js helper
    const tripData = await fetchTripById(tripId);
    if (!tripData) {
        notFound();
    }
    return (
        <>
            <header className='w-[90%] max-w-6xl flex flex-wrap justify-center gap-10 mt-15 mx-auto'>
                <div className='w-[30rem] h-[20rem] relative rounded-md overflow-hidden'>
                    <Image src={tripData.image as string} alt="trip image" fill />
                </div>
                <div className='flex flex-col gap-2 justify-center'>
                    <h1 className='text-[2rem] sm:text-[3.5rem] uppercase'>{tripData.title}</h1>
                    <p className='italic text-[1.5rem]'>
                        <span className='text-[#cfa69b]'>by</span>
                        <span className='bg-linear-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent'>
                            <a href={`mailto: ${tripData.email}`}> {tripData.name}</a>
                        </span>
                    </p>
                    <p className='text-[1.25rem] sm:text-[1.5rem]'>{tripData.summary}</p>
                </div>
            </header>
            <main
                className='w-[60%] max-w-5xl mt-10 mb-2 mx-auto bg-[#6e6464] p-8 rounded-md text-[#13120f] text-[1.25rem]'
                dangerouslySetInnerHTML={{
                    __html: tripData.experience as string
                }}
            >
            </main>
        </>
    );
}

export default TripDetailsPage;