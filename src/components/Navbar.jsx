import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import logo from "../assets/logo.png";
import { ImBlog } from "react-icons/im";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavColour(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/about", icon: AiOutlineUser, text: "About" },
    { path: "/project", icon: AiOutlineFundProjectionScreen, text: "Projects" },
    { path: "/resume", icon: CgFileDocument, text: "Resume" },
    { href: "https://soumyajitblogs.vercel.app/", icon: ImBlog, text: "Blogs" },
  ];

  return (
    <div className="flex justify-center">
    {/* Navbar */}
    <nav className={`fixed self-center w-full  mx-auto top-0 z-50 transition-all duration-300 ${
      navColour ? "bg-[#1b1a2ea9] backdrop-blur-lg shadow-xl" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 xl:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="w-24 h-14 md:w-32 md:h-16" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path || ""}
                href={item.href}
                className="group  relative text-white px-3 py-2 text-[16px] lg:text-[18px] no-underline font-medium hover:text-purple-300 transition-colors"
                target={item.href ? "_blank" : undefined}
                rel={item.href ? "noreferrer" : undefined}
              >
                <item.icon className="inline mr-2 mb-1 no-underline" />
                {item.text}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-purple-400 w-0 group-hover:w-[calc(100%-16px)] transition-all duration-300" />
              </Link>
            ))}
            
            {/* GitHub Button */}
            <a
              href="https://github.com/soumyajit4419/Portfolio"
              target="_blank"
              rel="noreferrer"
              className="ml-4 px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors text-white text-sm font-medium no-underline"
            >
              <CgGitFork className="inline mr-1 -mt-1" size={18} />
              <AiFillStar className="inline mr-1" size={16} />
              <span className="hidden lg:inline ">Fork on Github</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-purple-500/30 transition-colors"
          >
            <div className="w-8 h-8 relative">
              <span className={`absolute block h-[3px] w-6 bg-current transform transition ${isOpen ? 'rotate-45 top-3 left-1' : 'top-2 left-1'}`} />
              <span className={`absolute block h-[3px] w-6 bg-current transform transition ${isOpen ? 'opacity-0' : 'top-[14px] left-1'}`} />
              <span className={`absolute block h-[3px] w-6 bg-current transform transition ${isOpen ? '-rotate-45 top-3 left-1' : 'top-[18px] left-1'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
          <div className="px-2 pb-4 pt-2 space-y-2 bg-[#220f26cc] backdrop-blur-lg rounded-2xl mx-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path || ""}
                href={item.href}
                className="flex items-center px-4 py-3 text-white rounded-lg hover:bg-purple-500/30 transition-colors text-[17px]"
                onClick={() => setIsOpen(false)}
                target={item.href ? "_blank" : undefined}
                rel={item.href ? "noreferrer" : undefined}
              >
                <item.icon className="mr-3" size={20} />
                {item.text}
              </Link>
            ))}
            
            {/* Mobile GitHub Button */}
            <a
              href="https://github.com/soumyajit4419/Portfolio"
              target="_blank"
              rel="noreferrer"
              className="flex items-center px-4 py-3 text-white rounded-lg hover:bg-purple-500/30 transition-colors"
            >
              <CgGitFork className="mr-3" size={20} />
              <AiFillStar className="mr-3" size={18} />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default NavBar;