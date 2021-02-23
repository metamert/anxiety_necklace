import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image"

const Navbar = () => {
  const [w, sw] = useState(1000);

  useEffect(() => {
    sw(window.innerWidth);
  });

  return [
    <div className="navbarContainer ">
      <div className="leftLink needHover">
        <Link href="/">
          <Image
            src="/lala.png"
            alt="magnetic sand"
            width="70px"
            height="60px"
        
          ></Image>
        </Link>
      </div>

      <div className="flex flex-row items-center">
        <Link href="/iletisim">
          <div className="ml-6 needHover">Contact</div>
        </Link>
        <Link href="/urunler">
          <div className="but">Products</div>
        </Link>
      </div>
    </div>,
  ];
};

export default Navbar;
