import { Trip, TripWithId } from '@/lib/models/trip';
import Image from 'next/image';
import React from 'react';
import ManaliImg from "@/public/images/manali.png";
import Link from 'next/link';

type TripCardProps = {
    trip: TripWithId
}

function TripCard(props: TripCardProps) {

    const { trip } = props;

    return (
        <div className='flex flex-col justify-between rounded-md shadow-md bg-[#431d07] gap-2 overflow-hidden h-full'>
            <header>
                <div className='h-[15rem] relative'>
                    <Image src={trip.image} alt="trip image" fill />
                </div>
                <div className='m-3'>
                    <p className='text-2xl'>{trip.title}</p>
                    <p className='italic text-[12px]'>by {trip.name}</p>
                </div>
            </header>
            <div className='flex flex-col justify-between h-full'>
                <p className='mx-3'>{trip.summary}</p>
                <Link
                    href={`/trips/${trip._id}`}
                    className="ml-auto mr-3 my-3 text-right text-[1rem] hover:cursor-pointer bg-linear-to-r from-[#f9572a] to-[#d2a915] rounded-md px-2 py-2 font-bold">
                    View Details
                </Link>
            </div>
        </div>
    );
}

export default TripCard;