
import { useState, useEffect } from "react";
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import Image from "next/image";
import headerImg from "../assets/img/header-img.svg"; // Make sure this path is valid
import 'animate.css';

const roles = ["Web Developer", "Web Designer", "UI/UX Designer"];

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prev => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="home" className="relative w-full h-screen mx-auto flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="animate__animated animate__fadeIn">
          <span className="text-green-400 font-medium text-sm uppercase tracking-widest">Welcome to my Portfolio</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-4">
            Hi! I&#39;m <span className="text-[#915eff]">Lokesh</span>
            <br />
            <span className="block text-2xl sm:text-3xl mt-2 text-white">
              <span className="text-secondary">{text}</span>
              <span className="blinking-cursor">|</span>
            </span>
          </h1>
          <p className="mt-4 text-white-100 max-w-xl leading-relaxed">
            An enthusiastic software engineer crafting performant, user-friendly, and scalable digital experiences.
          </p>
          <button
            onClick={() => console.log("connect")}
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 border border-secondary text-secondary rounded-xl hover:bg-secondary hover:text-black transition"
          >
            Let’s Connect <ArrowRightCircle size={20} />
          </button>
        </div>

        <div className="animate__animated animate__zoomIn flex justify-center">
          <img src={headerImg} alt="Header Image" width={400} height={400} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
