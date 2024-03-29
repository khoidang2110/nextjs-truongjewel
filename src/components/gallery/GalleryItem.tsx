'use client'
import Link from "next/link";
import styles from "./styles.module.css";

import { FC } from "react";
import { NO_IMAGE } from "@/constant";
import { IProject } from "@/interfaces/project";

interface PostItemProps {
    item: IProject;
  }
  
const GalleryItem: FC<PostItemProps> = ({item}) => {
  

  return (

     
<div className={styles.container}>
  <img src={item?.image[0] ?? NO_IMAGE} alt="Avatar" className={styles.image} style={{width: '100%'}} />
  <div className={styles.middle}>
  <Link href={`/detail/${item.id}/`}>
  <div className={styles.text}>{item.title}</div>
  </Link>
 
  </div>
</div>

    
  );
};

export default GalleryItem;
