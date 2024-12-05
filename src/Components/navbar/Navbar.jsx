import { useState } from "react";
import Link from "../Link/Link";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home", place: "HomePage" },
    { id: 2, path: "/about", name: "About Us", place: "AboutPage" },
    { id: 3, path: "/services", name: "Our Services", place: "ServicesPage" },
    { id: 4, path: "/contact", name: "Contact Us", place: "ContactPage" },
  ];

  return (
    <nav className="text-black p-6 bg-yellow-200">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose className="text-3xl"></AiOutlineClose>
        ) : (
          <AiOutlineMenu className="text-3xl"></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`md:flex  absolute md:static duration-1000
          ${open ? 'top-16': '-top-60 md:top-0 md:opacity-100'}
          bg-yellow-400 px-6 shadow-lg`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;