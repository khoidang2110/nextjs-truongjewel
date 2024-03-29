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
      <div className='pt-10'>
      <Link href={currentAlbum.link} className="">
            <p className=' ml-10 capitalize  fixed  bg-cyan-950 text-white  py-2 px-4 border rounded-lg shadow'>{currentAlbum.type}

</p>
              </Link>
      </div>

      
      <div className='text-center pt-20 ' >
        <div className=' bg-white w-full'>
        <h1 className='text-2xl  '>
{currentAlbum.title}</h1>
      <p className='pl-10'>{currentAlbum.description}</p>
        </div>

      
      <Album projects={currentAlbum} direct='flex-col pt-12'/>
      </div>

    </section>
  );
}
