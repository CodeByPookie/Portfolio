import { navLinks } from "../data/navData";
import { portfolioData } from "../data/userData";
const Navbar = () => {
  return (
    <header className="sticky top-0 bg-black">
        <nav className="container mx-auto flex justify-between items-center py-3">
            <div className="text-4xl text-red-600 font-medium">{portfolioData.logoname}</div> 
            <div>
                <ul className="flex gap-3 space-x-1 text-white font-medium text-lg">
                    {navLinks.map((link) => (
                        <li key={link.id} className="hover:text-red-600 relative group">
                                <a href={`#${link.id}`}>{link.label}</a>
                                <span className="nav-hovereffect"></span>
                        </li>
                    ))}                   
                </ul>
            </div> 
        </nav>
    </header>   
  );
};

export default Navbar;