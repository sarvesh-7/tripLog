import React from 'react';
import TripCard from './TripCard';
import { Trip, TripWithId } from '@/lib/models/trip';

type TripsGridProps = {
    tripsData : TripWithId[]
}

function TripsGrid({tripsData} : TripsGridProps) {
    return (
        <div className='max-w-[90rem] grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-20 my-8 mx-auto p-0'>
            {
                tripsData.map((trip) => (
                    <TripCard trip={trip} key={trip._id} />
                ))
            }
        </div>
    );
}

export default TripsGrid;