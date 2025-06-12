import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
// import Word from "../Component/Word";
import img1 from "../image/0.JPG";
import img2 from "../image/1.JPG";
import img3 from "../image/2.jpg";
import img4 from "../image/3.jpg";
import img5 from "../image/4.jpg";
import img6 from "../image/5.jpg";
import img7 from "../image/6.JPG";
import img8 from "../image/7.jpg";



const paragraph =
  "Recent Graduate IT Student, I specialize in full-stack development with expertise in MERN Stack and AI, currently transitioning from academia to the professional tech arena while actively building hands-on experience. My technical proficiency spans Python, JavaScript, and C#, complemented by a robust academic foundation that has instilled a disciplined focus on code quality, best practices, and secure system design.";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];



function About() {



  const imageRefs = useRef([]);
  const steps = useRef(0);
  const totalImagesShown = useRef(0);
  const nbOfImagesRef = useRef(0);
  const startIndexRef = useRef(0);
  const maxNumberOfImages = 8; 

  const manageMouse = (e) => {
    const { clientX, clientY, movementX, movementY } = e;
    steps.current += Math.abs(movementX) + Math.abs(movementY);

    if (steps.current > totalImagesShown.current * 150) {
      moveImage(clientX, clientY);
      totalImagesShown.current++;
      
      if (nbOfImagesRef.current >= maxNumberOfImages) {
        removeImage();
      }
    }
  };

  const moveImage = (x, y) => {
    const bufferIndex = totalImagesShown.current % imageRefs.current.length;
    const img = imageRefs.current[bufferIndex];
    if (!img) return;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.display = "block";
    nbOfImagesRef.current++;
    setZIndex();
  };

  const removeImage = () => {
    const oldestImage = imageRefs.current[startIndexRef.current];
    if (oldestImage) {
      oldestImage.style.display = "none";
    }
    startIndexRef.current = (startIndexRef.current + 1) % imageRefs.current.length;
    nbOfImagesRef.current--;
    setZIndex();
  };

  const setZIndex = () => {
    for (let i = 0; i < nbOfImagesRef.current; i++) {
      const idx = (startIndexRef.current + i) % imageRefs.current.length;
      const img = imageRefs.current[idx];
      if (img) {
        img.style.zIndex = i;
      }
    }
  };


  useEffect(()=>{
    gsap.registerPlugin(SplitText, ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger:{
        trigger:"#para",
        start:"top 80%",
        end: "bottom center",
        toggleActions: "play none none none",
        // scrub:true,
        // markers: true
      }
    });
    const split = new SplitText("#para",{
      type:"lines",
      linesClass:"lineChildren",
    })
    tl.from(split.lines, {
      yPercent:100,
     opacity:0,
     duration:2,
     ease:"power4",
     stagger:0.3,
     
    })

    return()=>{
      split.revert();
    }

  },[])

  return (
    <main onMouseMove={manageMouse} id="about" className="flex relative md:h-[700px]  ">
      {[...Array(8).keys()].map((_, index) => (
        <img
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          src={images[index]}
          className="w-[10vw] hidden"
          style={{ 
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }}
          alt={`Trail ${index}`}
        />
      ))}
      <div className=" mt-[90px] md:mt-[150px] sm:px-2 md:px-10  flex-col">
              <p 
              id="para" 
              className=" sm:text-[35px] max-w-[1490px] p-[60px] font-Trade text-red-950" >  {paragraph} </p> 
 

      </div>

    </main>
  );
}

export default About;