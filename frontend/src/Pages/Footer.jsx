import React, { useEffect, useRef } from "react";
import { Mail } from "lucide-react";


function Footer() {
  // const first= useRef();
  // const second = useRef();
  // let xPercent = 0 ;
  // let direction = -1;


  // useEffect(()=>{
  //   requestAnimationFrame(animation)

  // },[])

  // const animation = ()=>{
  //   if(xPercent <=-100){
  //     xPercent=0;
  //   }
  //   gsap.set(first.current, {xPercent: xPercent});
  //   gsap.set(second.current, {xPercent: xPercent} );
  //   xPercent+= 1 * direction;
  //   requestAnimationFrame(animation);

  // }

  
  return (
    <footer id="foot" className="mt-20  px-6 sm:px-12 md:px-20">
      <div className="flex">
        <h1 className="font-custom text-6xl w-11 mb-6 text-yellow-700 sm:text-4xl md:text-9xl">
          LET'S CONNECT?
        </h1>
          <button className=" md:mt-52 h-14 w-28 mt-16 text-base ml-48 sm:text-x justify-center align-middle hover:bg-yellow-700 hover:text-black transition hover:border-yellow-700 bg-black text-white md:ml-[450px] md:w-48  md:h-16  border rounded-xl md:text-2xl font-PlayFair">
          <p>CONTACT ME </p>
        </button>
      </div>
       <p className="flex px-6 font-sans">
          <Mail className="md:mr-2 mr-1" />kulbhushan2k3@gmail.com
        </p>

      <div className="flex gap-6 border-t justify-between md:px-16 py-4 font-semibold border-black md:mt-11">
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
