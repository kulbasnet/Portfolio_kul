import React, { useEffect, useState } from 'react';
import HtmlFlipBook from 'react-pageflip';
import { pdfjs, Document, Page as PdfPage } from 'react-pdf';
import pdf from '../Pages/NewResume.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const FlipPage = React.forwardRef(({ pageNumber }, ref) => (
  <div ref={ref} className="bg-white">
    <PdfPage
      pageNumber={pageNumber}
      width={window.innerWidth > 768 ? 500 : window.innerWidth - 40}
      renderTextLayer={false}
      renderAnnotationLayer={false}
    />
  </div>
));

const FinalPage = React.forwardRef((_, ref) => (
  <div
    ref={ref}
    className="flex flex-col items-center justify-center p-8 bg-white-full"
  >
    <h2 className="text-yellow-700 font-custom text-xl md:text-6xl lg:text-7xl mb-10 text-center mt-[80px]">
      You can Download CV here
    </h2>
    <a
      href={pdf}
      download="Resume.pdf"
      className="bg-black  text-white px-5 py-2 rounded hover:bg-yellow-500 transition md:ml-[149px]"
    >
      Download CV
    </a>
  </div>
));

function Cv() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth > 768 ? 500 : window.innerWidth - 40,
    height: window.innerWidth > 768 ? 650 : (window.innerWidth - 40) * 1.3,
  });

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: "#heading",
        start:"40% 100%"

      }
    });
    const split = new SplitText("#heading", {
      type:"lines",
      linesClass:"lineChildren"
    })


    tl.from(split.lines,{
      opacity:0,
      duration:2,
      stagger:1.3,
      ease:"power4",
      y:60

    }

    )
  },[])
  

  return (<div>
  <div>
    <h1 id='heading' className='font-sans md:ml-[680px] md:mb-10 md:text-8xl  relative font-bold'>CV</h1>
  </div>

      <div className="flex justify-center items-center mb-1 p-4 md:mb-11">
      <Document file={pdf}>
        <HtmlFlipBook
          width={dimensions.width}
          height={dimensions.height}
          className="shadow-md rounded overflow-hidden"
        >
          <FlipPage pageNumber={1} />
          <FlipPage pageNumber={2} />
          <FinalPage />
        </HtmlFlipBook>
      </Document>
    </div>

  </div>
  );
}

export default Cv;
