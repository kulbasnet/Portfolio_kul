import { useRef, useLayoutEffect } from "react";
import "./App.css";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Cv from "./Pages/Cv";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Pages/Footer";
import Nav from "./Component/Nav";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {
  const wrapper = useRef();
  const content = useRef();
  const smoother = useRef();

  useLayoutEffect(() => {
    smoother.current= ScrollSmoother.create({
      wrapper: wrapper.current,
      content: content.current,
      smooth: 2,
      effects: true,
    });
  }, []);


  const scrollTo=(id)=>{
    if(smoother.current){
      smoother.current.scrollTo(`#${id}`, true, "top top")
      
    }

  }

  return (
    <div className="smoother-wrapper" ref={wrapper}>
      <div className="smoother-content" ref={content}>
        <Nav scrollTo={scrollTo}/>
         <Hero/>
         <About/>
          <Project />
          <Cv  />
          <Footer />
      </div>
    </div>
  );
}

export default App;
