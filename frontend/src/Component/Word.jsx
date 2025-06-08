// import React, { useRef } from 'react';
// import { useScroll, motion, useTransform } from 'framer-motion';

// function Word({ paragraph }) {
//   const element = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: element,
//     offset: ['start 0.9', 'start 0.1'],
//   });

//   const characters = paragraph.split('');

//   return (
//     <p
//       className="text-[25px] max-w-[1490px] p-[40px] font-Trade text-red-950 flex flex-wrap"
//       ref={element}
//     >
//       {characters.map((char, i) => {
//         const start = i / characters.length;
//         const end = start + 1 / characters.length;

//         return (
//           <Character key={i} range={[start, end]} progress={scrollYProgress}>
//             {char}
//           </Character>
//         );
//       })}
//     </p>
//   );
// }

// const Character = ({ children, range, progress }) => {
//   const opacity = useTransform(progress, range, [0, 1]);

//   return (

//     <span className="tracking-widest mt-[10px] leading-none relative"> 
//     <span className='absolute opacity-[0.3]  '>{children}</span>
//             <motion.span style={{ opacity }} >
//       {children}
//     </motion.span>


//     </span>
//   );
// };

// export default Word;
