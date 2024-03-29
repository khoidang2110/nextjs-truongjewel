'use client'
import { useParams } from 'next/navigation'

import Link from "next/link";

import { projects } from '@/mockup'
import Album from '@/components/gallery/Album';

export default function Detail() {
  const params = useParams()
console.log(params.id)
const currentAlbum = projects[Number(params.id)-1]
  return (
    <section >
      <p className=' ml-10 capitalize opacity-70 fixed pt-10'>{currentAlbum.type}:

      </p>
      <div className='text-center pt-20 ' >
        <div className='fixed bg-white w-full'>
        <h1 className='text-2xl  '>
{currentAlbum.title}</h1>
      <p className='pl-10'>{currentAlbum.description}</p>
        </div>

      
      <Album projects={currentAlbum} direct='flex-col pt-20'/>
      </div>

    </section>
  );
}
