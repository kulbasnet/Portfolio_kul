// // import React, { useRef } from 'react';
// // import { useScroll, motion, useTransform, progress } from 'framer-motion';

// function Character({ paragraph }) {
// //   const element = useRef(null);

// //   const { scrollYProgress } = useScroll({
// //     target: element,
// //     offset: ['start 0.9', 'start 0.25'],
// //   });

// //   const characters = paragraph.split('');

// //   return (
// //     <p
// //       className="text-[25px] max-w-[1490px] p-[40px] font-Trade text-red-950 flex flex-wrap"
// //       ref={element}
// //     >
// //       {characters.map((char, i) => {
// //         const start = i / characters.length;
// //         const end = start + 1 / characters.length;

// //         return (
// //           <Charact key={i} range={[start, end]} progress={scrollYProgress}>
// //             {char}
// //           </Charact>
// //         );
// //       })}
// //     </p>
// //   );
// // }

// // const Charact = ({ children, range, progress }) => {
// //  const word = children.split("");
// //  const amount = range[1] - range[0];
// //  const step = amount / word.length;

// //   return (

// //     <span className="mr-2 mt-[10px] relative"> 
// //     {word.map((words, i)=>{
// //       const start = range[0] + (step*i);
// //       const end = range[0] + (step * (i+1));
// //       return(
// //         <Sentence key={i} range={{start, end}} progress={progress} >{words}</Sentence>
// //       )

// //     })}
    
// //     </span>
// //   );
// // };


// // const Sentence = ({children, range, progress})=>{
// //   const opacity = useTransform(progress, range, [0,1])
// //   return(
// //     <span className='mr-2 mt-[10px] relative'>
// //       <span className='absolute opacity-[0.2]  '>{children}</span>
// //        <motion.span style={opacity}>
// //       {children}
// //     </motion.span>

// //     </span>
   
// //   )
// // }

// export default Character;
