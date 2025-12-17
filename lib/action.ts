'use server';
import { Trip } from "./models/trip";
import xss from "xss";
import { saveTrips } from "./trips";
import fs from "node:fs"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type FormState = {
    message: string;
    fields?: Record<string, any>;
}

function isEmptyText(text: any) {
    return !text || text.trim() === ''
}

export async function shareTrip(prevState: FormState, formData: FormData) {

    const image = formData.get('image');
    if (!image || typeof image === 'string') {
        throw new Error('Invalid image file')
    }
    const filePath = `/images/${Date.now()}.${image!.name.split('.').pop()}`;
    const experience = xss(formData.get('experience') as string);

    const stream = fs.createWriteStream(`public/${filePath}`);
    const bufferedImage = await image!.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error("Saving image failed");
        }
    });

    const tripDoc: Trip = {
        name: formData.get('name') as string,
        email: formData.get('emailId') as string,
        title: formData.get('title') as string,
        location: formData.get('location') as string,
        summary: formData.get('summary') as string,
        dateFrom: new Date(formData.get('dateFrom') as string).toISOString() as string,
        dateTo: new Date(formData.get('dateTo') as string).toISOString() as string,
        experience: experience,
        image: filePath
    }

    if (isEmptyText(tripDoc.name) || isEmptyText(tripDoc.email) || isEmptyText(tripDoc.title) || isEmptyText(tripDoc.location) ||
        isEmptyText(tripDoc.summary) || isEmptyText(tripDoc.dateFrom) || isEmptyText(tripDoc.dateTo) || isEmptyText(tripDoc.experience) || isEmptyText(tripDoc.image)) {
        const data = Object.fromEntries(formData);
        return {
            message: "please fill all the fields",
            fields: data
        }
    }

    await saveTrips(tripDoc);
    revalidatePath('/trips');
    redirect('/trips');
}