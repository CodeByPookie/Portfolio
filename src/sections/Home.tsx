import { portfolioData } from "../data/userData";
import profilepic from '../assets/profilepic.jpg';
import { useState } from "react";

const Home = () => {
  return (
    <main className="cus_max-width">        
      {/*--- Intro Section ---*/}
      {intro()}
      {/* Profile About Section */}
      {About()}     
      {/* Experience and Education Section */}
        {experienceandEducation()}        
    </main>
  );
};

const intro = () =>{
  return (
    <div className="flex gap-8 justify-center mt-7 pb-8">
      <div className="size-50">
        <img src={profilepic} alt="profilepic" className="rounded-full" />
      </div>
      <div id="home" className="text-white self-center">        
        <div className="text-4xl pt-3 font-bold uppercase">
         {portfolioData.FirstName} <span className="text-red-600">{portfolioData.lastName}</span>.
        </div>
        <div className="text-2xl font-bold max-w-3xl text-wrap py-2">{portfolioData.jobTitle}</div>
        <div className="italic text-sm">{portfolioData.tagline}</div>
        <div className="flex justify-end">- From {portfolioData.City}</div>
      </div>
    </div>      
  )
}

const About = () => {
  return(      
    <div className="text-white">
      <div className="text-4xl font-medium border-b-3 border-red-600 w-fit mb-4">About</div>
      <div className="tracking-wider">
        <p>
          Hi, I'm Karthika, a passionate Fullstack Developer.
        </p>
        <p className="pt-3">
          Since January 2023, I've been working with ASP.Net MVC, starting with frontend development (site layouts, UI design, and integration). In the past few months, I've also been handling backend development — building custom modules and custom Web APIs.
        </p>
        <p className="pt-3">
          Currently, I'm expanding my skills in modern fullstack development with React, .NET Core, and REST APIs. My goal is to build scalable and user-friendly applications by combining strong backend logic with clean, interactive frontend design.
        </p>
      </div>        
    </div>   
  )
}

const experienceandEducation = () => {
  const [activeSection, setActiveSection] = useState("experience");
  return(
    <div className="text-white mt-5">
      <div className="flex items-center gap-5">
        <div id="experience" className={`cus_title-underline cursor-pointer ${activeSection === "experience" ? "active" : ""}`} onClick={() => setActiveSection("experience")}>Experience</div>
        <div id="education" className={`cus_title-underline cursor-pointer ${activeSection === "education" ? "active" : ""}`} onClick={() => setActiveSection("education")}>Education</div>
      </div>  
      <div>
        <div data-id="experience" className={activeSection === "experience" ? "block" : "hidden"}>
          {experience()}
        </div>
        <div data-id="education" className={activeSection === "education" ? "block" : "hidden"}>
          {education()}
        </div>
      </div>      
    </div>
  )
}

const experience = () =>{
  return(
  <div className="mt-4">
    <div className="py-2">Dynamicweb Solutions Asia Pte Ltd, Singapore (Remote)</div>
    <div>      
      <div>
        <span className="text-red-600">Junior Developer</span> | <span className="italic text-sm"> Jul 2023 - Present</span>
      </div>
      <div className=" ps-3">
        <ul className="list-disc ps-5 pt-4 text-sm">
          <li>Developed full website layouts using ASP.Net MVC, ensuring responsive design across devices.</li>
          <li>Built custom backend modules and Web APIs to extend Dynamicweb functionality.</li>
          <li>Collaborated with team members to integrate frontend and backend components efficiently.</li>
          <li>Participated in code reviews and optimized performance for existing modules.</li>
        </ul>
      </div>
    </div>
    <div className="mt-6">
      <div>
        <span className="text-red-600">Intern - Frontend Developer</span> | <span className="italic text-sm"> Jan 2023 - Jun 2023</span>
      </div>      
      <div className=" ps-3">
        <ul className="list-disc ps-5 pt-4 text-sm">
          <li>Developed full website layouts using ASP.Net MVC, ensuring responsive design across devices.</li>
          <li>Built custom backend modules and Web APIs to extend Dynamicweb functionality.</li>
          <li>Collaborated with team members to integrate frontend and backend components efficiently.</li>
          <li>Participated in code reviews and optimized performance for existing modules.</li>
        </ul>
      </div>
    </div>
  </div>
  )
}
const education = () =>{
  return(
   <div className="mt-4 py-2">
      <div>
        <span className="text-red-600">BCA</span> | <span className="italic text-sm"> June 2019 - June 2022 </span>
        <div className="py-2">Ayya Nadar Janaki Ammal College (autonomous), Sivakasi.</div>
      </div>   
    </div>
  )
}

export default Home;