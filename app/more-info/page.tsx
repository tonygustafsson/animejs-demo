"use client";
import anime from "animejs";
import { useEffect, useRef } from "react";

const MoreInfo = () => {
  const listRef = useRef<HTMLUListElement>(null);

  const runAnimation = () => {
    const listItems = (listRef.current as any)?.querySelectorAll("li");

    anime({
      targets: listItems,
      translateY: [-2000, 0],
      delay: anime.stagger(100),
      duration: 2000,
    });
  };

  useEffect(() => {
    if (!listRef.current) return;
    runAnimation();
  }, []);

  return (
    <div>
      <h2 className="text-4xl mb-4">More Info</h2>

      <ul className="list-disc" ref={listRef}>
        <li className="list-item text-xl">
          <a href="https://animejs.com/documentation/">
            Anime.js Documentation
          </a>
        </li>

        <li className="list-item text-xl">
          <a href="https://www.npmjs.com/package/react-animejs">
            react-animejs
          </a>
        </li>

        <li className="list-item text-xl">
          <a href="https://npmtrends.com/@mojs/core-vs-@tweenjs/tween.js-vs-animejs-vs-framer-motion-vs-just-animate-vs-popmotion-vs-velocityjs">
            NPM Trends
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MoreInfo;
