import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import logo from "../assets/logo.png";
import { ImBlog } from "react-icons/im";
import { AiFillStar, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavColour(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: "about", icon: AiOutlineUser, text: "About", type: "scroll" },
    { id: "project", icon: AiOutlineFundProjectionScreen, text: "Projects", type: "scroll" },
    { path: "/resume", icon: CgFileDocument, text: "Resume", type: "route" },
    { href: "https://soumyajitblogs.vercel.app/", icon: ImBlog, text: "Blogs", type: "external" },
  ];

  return (
    <nav className={`fixed top-2 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
      navColour ? "bg-[#1b1a2ea9] backdrop-blur-lg shadow-xl" : "bg-transparent"
    } w-[95%] max-w-screen-2xl rounded-full`}>
      <div className="container mx-auto px-4 xl:px-8 2xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="w-24 h-14 md:w-32 md:h-16 hover:scale-105 transition-transform" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item, index) => {
              if (item.type === "route") {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className="group relative text-white px-4 py-2 text-[16px] lg:text-[18px] no-underline font-medium hover:text-purple-300 transition-colors"
                  >
                    <item.icon className="inline mr-2 mb-1 no-underline" />
                    {item.text}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-purple-400 w-0 group-hover:w-[calc(100%-16px)] transition-all duration-300" />
                  </Link>
                );
              } else if (item.type === "external") {
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative text-white px-4 py-2 text-[16px] lg:text-[18px] no-underline font-medium hover:text-purple-300 transition-colors"
                  >
                    <item.icon className="inline mr-2 mb-1 no-underline" />
                    {item.text}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-purple-400 w-0 group-hover:w-[calc(100%-16px)] transition-all duration-300" />
                  </a>
                );
              } else {
                return (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    className="group relative text-white px-4 py-2 text-[16px] lg:text-[18px] no-underline font-medium hover:text-purple-300 transition-colors"
                  >
                    <item.icon className="inline mr-2 mb-1 no-underline" />
                    {item.text}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-purple-400 w-0 group-hover:w-[calc(100%-16px)] transition-all duration-300" />
                  </a>
                );
              }
            })}
            
            {/* GitHub Button */}
            <a
              href="https://github.com/soumyajit4419/Portfolio"
              target="_blank"
              rel="noreferrer"
              className="ml-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors text-white text-sm font-medium no-underline flex items-center"
            >
              <CgGitFork className="mr-2" size={18} />
              <AiFillStar className="mr-2" size={16} />
              <span className="hidden lg:inline">Fork on Github</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-full transition-all duration-300"
          >
            <div className="w-8 h-8 relative flex items-center justify-center text-white">
              <span className={`absolute block h-[2px] w-6 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`} />
              <span className={`absolute block h-[2px] w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
              <span className={`absolute block h-[2px] w-6 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'max-h-[100vh]' : 'max-h-0'}`}>
          <div className="px-4 pb-6 pt-4 space-y-3 bg-[#220f26e6] backdrop-blur-2xl rounded-3xl m-2 mt-4">
            {navItems.map((item, index) => {
              if (item.type === "route") {
                return (
                  <Link
                    key={index}
                    to={item.path}
                    className="flex items-center px-6 py-4 text-white rounded-xl hover:bg-purple-500/30 transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="mr-4" size={24} />
                    {item.text}
                  </Link>
                );
              } else if (item.type === "external") {
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center px-6 py-4 text-white rounded-xl hover:bg-purple-500/30 transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="mr-4" size={24} />
                    {item.text}
                  </a>
                );
              } else {
                return (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    className="flex items-center px-6 py-4 text-white rounded-xl hover:bg-purple-500/30 transition-colors text-lg"
                  >
                    <item.icon className="mr-4" size={24} />
                    {item.text}
                  </a>
                );
              }
            })}
            
            {/* Mobile GitHub Button */}
            <a
              href="https://github.com/soumyajit4419/Portfolio"
              target="_blank"
              rel="noreferrer"
              className="flex items-center px-6 py-4 text-white rounded-xl hover:bg-purple-500/30 transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              <CgGitFork className="mr-4" size={24} />
              <AiFillStar className="mr-4" size={22} />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;