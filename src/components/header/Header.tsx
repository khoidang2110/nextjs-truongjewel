"use client";

import { use, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu from "../menu/Menu";
const Header: React.FC = () => {
  const pathname = usePathname();
  console.log(pathname);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scroll = window.scrollY;
    console.log(scroll, isVisible);
    const shouldBeVisible = scroll <= 40;
    setIsVisible(shouldBeVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [windowWidth, setWindowWidth] = useState<number>(0);
console.log(windowWidth)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={` w-full bg-white text-prim transition-all duration-300   ${
        isVisible ? "opacity-100" && "h-52" : "opacity-0"
      }`}
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

      {/* <nav>
        <ul className={styles.headerUl}>
          <li
            className={
              pathname == "/about" ? styles.tabActive : styles.tabInActive
            }
          >
            <Link href="/about">GIỚI THIỆU</Link>
          </li>
          <li
            className={pathname == "/" ? styles.tabActive : styles.tabInActive}
          >
            <Link href="/">
             VÒNG TAY
            </Link>
          </li>
          <li
            className={
              pathname == "/bracelet" ? styles.tabActive : styles.tabInActive
            }
          >
            <Link href="/bracelet">
             NHẪN
            </Link>
          </li>
          <li
            className={
              pathname == "/other" ? styles.tabActive : styles.tabInActive
            }
          >
            <Link href="/other">SẢN PHẨM KHÁC</Link>
          </li>
        </ul>
      </nav> */}
     
    </header>
  );
};

export default Header;
