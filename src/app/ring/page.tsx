
import GalleryList from '@/components/gallery/GalleryList'

import { projects } from '@/mockup'



export default function Ring() {
  return (
    <main  className='px-5'>
 
 <div className='pb-5 text-lg  text-gray-400'>Nhẫn:</div>

 <GalleryList projects ={projects} filterType='nhan'/>
 
   
    </main>
  )
}
