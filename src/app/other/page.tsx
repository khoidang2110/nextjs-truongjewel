
import GalleryList from '@/components/gallery/GalleryList'

import { projects } from '@/mockup'



export default function Pendant() {
  return (
    <main  className='px-5'>
 
 <div className='pb-5 text-lg  text-gray-400'>Sản phẩm khác:</div>

 <GalleryList projects ={projects} filterType='exhibition'/>
 
   
    </main>
  )
}
