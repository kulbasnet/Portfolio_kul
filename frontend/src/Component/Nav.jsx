import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Nav({ scrollTo }) {
  const navRef = useRef(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      navRef.current,
      { yPercent: -100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        delay: 1.1,
        duration: 1,
        ease: "power4.out",
      }
    );

    return () => animation.kill();
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed left-0 top-0 z-50 flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b-2 border-b-white px-3 py-3 font-semibold sm:px-6 md:px-8 lg:px-12"
        id="nav"
      >
        <div className="whitespace-nowrap font-sans text-[11px] text-yellow-600 sm:text-sm md:text-lg">
          <a>SOFTWARE/ WEB DEVELOPER</a>
        </div>
        <div className="flex shrink-0 gap-3 font-sans text-xs sm:gap-4 sm:text-sm md:gap-6 md:text-base">
          <a
            onClick={() => scrollTo("about")}
            className="cursor-pointer whitespace-nowrap text-yellow-600"
          >
            About
          </a>
          <a
            onClick={() => scrollTo("project")}
            className="cursor-pointer whitespace-nowrap text-yellow-600"
          >
            Project
          </a>
          <a
            onClick={() => scrollTo("foot")}
            className="cursor-pointer whitespace-nowrap text-yellow-600"
          >
            Connect
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
