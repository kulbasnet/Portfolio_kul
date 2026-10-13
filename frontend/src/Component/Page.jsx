import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, FileDown, MoveUpRight  } from "lucide-react";

const anim = {
  initial: { width: 0 },
  open: { width: 200, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
  closed: { width: 0 },
};

const MotionDiv = motion.div;

function Page({ project }) {
  const [isActive, setActive] = useState(false);
  const [selected, setSelected] = useState(null);
  const detailRef = useRef(null);
  const {
    title1,
    title2,
    img,
    pdf,
    link,
    liveLink,
    recommendationHealthLink
  } = project;

  const projectClick = (project) => {
    setSelected(project);
  };

  useEffect(() => {
    if (selected) {
      detailRef.current.scrollTop = 0;
    }
  }, [selected]);

  const backButton = () => {
    setSelected(null);
  };

  return (
    <>
      {selected ? (
        <div
          ref={detailRef}
          className="fixed inset-0 z-50 overflow-y-auto bg-black px-4 pb-10 pt-20 text-white sm:px-6 sm:pt-24"
        >
          <button
            onClick={backButton}
            className="fixed left-3 top-3 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-5 sm:top-5"
            aria-label="Back to projects"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div className="mx-auto w-full max-w-5xl">
            <img
              src={selected.img}
              className="mx-auto mb-8 max-h-[55vh] w-full rounded-lg object-contain shadow-lg"
              alt="Selected project"
            />
            <div className="mb-8 flex flex-wrap justify-center gap-x-3 text-center font-PlayFair text-3xl font-bold sm:text-4xl">
              <p>{selected.title1}</p>
              <p>{selected.title2}</p>
            </div>

            {selected.description && (
              <section className="mb-8">
                <h2 className="mb-3 text-2xl font-semibold sm:text-3xl">Overview</h2>
                <p className="leading-relaxed text-white/80">{selected.description}</p>
              </section>
            )}

            {selected.image && (
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">Compiled Design</h2>
                <img
                  className="mx-auto h-auto max-h-[70vh] w-full rounded-lg border border-white/15 object-contain"
                  src={selected.image}
                  alt={`${selected.title1} ${selected.title2} compiled design`}
                />
              </section>
            )}

            <div className="flex flex-wrap gap-3 border-t border-white/20 pt-6">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded bg-gray-600 px-4 transition hover:bg-green-600"
              >
                Source Code <MoveUpRight className="h-4 w-4" />
              </a>

              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded bg-green-700 px-4 transition hover:bg-green-600"
                >
                  Live Site <MoveUpRight className="h-4 w-4" />
                </a>
              )}

              {pdf && (
                <a
                  href={pdf}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded bg-red-700 px-4 transition hover:bg-green-600"
                  download
                >
                  Download Report <FileDown className="h-4 w-4" />
                </a>
              )}
            </div>

            {recommendationHealthLink && (
              <aside className="mt-5 rounded-lg border border-white/15 bg-white/5 p-4">
                <p className="mb-3 leading-relaxed text-white/80">
                  If property recommendations are not loading, use the health check to wake up the recommendation service. It may take a few moments to start; then return to the site and try again.
                </p>
                <a
                  href={recommendationHealthLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded bg-gray-600 px-4 transition hover:bg-green-600"
                >
                  Wake Recommendation Service <MoveUpRight className="h-4 w-4" />
                </a>
              </aside>
            )}
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
          <MotionDiv variants={anim} animate={isActive ? "open" : "closed"}>
            <img src={img} className="md:w-[10vw]] md:h-[120px]" />
          </MotionDiv>
          <p id="title1" className=" font-PlayFair  md:ml-3  md:text-[4vw]">{title2}</p>
        </div>
      )}
    </>
  );
}

export default Page;
