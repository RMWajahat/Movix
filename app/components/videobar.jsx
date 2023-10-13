"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Videobar = ({ stream }) => {
  const [reached, setReached] = useState(false);
  const Playref = useRef();

  const handlePlay = () => {
    if (!Playref.current.paused) {
      Playref.current.pause();
    }
    Playref.current.play();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && window.scrollY < 150) {
        if (!reached) {
          setReached(true);
          handlePlay();
        }
      } else {
        setReached(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [reached]);

  return (
    <section className="w-11/12 h-fit py-4 lg:h-screen m-auto  grid grid-flow-row grid-cols-1 relative align-middle">
      <video
        ref={Playref}
        src={stream}
        className="xs:w-11/12 sm:w-4/5 md:w-8/12 m-auto border-8 drop-shadow-2xl dark:border-slate-100 border-slate-900 -translate-y-28 md:-translate-y-48 lg:-translate-y-44"
        width={300}
        height={200}
      />
      <div className="w-11/12 sm:w-4/5 lg:w-8/12 m-auto flex justify-around lg:-translate-y-36">
        <Link href="/" className="dark:text-slate-100 text-slate-900">
          <button href="/" className="btn-class-name">
            <span className="back"></span>
            <span className="front"> </span>
          </button>
          Home
        </Link>
        <Link href="/movies" className="dark:text-slate-100 text-slate-900">
          <button className="btn-class-name green-home">
            <span className="back gback"></span>
            <span className="front gfront"></span>
          </button>
          Explore
        </Link>
      </div>
    </section>
  );
};

export default Videobar;
