'use client';
import Image from "next/image";
import heroImage from "@/assets/hero-image.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="m-auto flex justify-center gap-9 mt-10 w-[90%] items-center">
        <div className="relative w-[25rem] h-[25rem] overflow-hidden rounded-xl">
          <Image src={heroImage} alt="hero image" fill />
        </div>
        <div className="flex flex-col gap-6 text-[1.5rem]">
          <h1 className="uppercase text-6xl font-bold bg-linear-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
            <p>Trip log for</p>
            <p>travel enthusiasts</p>
          </h1>
          <div>
            Capture and share travel memories from around the globe
          </div>
          <div className="flex gap-6 items-center">
            <Link href="/community" className="text-[#ffc905] hover:text-[#fadf7d]">Join the community</Link>
            <Link
              href="/trips"
              className="hover:cursor-pointer bg-linear-to-r from-[#f9572a] to-[#d2a915] rounded-md px-2 py-2 font-bold">
              Explore Memories
            </Link>
          </div>
        </div>
      </header>
      <main className="flex m-auto w-[50%] justify-center mt-10">
        <div className="flex flex-col p-5 text-center gap-20">
          <div className="flex flex-col gap-12">
            <p className="text-6xl font-bold">How it works</p>
            <p>
              Trip Logs is a tiny journal for travelers.
              Add a short entry with a photo, a few highlights, where it happened, and the date
              — we’ll keep it nicely formatted so you can browse later.
            </p>
            <p>
              Entries are public on the list page (you can add private mode later).
              Click a card to view full details, including the map link to the location.
            </p>
          </div>
          <div className="flex flex-col gap-12">
            <p className="text-6xl font-bold">Why Trip Logs</p>
            <p>
              Trip Logs is a tiny journal for travelers.
              Add a short entry with a photo, a few highlights, where it happened, and the date
              — we’ll keep it nicely formatted so you can browse later.
            </p>
            <p>
              Entries are public on the list page (you can add private mode later).
              Click a card to view full details, including the map link to the location.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
