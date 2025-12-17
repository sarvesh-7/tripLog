'use client';
import Image from 'next/image';
import React, { ChangeEvent, useRef, useState } from 'react';

type ImagePickerProps = {
    name: string;
    label: string;
}

function ImagePicker({ name, label }: ImagePickerProps) {

    const [pickedImage, setPickedImage] = useState<string | null>(null);
    const imagePickerRef = useRef<HTMLInputElement>(null);

    const handleImageClick = () => {
        imagePickerRef.current!.click();
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) {
            setPickedImage(null);
            return;
        }
        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result as string);
        }
        fileReader.readAsDataURL(file);

    }
    console.log(pickedImage);

    return (
        <div className='picker'>
            <label htmlFor={name}>{label}</label>
            <div className='w-[10rem] h-[10rem] border-2 border-amber-50 flex justify-center items-center relative'>
                {
                    !pickedImage ? <p>No Image to show</p>
                        : <Image
                            src={pickedImage}
                            alt='Image picked by user'
                            fill
                        />
                }
            </div>
            <input
                type='file'
                accept='image/png image/jpeg'
                className='hidden!'
                id={name}
                name={name}
                ref={imagePickerRef}
                onChange={handleImageChange}
                required
            />
            <button
                onClick={handleImageClick}
                type='button'
            >
                Choose File
            </button>
        </div>
    );
}

export default ImagePicker;