import codeIc from '../svgcomponents/code';

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
}
export const portfolioData: PortfolioData = {
  logoname: "Karthika." ,
  FirstName:"Selva",
  lastName:"Karthika",
  jobTitle:"Fullstack Developer (ASP.Net MVC, SQL) | Learning React & .NET Core",
  tagline:"I build and design user-friendly applications with strong backend logic.",
  City:"Srivilliputhur",
  Skills:[
    {name:"HTML5", imgpath:"/src/assets/skills/html.jpg"},
    {name:"CSS3", imgpath:"/src/assets/skills/css.jpg"},
    {name:"JavaScript", imgpath:"/src/assets/skills/js.jpg"},
    {name:"JQuery", imgpath:"/src/assets/skills/jquery.jpg"},
    {name:"Bootstrap", imgpath:"/src/assets/skills/bootstrap.jpg"},
    {name:"C#", imgpath:"/src/assets/skills/csharp.jpg"},
    {name:"ASP.NET", imgpath:"/src/assets/skills/aspdotnet.jpg"},
    {name:"Git", imgpath:"/src/assets/skills/git.jpg"},
    {name:"GitHub", imgpath:"/src/assets/skills/github.jpg"},
    {name:"Postman", imgpath:"/src/assets/skills/postman.jpg"},
    {name:"React", imgpath:"/src/assets/skills/react.jpg"},
    {name:"Tailwind CSS", imgpath:"/src/assets/skills/tailwind.jpg"},
    {name:"TypeScript", imgpath:"/src/assets/skills/typescript.jpg"},
    {name:"SQL", imgpath:"/src/assets/skills/sql.jpg"},
  ],
  myServices:[
    {logo:codeIc,
    title:"Web Development",
    description:"I build responsive, user-friendly websites using ASP.Net MVC. I'm also expanding my skills with modern frameworks like React and .NET Core.",
    gotolink:"#"},    
    {logo:codeIc,
    title:"Custom Modules & Web APIs",
    description:"I create powerful backend logic, custom modules, and RESTful Web APIs using ASP.Net and C#.",
    gotolink:"#"},
    {logo:codeIc,
    title:"UI/UX Design",
    description:"I design clean, intuitive, and engaging interfaces with Figma.",
    gotolink:"#"}
  ]
};
