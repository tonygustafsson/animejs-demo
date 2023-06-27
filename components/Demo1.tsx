"use client";

import Image from "next/image";
import anime from "animejs/lib/anime.es.js";
import { useEffect, useRef } from "react";

export default function Demo1() {
  const logoRef = useRef(null);

  const runAnimation = () =>
    anime({
      targets: logoRef.current,
      scale: [0, 1],
      opacity: [0, 1],
      duration: 1500,
    });

  useEffect(() => {
    if (!logoRef.current) return;
    runAnimation();
  }, [logoRef]);

  return (
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src="/img/sqli-logo.svg"
      alt="SQLI Logo"
      width={250}
      height={102}
      priority
      onClick={runAnimation}
      ref={logoRef}
    />
  );
}
