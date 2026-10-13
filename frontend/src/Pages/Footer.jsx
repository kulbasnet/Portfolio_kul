import React, { useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef(null);
  const headingRef = useRef(null);
  const emailRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            once: true,
          },
        });

        timeline
          .from(headingRef.current, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          })
          .from(
            emailRef.current,
            {
              y: 20,
              opacity: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.35"
          )
          .from(
            linksRef.current.children,
            {
              y: 16,
              opacity: 0,
              duration: 0.5,
              stagger: 0.12,
              ease: "power2.out",
            },
            "-=0.2"
          );
      });
    }, footerRef);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      id="foot"
      className="mt-20 border border-black px-4 sm:mt-28 sm:px-8 md:mt-40 md:px-16 lg:px-20"
    >
      <div className="flex">
        <h1
          ref={headingRef}
          id="connect"
          className="mb-6 mt-12 max-w-full font-custom text-[clamp(2.25rem,10vw,8rem)] leading-[0.95] text-yellow-700 sm:mb-8 sm:mt-16 md:mb-10 md:mt-24"
        >
          LET'S CONNECT?
        </h1>
      </div>
      <p
        ref={emailRef}
        className="mb-8 flex min-w-0 items-center gap-2 font-sans text-sm sm:mb-10 sm:text-base md:text-lg"
      >
        <Mail aria-hidden="true" className="h-5 w-5 shrink-0" />
        <a className="break-all hover:underline" href="mailto:kulbhushan2k3@gmail.com">
          kulbhushan2k3@gmail.com
        </a>
      </p>

      <div
        ref={linksRef}
        className="grid grid-cols-1 gap-3 border-t border-black py-4 font-semibold sm:grid-cols-3 sm:gap-4 md:mt-11 md:px-8 md:py-5"
      >
        <a
          href="https://www.linkedin.com/in/kulbhushan-basnet-5584a225a/"
          className="w-fit font-sans text-base hover:underline sm:text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
        <a
          href="https://github.com/kulbasnet"
          className="w-fit font-sans text-base hover:underline sm:text-lg sm:justify-self-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/kulbhushan-basnet-5584a225a/"
          className="w-fit font-sans text-base hover:underline sm:text-lg sm:justify-self-end"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM
        </a>
      </div>
    </footer>
  );
}

export default Footer;
