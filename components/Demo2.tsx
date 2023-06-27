"use client";

import Image from "next/image";
import anime from "animejs/lib/anime.es.js";
import { useEffect, useRef, useState } from "react";

export default function Demo2() {
  const logoRef = useRef(null);

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!animated) {
      anime({
        targets: logoRef.current,
        translateX: 250,
        scale: 2,
        rotate: "1turn",
        duration: 2500,
      });
    } else {
      anime({
        targets: logoRef.current,
        translateX: 0,
        scale: 1,
        rotate: "-1turn",
        duration: 2500,
      });
    }
  }, [animated]);

  return (
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src="/img/sqli-logo.svg"
      alt="SQLI Logo"
      width={250}
      height={102}
      priority
      onClick={() => setAnimated(!animated)}
      ref={logoRef}
    />
  );
}
