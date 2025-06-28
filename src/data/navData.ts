export interface NavLink {
  id: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skill", label: "Skills" },
  { id: "service", label: "My Service" },
  { id: "work", label: "My Work" },
  { id: "contact", label: "Contact" }
];