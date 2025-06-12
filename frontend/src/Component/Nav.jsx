import React, { useEffect } from "react";
import gsap from "gsap";

function Nav({ scrollTo }) {

  useEffect(()=>{
      let tl = gsap.timeline({delay:1.1});
  tl.from("#nav",{
    yPercent:-600,
    ease:"power4",
    opacity:0,
    duration:1,
  })

    tl.to("#nav",{
    yPercent:40,
    ease:"power4",
    opacity:1,
    duration:1,
    
    
  })




  },[])

  return (
    <>  
      <nav
        className="flex  justify-between md:px-8 px-2 py-3 fixed top-0 w-[93%] border-b-white z-50  ml-1 md:ml-12  border-b-2 font-semibold "
        id="nav"
      >
        <div className="text-[13px] md:text-lg font-sans text-yellow-600">
          <a>SOFTWARE/ WEB DEVELOPER</a>
        </div>
        <div className=" justify-end text-sm md:text-base gap-1  flex font-sans  md:gap-3">
                  <a
          onClick={() => scrollTo("about")}
          className="cursor-pointer text-yellow-600"
        >
          About
        </a>
        <a
          onClick={() => scrollTo("project")}
          className="cursor-pointer text-yellow-600"
        >
          Project
        </a>
        <a
          onClick={() => scrollTo("foot")}
          className="cursor-pointer text-yellow-600"
        >
          Connect
        </a>


        </div>
      </nav>
    </>
  );
}

export default Nav;
