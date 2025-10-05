import { portfolioData } from "../data/userData";
import profilepic from '../assets/profilepic.jpg';
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Home = () => {
  return (
    <main className="cus_max-width">        
      {/*--- Intro Section ---*/}
      {intro()}
      {/* Profile About Section */}
      {About()}     
      {/* Experience and Education Section */}
      {experienceandEducation()}     
      {/* Skills Section */}
      {skills()}      
      {/* My Services Section */}
      {MyServices()}
      {/* My Work Section */}
      {MyWork()}
      {/* Contact Section */}
      {Contact()}
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
        {/* <div className="flex justify-end">- From {portfolioData.City}</div> */}
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
          <li>Worked with Azure DevOps for source control (cloning repositories, raising pull requests) and task management (creating work items, updating states).</li>      
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
const skills =() =>{
  return(
    <div className="text-white mt-5">
        <div className="text-4xl font-medium border-b-3 border-red-600 w-fit mb-4">Skills</div>      
        <div className="py-5">
          <Swiper 
            modules={[Autoplay]}
            spaceBetween={0}
            navigation
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false, // keeps auto sliding even after manual navigation
            }}
            breakpoints={{
              320: { slidesPerView: 2 },  // Mobile
              640: { slidesPerView: 3 },  // Small tablets
              1024: { slidesPerView: 8 }, // Desktop
            }}
            className="cus_SkillsSwiper" 
          >
           {portfolioData.Skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <img
                    src={skill.imgpath}
                    alt={skill.name}
                    className="w-20 h-20 object-contain bg-white p-2 rounded-full"
                  />
                  <span className="text-white mt-2">{skill.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>   
    </div>   
  )
}
const MyServices = () => {
  return (
    <div className="text-white mt-5">
      <div className="text-4xl font-medium border-b-3 border-red-600 w-fit mb-6">
        My Services
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-7">
        {portfolioData.myServices.map((service, index) => {
          const Logo = service.logo;
          return (
            <div
              key={index}
              id={`service_${index + 1}`}
              className="bg-[#262626] hover:bg-red-600 px-6 py-8 flex flex-col justify-between cus_service-li"
            >
              <div>
                <div className="logo-holder mb-4">
                  <Logo width={68} height={45}/>
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
              </div>
              <div>
                <a
                  href={service.gotolink}
                  className="text-red-600 font-medium hover:underline cus_myservice-link"
                >
                  See More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const MyWork = () => {
  return (
    <div className="text-white my-5">
      <div className="text-4xl font-medium border-b-3 border-red-600 w-fit mb-6">
        My Work
      </div>

      <div className=" work-list grid grid-cols-1 md:grid-cols-3 gap-10 mt-7">
        {portfolioData.MyWork.slice(0, 3).map((work, index) => {
          const Logo = work.logo;
          return (
            <div className="work rounded-[10px] relative overflow-hidden w-100" 
              key={index} id={`service_${index + 1}`}
            >
              <img src={work.projectBg} className="rounded-[10px] w-100 h-100 block"/>
              <div className="work-layer w-100 rounded-[10px] absolute bottom-0 overflow-hidden flex flex-col justify-center items-center px-10 text-center text-[14px]">
                <h3 className="font-medium mb-5 text-[16px] ">{work.title}</h3>
                <p className="mb-2">
                  {work.desc}
                </p>
                <a href={work.projectLink} className="mt-3 w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center">
                  <Logo className="project_logo w-3.5 h-auto"/>
                </a>
              </div>
            </div>
          );
        })}

      </div>

      {portfolioData.MyWork.length > 3 && (
        <div className="flex justify-center my-6">
          <button className="px-6 py-2 border border-red-600 bg-transparent text-white rounded-xs hover:bg-red-700 cursor-pointer">
            See More 
          </button>
        </div>
      )}
    </div>
  );
};
const Contact = () => {
  return(
    <div className="text-white my-[50px] flex flex-col md:flex-row gap-10">
      <div>
        <div className="text-4xl font-semibold">Contact Me</div>
        <div className="mt-4">
          {portfolioData.ContactInfo.map((info, index) => {
            const Logo = info.logo;
            return (
              <div key={index} className="flex items-center mb-3">
                <Logo className="mr-2 size-4" />
                <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-gray-300 font-medium hover:underline">
                  {info.text}
                </a>
              </div>
            );
          })}
        </div>
        <div className="pt-10">
          <a href="/Karthika_CV.pdf" download="Karthika_CV.pdf" className="bg-[#FF004F] text-white py-4 px-10 border-0 outline-0 rounded cursor-pointer">
              Download CV
          </a>
        </div>
      </div>
      <div className="ps-10">
        <form id="contactform">
          <input type="text" placeholder="Your Name" className="w-[500px] p-3 mb-4 bg-[#262626] border-0 outline-0 rounded"/>
          <input type="email" placeholder="Your Email" className="w-[500px] p-3 mb-4 bg-[#262626] border-0 outline-0 rounded"/>
          <textarea placeholder="Your Message" className="w-[500px] h-[176px] p-3 mb-4 bg-[#262626] border-0 outline-0 rounded"></textarea>
          <div className="pt-6">
            <button type="submit" className="bg-[#FF004F] text-white py-4 px-10 border-0 outline-0 rounded cursor-pointer"> Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Home;