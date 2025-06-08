import React, { useRef } from 'react'
import {useScroll, motion} from 'framer-motion';

function Paragraph({paragraph}) {

  const element = useRef(null);
  const {scrollYProgress}  = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"]
  })
  


  return ( 
          <motion.p 
          className='text-[25px] max-w-[1490px] p-[40px] font-Trade text-red-950 ' 
          ref={element}
          style={{opacity: scrollYProgress}}
          >
        {paragraph}
      
        </motion.p> 
  )
}

export default Paragraph
