import React, { useEffect, useState } from "react";
import Tweet from "../Pages/Twitter.png";
import Real from "../Pages/Home.jpg";
import { motion } from "framer-motion";
import { ChevronLeft, FileDown, MoveUpRight  } from "lucide-react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";



const anim = {
  initial: { width: 0 },
  open: { width: 200, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
  closed: { width: 0 },
};

function Page({ project }) {
  const [isActive, setActive] = useState(false);
  const [selected, setSelected] = useState(null);
  const {
    title1,
    title2,
    img,
    problem,
    description,
    image,
    pdf,
    Python,
    Git,
    Tail,
    Mern,
    link
  } = project;

  const projectClick = (project) => {
    setSelected(project);
  };

  const backButton = () => {
    setSelected(null);
  };

  // useEffect(()=>{
  //   gsap.registerPlugin(SplitText, ScrollTrigger);
  //   const split = new SplitText("#title1", {
  //     type: "lines",
  //     linesClass: "lineChildren"
  //   })

  //   const tl = gsap.timeline({
  //     scrollTrigger:{
  //       trigger:"#title1",
  //       toggleActions:"play none none none"
        
  //     }
  //   });
  //   tl.from(split.lines,{
  //     duration: 1.9,
  //     // stagger:0.3,
  //     ease:"power4.in",
  //     opacity:0,
  //     yPercent: 10
  //   })



  // })

  return (
    <>
      {selected ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-50 flex flex-col items-center pt-[120px] overflow-auto">
          <button
            onClick={backButton}
            className="absolute top-5 left-5  px-4 py-2  text-white"
          >
            <ChevronLeft className="h-11 w-11 " />
          </button>

          <img
            src={selected.img}
            className="md:w-[60%] w-[350px] md:h-[500px] mb-10 rounded shadow-lg"
            alt="Selected project"
          />
          <div className="flex  gap-3">
            <p className="md:text-4xl text-2xl text-white font-bold font-PlayFair mb-2">
              {selected.title1}
            </p>
            <p className="md:text-4xl text-2xl text-white font-bold font-PlayFair">
              {selected.title2}
            </p>
          </div>

          <div className="w-[65vw]">
            <h2 className="font-semibold text-white text-5xl mt-16 mb-6">
              Overview
            </h2>
            <p className="text-white">{selected.description}</p>

            <div>
              {selected.problem && (
                <div>
                  <h2 className="font-semibold text-white text-5xl mt-16 mb-6">
                    Problem
                  </h2>
                  <p className="text-white">{selected.problem}</p>
                </div>
              )}
            </div>

            <div>
              {selected.image && (
                <div>
                  <h2 className="font-semibold text-white text-5xl mt-16 mb-10">
                    Compiled Design
                  </h2>
                  <img className="border" src={image} />
                </div>
              )}
            </div>

            <h2 className="mt-16 text-white text-5xl font-semibold">
              Tech Stack
            </h2>
            <div className="flex md:w-[65vw]  mt-10 ">
              {selected.Mern && (
                 <img className="w-[250px] h-[150px] " src={Mern} />
              )}

              {selected.Git && (
                              <img className="w-[200px] h-[160px]" src={Git} />

              )}
              
              {selected.Tail && (
                    <img className="w-[250px] h-[150px]" src={Tail} />
              )}

              {selected.Python && (
                <img className="w-[200px] h-[150px]" src={Python} />
              )}
            </div>
          </div>
<div className="flex gap-8">

  <a href={link} className="flex md:ml-16  bg-gray-600 hover:bg-green-600 text-white md:h-12 pt-3 rounded  mt-[190px] justify-center transition w-[130px] md:w-[160px]">
    Source Code  <MoveUpRight className="ml-2" /></a>

            <a
            href={pdf}
            className=" flex  bg-red-700 hover:bg-green-600 text-white md:h-12 h-12 pt-3 rounded md:ml-[700px] mt-[190px] justify-center transition w-[170px] md:w-[180px]"
            download={pdf}
          >
            Download Report <FileDown className="ml-3"/>
          </a>


</div>
        </div>
      ) : (
        <div
          onMouseEnter={() => {
            setActive(true);
          }}
          onMouseLeave={() => {
            setActive(false);
          }}
          onClick={() => projectClick(project)}
          className=" border-t-2  border-black pt-5 pb-6 cursor-pointer overflow-hidden flex justify-center "
        >
          <p id="title1" className=" mr-2 md:mr-4 md:text-[4vw] font-PlayFair ">{title1}</p>
          <motion.div variants={anim} animate={isActive ? "open" : "closed"}>
            <img src={img} className="md:w-[10vw]] md:h-[120px]" />
          </motion.div>
          <p id="title1" className=" font-PlayFair  md:ml-3  md:text-[4vw]">{title2}</p>
        </div>
      )}
    </>
  );
}

export default Page;
