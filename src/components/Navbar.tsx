import { portfolioData } from "../UserData/portfolioData";
const Navbar = () => {
  return (
    <header>
        <nav className="container mx-auto flex justify-between items-center py-3">
            <div className="text-4xl text-red-600 font-medium">{portfolioData.name}</div> 
            <div>
                <ul className="flex gap-3 space-x-1 text-white font-medium">
                    <li><a href="#" className="hover:text-red-600">Home</a></li>
                    <li><a href="#" className="hover:text-red-600">About</a></li>
                    <li><a href="#" className="hover:text-red-600">Skill</a></li>
                    <li><a href="#" className="hover:text-red-600">My Service</a></li>
                    <li><a href="#" className="hover:text-red-600">My Work</a> </li>
                    <li><a href="#" className="hover:text-red-600">Contact</a></li>
                </ul>
            </div> 
        </nav>
    </header>   
  );
};

export default Navbar;