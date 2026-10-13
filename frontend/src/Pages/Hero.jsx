import React, { useEffect } from "react";
import sun from "./gold.svg";
import gsap from "gsap";
import himal from "./himal.jpg";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import {Copyright } from 'lucide-react'

function Hero() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    gsap.to("#sun", {
      rotation: 720,
      ease: "linear",
      repeat: -1,
      duration: 60,
      transformOrigin: "50% 50%",
    });

   
  }, []);

  useEffect(()=>{
      let tl = gsap.timeline({delay:0.8});
   const split = new SplitText("#head", {
      type: "lines",
      linesClass: "lineChildren",
    });

    tl.from(split.lines, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 2,
      ease: "power4",
      
    });


  },[])

  useEffect(()=>{
    const gp = gsap.timeline({delay:2});
    const split = new SplitText("#copy", {
      type: "chars",
      // linesClass: "lineChildren",
      charsClass:"CharChildren"

    });

    gp.from(split.chars,{
      duration:1, 
      stagger:0.1,
      ease:"power4.in",
      opacity:0


    })

  })


  return (
    <div className="relative h-dvh min-h-[24rem] w-full overflow-hidden" id="hero">
     
      <img
        src={himal}
        className="absolute inset-0 block h-full w-full object-cover object-center"
        alt="himalayas"
        fetchpriority="high"
      />

      <div className="absolute left-4 top-20 z-30 flex items-center gap-2 sm:left-8 sm:top-24">
        <Copyright className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" color="#d69e2e" />
        <h1 className="font-serif text-xs text-yellow-600 drop-shadow-md sm:text-sm" id="copy">
          Code by Kul
        </h1>
      </div>

      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 px-4 text-center sm:gap-5">
        <img
          src={sun}
          alt="sun"
          id="sun"
          className="h-auto w-[clamp(6rem,22vw,12.5rem)]"
        />
        <h1
          id="head"
          className="relative m-0 max-w-full overflow-hidden font-Trade text-[clamp(2rem,7vw,5.5rem)] leading-tight text-white drop-shadow-md"
        >
          Kulbhushan Basnet
        </h1>
      </div>
    </div>
  );
}

export default Hero;
