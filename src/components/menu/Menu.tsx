import React, { useState } from "react";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Button, ConfigProvider, Drawer, Radio, Space } from "antd";
import Link from "next/link";
import Image from "next/image";
import localFont from 'next/font/local'
import styles from "./styles.module.css";


// const myFont = localFont({
//   src: '../../app/fonts/PretoriaRegular.ttf',
//   display: 'swap',
// })

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space>
        <button onClick={showDrawer}>
          <Image
            width={35}
            height={35}
            src="/menu.png"
            alt="menu"
            className="mx-3"
          />
        </button>
      </Space>
      <ConfigProvider
        theme={{
          token: {
            colorBgElevated: "white",
          },
        }}
      >
        <Drawer
          
          placement="left"
          closable={false}
          onClose={onClose}
          open={open}
          key="left"
        >
          <div
            className="absolute cursor-pointer left-7 top-7 "
            onClick={onClose}
          >
         <button onClick={showDrawer}>
          <Image
            width={25}
            height={25}
            src="/disabled.png"
            alt="close"
            className="mx-3"
          />
        </button>
          </div>

          <div className={"pl-12 pt-12 " }>
            <div className="py-2.5 text-2xl font-medium">
              <Link href={"/"} onClick={onClose} className="">
               VÒNG TAY
              </Link>
            </div>
            <div className="py-2.5 text-2xl font-medium">
              <Link
                href={"/ring"}
                onClick={onClose}
              
              >
                NHẪN
              </Link>
            </div >
            <div className="py-2.5 text-2xl font-medium">
              <Link href={"/pendant"} onClick={onClose} >
              MẶT DÂY CHUYỀN
              </Link>
            </div>
            <div className="py-2.5 text-2xl font-medium">
              <Link href={"/other"} onClick={onClose} >
                SẢN PHẨM KHÁC
              </Link>
            </div>
          </div>
        </Drawer>
      </ConfigProvider>
    </>
  );
};

export default Menu;
