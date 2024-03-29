import { FC } from "react";


import styles from "./styles.module.css";
import { IProject } from "@/interfaces/project";
import GalleryItem from "./GalleryItem";

interface PostListTypeSmallProps {
  projects: IProject[];
  filterType:string
}
const GalleryList: FC<PostListTypeSmallProps> = ({ projects = [],filterType }) => {

  const filteredData = projects.filter(item => item.type === filterType);
  return (
    <section className={styles.galleryListSection}>
      {filteredData.reverse().map((item: IProject, index: number) => (
        <div className={styles.threePecent}>
          <div className={styles.galleryContainer}>
            <GalleryItem item={item} key={index} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default GalleryList;
