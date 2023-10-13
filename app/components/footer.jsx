import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-slate-900 relative w-screen h-fit text-center py-2">
      <div className="w-11/12 h-full px-5 py-6 m-auto grid lg:grid-cols-2 gap-16 grid-cols-1">
        <div className="w-3/4 text-left">
          <h1 className="font-semibold text-slate-100">About Movix</h1>
          <small className="font-light text-slate-300">
          Explore Movix, your premier destination for movies and series. Dive into an unrivaled world of entertainment and witness the cinematic wonders of Movix! <br />Your gateway to thrilling adventures, all in one place. Get ready to be amazed!
          </small>
        </div>
        <div>
          <ul className="flex flex-row lg:flex-col lg:gap-0.5 gap-3 text-left">
            <li className="font-semibold text-slate-100">Links</li>
            <li>
              <Link
                href="/"
                className="hover:text-red-700 xs:text-sm lg:text-md hover:font-normal text-slate-600 dark:text-slate-400 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-red-700 xs:text-sm lg:text-md hover:font-normal text-slate-600 dark:text-slate-400 transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/movies"
                className=" hover:text-red-700 xs:text-sm lg:text-md hover:font-normal text-slate-600 dark:text-slate-400 transition"
              >
                Movies
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className=" hover:text-red-700 xs:text-sm lg:text-md hover:font-normal text-slate-600 dark:text-slate-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <small className="font-light text-slate-300">&copy; All rights reserved      &reg; Movix 2023</small>
    </footer>
  );
};

export default Footer;
