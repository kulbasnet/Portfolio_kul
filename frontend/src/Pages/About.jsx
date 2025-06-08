import React, { useRef } from "react";
// import Word from "../Component/Word";

const paragraph =
  "Recent Graduate IT Student, I specialize in full-stack development with expertise in MERN Stack and AI, currently transitioning from academia to the professional tech arena while actively building hands-on experience. My technical proficiency spans Python, JavaScript, and C#, complemented by a robust academic foundation that has instilled a disciplined focus on code quality, best practices, and secure system design.";

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

  return (
    <main onMouseMove={manageMouse} id="about" className="flex relative h-[800px] ">
      {[...Array(8).keys()].map((_, index) => (
        <img
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          src={`/public/Image/${index}.jpg`}
          className="w-[10vw] hidden"
          style={{ 
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }}
          alt={`Trail ${index}`}
        />
      ))}
      <div className="mt-[150px] sm:px-2 md:px-10  flex-col">
              <p className=" sm:text-[35px] max-w-[1490px] p-[60px] font-Trade text-red-950">  {paragraph} </p> 
 

      </div>

    </main>
  );
}

export default About;