"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { MdMenu } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

const Nav = () => {
  const menu = useRef(false);

  useEffect(() => {
    console.log("State changed");
  }, [menu])
  



  return (
    <nav className="width-screen min-h-fit h-20 bg-slate-900  dark:bg-slate-50 drop-shadow-lg sticky top-0 left-0 z-10">
      <ul className="w-11/12 h-5/6 flex flex-row px-9 py-2 items-center justify-between m-auto">
        <li>
          <Link href="/">
            <Image src="/assets/movix_logo.png" width={60} height={60} alt="movix logo"/>
          </Link>
        </li>
        {
          !menu.current?<ol id="options" className="xs:absolute xs:top-8 xs:right-4 right-0.5 flex flex-col lg:flex-row lg:gap-x-16 gap-y-10 invisible lg:visible lg:relative text-center xs:bg-slate-50 dark:xs:bg-slate-600 xs:py-14 xs:px-12 rounded-lg lg:bg-transparent w-4/5 h-auto lg:w-auto">
          
          <li>
            <RxCrossCircled onClick={()=>{
              menu.current = !menu.current;
              document.getElementById("options").classList.remove("visible")
              document.getElementById("options").classList.add("invisible")
            }} className="absolute left-1 top-1 cursor-pointer hover:text-red-700 lg:opacity-0 md:opacity-100 sm:opacity-100 sm:text-xl md:text-3xl hover:font-normal text-slate-800 drop-shadow-xl  dark:text-slate-100 font-bold transition" />
          </li>
          <li >
            <Link
              href="/"
              className="hover:text-red-700 sm:text-lg md:text-lg lg:text-xl hover:font-normal text-slate-600 dark:text-slate-400 font-medium transition"
            >
              Home
            </Link>
          </li>

          <li >
            <Link
              href="/about"
              className="hover:text-red-700 sm:text-lg md:text-lg lg:text-xl hover:font-normal text-slate-600 dark:text-slate-400 font-medium transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/movies"
              className=" hover:text-red-700 sm:text-lg md:text-lg lg:text-xl hover:font-normal text-slate-600 dark:text-slate-400 font-medium transition"
            >
              Movies
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className=" hover:text-red-700 sm:text-lg md:text-lg lg:text-xl hover:font-normal text-slate-600 dark:text-slate-400 font-medium transition"
            >
              Contact
            </Link>
          </li>

      
    </ol>:null
        }
      <li>
          <MdMenu onClick={()=>{
              menu.current = !menu.current;
              document.getElementById("options").classList.remove("invisible")
              document.getElementById("options").classList.add("visible")
            }} className=" cursor-pointer hover:text-red-700 lg:opacity-0 xs:opacity-100 md:text-3xl hover:font-normal text-slate-400 dark:text-slate-600 font-medium xs:text-3xl transition" />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
