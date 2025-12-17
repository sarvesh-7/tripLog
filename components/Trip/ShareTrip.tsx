import React from 'react';
import { useFormStatus } from 'react-dom';

function ShareTripButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type='submit'
            className='text-xl bg-linear-to-r from-[#f9572a] to-[#ffc905] text-white px-2 py-1'
            disabled={pending}
        >
            {pending ? "Submitting" : "Share Trip"}
        </button>
    );
}

export default ShareTripButton;