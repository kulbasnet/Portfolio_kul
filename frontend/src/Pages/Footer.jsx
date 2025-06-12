import React, { useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";


function Footer() {
      gsap.registerPlugin(SplitText, ScrollTrigger);

  useEffect(()=>{
    const tl = gsap.timeline({
      delay:1,
      scrollTrigger:{
        trigger:"#connect",
        start:"top top"
      }
    });
    const split = new SplitText("#connect", {
      type: "lines",
      linesClass:"lineChildren"
    })

    tl.from(split.lines,{
      opacity:0,
      y:50,
      duration:1,
      stagger:0.6,
      ease:"power4"

    })
  },[])

    useEffect(()=>{
    const l = gsap.timeline({delay:2.5,
      scrollTrigger:{
        start:"top top",
        trigger:"#mail",
      }
    });

    const split = new SplitText("#mail", {
      type: "chars",
      charsClass:"CharChildren"
    })


    l.from(split.chars,{
      duration:2.5,
      opacity:0,
      ease:"power4",
      stagger:0.1,
    
    })


  },[])

  useEffect(()=>{
    let k = gsap.timeline({delay:1.4,
      scrollTrigger:{
        start:"top bottom",
        trigger:"#footing"
      }
    })
      k.from("#footing",{
      yPercent:200,
      ease:"power4",
      duration:1,
      opacity:0 ,
      stagger:0.3

    })

    k.to("#footing",{
      yPercent:10,
      ease:"power4",
      duration:2,
      opacity:1,
      stagger:1


    })

  },[])


  

  
  return (
    <footer id="foot" className="md:mt-40 mt-28 border border-black   px-6 sm:px-12 md:px-20">
      <div className="flex">
        <h1 id="connect" className="font-custom md:mt-24  text-6xl w-11 mb-6 text-yellow-700 sm:text-4xl md:text-9xl">
          LET'S CONNECT?
        </h1>
          {/* <button id="contact" className=" md:mt-52 h-14 w-28 mt-16 text-base ml-56 sm:text-x justify-center align-middle hover:bg-yellow-600 hover:text-black transition hover:border-yellow-700 bg-black text-white md:ml-[610px] md:w-48  md:h-16  border rounded-xl md:text-2xl font-PlayFair">
          <p >CONTACT ME </p>
        </button> */}
      </div>
       <p id="mail" className="flex px-6 font-sans">
          <Mail id="mail" className="md:mr-2 mb-10 " />kulbhushan2k3@gmail.com
        </p>

      <div id="footing" className="flex gap-6 border-t justify-between md:px-16 py-4 font-semibold border-black md:mt-11">
        <a
          href="https://www.linkedin.com/in/kulbhushan-basnet-5584a225a/"
          className="hover:underline font-sans text-lg sm:text-xl md:text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
        <a
          href="https://github.com/kulbasnet"
          className="hover:underline font-sans text-lg sm:text-xl md:text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>

        <a
          href="https://www.linkedin.com/in/kulbhushan-basnet-5584a225a/"
          className="hover:underline font-sans text-lg sm:text-xl md:text-lg"
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
