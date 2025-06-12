import React, { useEffect } from "react";
import sun from "./gold.svg";
import gsap from "gsap";
import himal from "./himal.jpg";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import {Copyright } from 'lucide-react'
import Nav from "../Component/Nav";

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
    <div className="relative h-[700px] w-full overflow-hidden" id="hero">
      <img src={himal} className="h-full lg:h-full  w-full object-cover" alt="himalayas" />

       <div className="absolute top-8 left-7 mt-16 z-30 flex items-center gap-2">
    <Copyright className="w-5 h-6  md:ml-10" color="#d69e2e" />
    <h1 className=" font-serif text-yellow-600 text-sm drop-shadow-md" id="copy">Code by Kul</h1>
  </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-30 flex flex-col items-center gap-4">
        <img
          src={sun}
          alt="sun"
          id="sun"
          className="w-[30vw] max-w-[200px]  min-w-[100px]"
        />
        <h1
          id="head"
          className="relative overflow-hidden m-0 font-Trade text-white text-[5vw] leading-none drop-shadow-md"
        >
          Kulbhushan Basnet
        </h1>
      </div>
    </div>
  );
}

export default Hero;
