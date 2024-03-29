'use client'
import styles from "./styles.module.css";

import { FC } from "react";
import { NO_IMAGE } from "@/constant";
import { IProject } from "@/interfaces/project";

interface PostListTypeSmallProps {
  projects: IProject;
  direct?:string
}
  
const Album: FC<PostListTypeSmallProps> = ({projects,direct}) => {


  return (

     <section className={styles.albumSection}>
<div className={direct ? `flex ${direct} justify-center items-center` : `flex flex-wrap px-20 ` }    >
  {projects?.image?.map((image: string, index: number) => (
   
  <div key={index} className={direct ? `py-5 w-4/5` : styles.albumItem}>
  
  <img src={image ?? NO_IMAGE} alt="Avatar" 
  // className={direct? styles.imageDetail : styles.imageArchive }
  // style={direct? { width: '100%', height: 'auto' } : {height:'400px',width:'100%',padding:10 }}
  />
  

    </div>

  ))}

</div>

     </section>

    
  );
};

export default Album;
