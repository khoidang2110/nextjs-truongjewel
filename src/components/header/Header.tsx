"use client";

import { use, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu from "../menu/Menu";
const Header: React.FC = () => {
  const pathname = usePathname();
  console.log(pathname);
 

 


  return (
    <header
      className={` w-full bg-white text-prim transition-all duration-300   opacity-100 h-52 fixed
      `}
    >
      <div className={styles.menuButton}>
      <Menu/>
      </div>
     
      <div className="flex justify-center bg-white pt-10">
        <div className={styles.logoContainer}>
          <div className={styles.fortyDeg}>
            <h1 className="text-center">TRƯỜNG JEWEL</h1>
          </div>
        </div>
      </div>

     
     
    </header>
  );
};

export default Header;
