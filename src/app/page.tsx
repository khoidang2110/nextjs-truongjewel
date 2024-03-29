
import GalleryList from '@/components/gallery/GalleryList'

import {  projects } from '@/mockup'
import Image from 'next/image'

export default function Home() {
  return (
    <main  className='px-5'>
 <div className='pb-5 text-lg  text-gray-400'> Vòng tay:</div>


<GalleryList projects ={projects} filterType='vongTay'/>
 
   
    </main>
  )
}
