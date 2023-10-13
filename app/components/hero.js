import Image from "next/image"
import Link from "next/link"
const Hero = ({title, describe, image,linkk, linkkTxt}) => {
    
  return (
    <>
    <header className="overflow-hiddengrid w-screen h-screen place-items-center dark:bg-gradient-to-br from-cyan-500 to-fuchsia-400 bg-slate-100">
        <div className="grid w-full place-items-center px-14 h-5/6 lg:grid-cols-2 bg-transparent xs:grid-cols-1">
        <div className="order-2 lg:order-1">
            <div className="flex flex-col gap-3 lg:h-2/5">
            
                <h1 className="dark:text-slate-100 text-slate-800 xs:text-6xl md:text-8xl text-center lg:text-left lg:text-8xl">{title}</h1>
                <small className="dark:text-slate-200 text-slate-800 xs:text-xs text-center lg:text-left sm:text-lg w-10/12 m-auto lg:m-0">{describe}</small>
                <Link href={linkk} className="dark:text-slate-100 text-slate-800 text-lg w-28 hover:dark:bg-slate-900 hover:bg-slate-300 rounded-full px-3 py-0.5 m-auto text-center align-middle lg:m-0 dark:bg-slate-950 bg-slate-100 ">{linkkTxt}</Link>
            </div>
        </div>

        <div className="order-1 lg:order-2">
            <Image alt="hero image" src={image} width={350} height={350} className="iamgeAnim xs:w-fit md:w-fit drop-shadow-2xl"/>
        </div>
    </div>
    </header>
    </>

  )
}

export default Hero