import React, { useEffect, useState } from "react";
import Tweet from "./Twitter.png";
import Real from "./Home.png";
import Page from "../Component/Page";
import Cnn from "../Pages/Sign.png";
import Basnet from "./Basnet.png";
import python from "./Python.png"
import mern from "./mern.png";
import git from './git.png';
import tail from "./tailwind.png";
import Realities from "./Basnet_Report.pdf";
import Bengali from "./Bengali.pdf";
import News from "./TrueAndFalseNews.pdf";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

function Project() {
  const projects = [
    {
      id:1,
      title1: "Basnet",
      title2: "Realities",
      img: Real,
      description: "Basnet Realties is introduced which main goal is to build an open and easy to use online Real Estate system. Unlike other traditional real estate website which only focuses on the buy, rent and sell of properties, Basnet realties offer the various facilities such as recommendation system according to the user preferences, interactive maps, Appointment Booking Feature, EMI calculator, connection with the best certified agents. Basnet Realties incorporates artificial intelligence into their platform using a recommendation system based on machine learning to provide users with property suggestions that match their specific requirements. ",
      problem: "Basnet’s Realty addresses several key challenges in the real estate industry, including the lack of user-friendly platforms, difficulty finding verified agents, and the overwhelming process of browsing and purchasing property. Many existing platforms fail to categorize listings clearly, provide reliable agent information, or offer features like appointment booking and AI-powered recommendations. Additionally, users often face a lack of pricing transparency and have limited access to data on hotspot locations. Building such a platform also presents technical challenges, such as selecting the right tools for scalability, integrating AI algorithms, and ensuring data security and agent verification",
      image: Basnet,
      Python: python,
      Git : git,
      Tail : tail,
      Mern : mern,
      pdf : Realities,
      link: "https://github.com/kulbasnet/RealEstate"




    },
    {
      id: 2,
      title1: "Twitter ",
      title2: "Sentiment Analysis",
      img: Tweet,
      description: "This project aims to develop and compare deep learning models capable of automatically classifying news articles as either real or fake based on their textual content. Such models can play a crucial role in maintaining the credibility of information shared online. They can serve as powerful tools for journalists and fact-checkers, assist readers in assessing the trustworthiness of online news, and help reduce the spread and impact of misinformation across digital platforms",
      Python: python,
     Git : git,
      pdf : News,
      link: "https://github.com/kulbasnet/Twitter-sentiment-Analysis"



    },
    {
       id: 3,
      title1: "Image",
      title2: "Classification",
      img: Cnn,
      description: "This research focuses on developing a deep learning-based recognition system for Bengali Sign Language (BdSL), an area with limited existing work compared to the well-studied American Sign Language (ASL). The study aims to bridge this gap by training and evaluating various Convolutional Neural Network (CNN) architectures, including a baseline model, a version with regularization, and models using different optimizers like SGD and Adam. Additionally, the research explores methods such as transfer learning to enhance model accuracy and generalization, addressing the scarcity of BdSL datasets and laying groundwork for further advancements in this field. ",
      Python: python,
      Git : git,
      pdf : Bengali,
      link: "https://github.com/kulbasnet/Sign-language-classification"




    },
  ];

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger, SplitText);

    let tl = gsap.timeline({
      delay:1,
       scrollTrigger: {
      trigger: "#proj-head",
      start:"top bottom"
      
      // toggleActions: "play none none none", 
      // markers: true, 
    },
    });
    const split = new SplitText("#proj-head",{
      type: "lines",
      linesClass:"linesChildren"
    })

    tl.from(split.lines,
      {
      y:100,
      opacity:0,
      duration:2,
      ease:"power4",
      stagger:4
      
    })

  },[])

  return (
    <main id="project" className="flex justify-center  md:py-24  md:h-[700px] mb-40 md:mb-60">
      <div className="w-[70%]">
        <h1 id="proj-head" className="text-3xl md:text-5xl relative  mb-8 font-PlayFair font-semibold ">Projects</h1>
        {projects.map((project, index) => (
          <Page key={index} project={project} />
        ))}
      </div>
    </main>
  );
}

export default Project;
