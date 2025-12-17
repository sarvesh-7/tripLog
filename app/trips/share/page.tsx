'use client';
import ImagePicker from '@/components/ImagePicker';
import ShareTripButton from '@/components/Trip/ShareTrip';
import { FormState, shareTrip } from '@/lib/action';
import React, { useActionState } from 'react';

export const initialState: FormState = {
    message: ""
}

function ShareTrip() {

    const [formState, submitFormHandler] = useActionState(shareTrip, initialState);

    return (
        <div className='flex flex-col items-center mt-10 gap-6 w-[90%] max-w-2xl m-auto'>
            <header className='text-[1.5rem]'>
                Share your <span className='bg-linear-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent'>
                    travel experience
                </span>
            </header>
            <form className='w-full' action={submitFormHandler}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' name='name' defaultValue={formState.fields?.name || ""}/>
                <label htmlFor='emailId'>Email ID</label>
                <input type='email' id='emailId' name='emailId' required defaultValue={formState.fields?.emailId || ""}/>
                <label htmlFor='location'>Location</label>
                <input type='location' id='location' name='location' required defaultValue={formState.fields?.location || ""}/>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' name='title' required defaultValue={formState.fields?.title || ""}/>
                <label htmlFor='summary'>Summary</label>
                <input type='text' id='summary' name='summary' required defaultValue={formState.fields?.summary || ""}/>
                <div className='flex gap-2'>
                    <p className='w-full'>
                        <label htmlFor='dateFrom'>Date From:</label>
                        <input type='date' id='dateFrom' name='dateFrom' required defaultValue={formState.fields?.dateFrom || ""}/>
                    </p>
                    <p className='w-full'>
                        <label htmlFor='dateTo'>Date To:</label>
                        <input type='date' id='dateTo' name='dateTo' required defaultValue={formState.fields?.dateTo || ""}/>
                    </p>
                </div>
                <label htmlFor='experience'>Experience</label>
                <textarea rows={10} id='experience' name='experience' required defaultValue={formState.fields?.experience || ""}/>
                <ImagePicker name="image" label="Your Image"/>
                <div className='flex justify-center'>
                    <ShareTripButton/>
                </div>
            </form>
            {
                formState.message && <p className='text-red-400 font-bold'>{formState.message}</p>
            }
        </div>
    );
}

export default ShareTrip;