import codeIc from '../svgcomponents/code';
import cropAlt from '../svgcomponents/cropAlt';
import Api from '../svgcomponents/api';
import exampleWorkBG from '../assets/workbg/exampleworkbg.jpg';
import explore from '../svgcomponents/explore';

export interface PortfolioData {
  logoname: string;
  FirstName: string;
  lastName: string;
  jobTitle:string;
  tagline:string;
  City:string;
  Skills: {
    name: string;
    imgpath: string;
  }[];
  myServices:{
    logo: typeof codeIc;
    title:string;
    description:string;
    gotolink:string;
  }[];
  MyWork:{
    projectBg:string;
    title:string;
    desc:string;
    projectLink:string;
    logo: typeof explore;
  }[];
}
export const portfolioData: PortfolioData = {
  logoname: "Karthika." ,
  FirstName:"Selva",
  lastName:"Karthika",
  jobTitle:"Fullstack Developer (ASP.Net MVC, SQL) | Learning React & .NET Core",
  tagline:"I build and design user-friendly applications with strong backend logic.",
  City:"Srivilliputhur",
  Skills:[
    {name:"HTML5", imgpath:"asstes/skills/html.jpg"},
    {name:"CSS3", imgpath:"asstes/skills/css.jpg"},
    {name:"JavaScript", imgpath:"asstes/skills/js.jpg"},
    {name:"JQuery", imgpath:"asstes/skills/jquery.jpg"},
    {name:"Bootstrap", imgpath:"asstes/skills/bootstrap.jpg"},
    {name:"C#", imgpath:"asstes/skills/csharp.jpg"},
    {name:"ASP.NET", imgpath:"asstes/skills/aspdotnet.jpg"},
    {name:"Git", imgpath:"asstes/skills/git.jpg"},
    {name:"GitHub", imgpath:"asstes/skills/github.jpg"},
    {name:"Postman", imgpath:"asstes/skills/postman.jpg"},
    {name:"React", imgpath:"asstes/skills/react.jpg"},
    {name:"Tailwind CSS", imgpath:"asstes/skills/tailwind.jpg"},
    {name:"TypeScript", imgpath:"asstes/skills/typescript.jpg"},
    {name:"SQL", imgpath:"asstes/skills/sql.jpg"},
  ],
  myServices:[
    {logo:codeIc,
    title:"Web Development",
    description:"I build responsive, user-friendly websites using ASP.Net MVC. I'm also expanding my skills with modern frameworks like React and .NET Core.",
    gotolink:"#"},    
    {logo:Api,
    title:"Custom Modules & Web APIs",
    description:"I create powerful backend logic, custom modules, and RESTful Web APIs using ASP.Net and C#.",
    gotolink:"#"},
    {logo:cropAlt,
    title:"UI/UX Design",
    description:"I design clean, intuitive, and engaging interfaces with Figma.",
    gotolink:"#"}
  ],
  MyWork:[
    {projectBg:exampleWorkBG,
      title:"Project Name",
      desc:"The app connects you yo the talented people around the world. Download it from play store.", 
      projectLink:"#",
      logo:explore},
    {projectBg:exampleWorkBG, 
      title:"Project Name", 
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laborum perspiciatis autem praesentium blanditiis,cupiditate porro impedit vel", 
      projectLink:"#",
      logo:explore},
    {projectBg:exampleWorkBG, 
      title:"Project Name", 
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laborum perspiciatis autem praesentium blanditiis,cupiditate porro impedit vel", 
      projectLink:"#",
      logo:explore},
      {projectBg:exampleWorkBG, 
      title:"Project Name", 
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laborum perspiciatis autem praesentium blanditiis,cupiditate porro impedit vel", 
      projectLink:"#",
      logo:explore}
  ]
};
