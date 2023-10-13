import {BiCurrentLocation} from 'react-icons/bi';
import {MdEmail} from 'react-icons/md';
import {AiFillPhone} from 'react-icons/ai';

const AboutData = () => {
  return (
    <section className='dark:text-slate-100 text-slate-900 w-screen min-h-screen'>
        <div className='w-5/6 h-fit m-auto mt-14'>
        <div className='text-center'>
          <h1 className='font-semibold text-md md:text-2xl lg:text-5xl mb-6 w-1/4 m-auto border-b-8 dark:border-b-slate-700 border-b-slate-300'>Location</h1>
          <iframe className="border-0 w-full rounded-lg active:shadow-2xl active:dark:shadow-slate-800 active:shadow-slate-200" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3316.7892123349634!2d72.82298613677058!3d33.76611244483424!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1695017717215!5m2!1sen!2s" width={600} height={450}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
         <div className="mt-6 md:mt-7 lg:mt-10 text-center ">
         <h1 className='lg:text-5xl text-lg md:text-2xl  mb-6 w-1/4 m-auto border-b-8 dark:border-b-slate-700 border-b-slate-300'>Contact info.</h1>
        <div className='mt-14 mb-14 grid grid-cols-1  lg:grid-cols-3 place-items-center gap-y-6'>
            
            <div className="w-11/12 cursor-none flex flex-col justify-between items-center dark:bg-slate-100 bg-slate-800 text-slate-100 dark:text-slate-800 rounded-2xl h-64 py-5 px-4">
              <BiCurrentLocation  className="rounded-full border-8 p-3 dark:border-slate-800 border-slate-100 h-28 w-28"/>
              <div className="w-full">
                <h1 className="dark:text-slate-400 text-slate-900 font-semibold xs:text-sm md:text-md lg:text-lg">Address</h1>
                <small>Room-115, Q-Hall, UET Taxila</small>
              </div>
            </div>



            <div className="w-11/12  cursor-none flex flex-col justify-between items-center dark:bg-slate-100 bg-slate-800 text-slate-100 dark:text-slate-800 rounded-2xl h-64 py-5 px-4">
              <MdEmail  className="rounded-full border-8 p-3 dark:border-slate-800 border-slate-100 h-28 w-28"/>
              <div className="w-full">
                <h1 className="dark:text-slate-400 text-slate-900 font-semibold xs:text-sm md:text-md lg:text-lg">Email</h1>
                <small>rajamuhammadwajahat2003@gmail.com</small>
              </div>
            </div>



            <div className="w-11/12  cursor-none flex flex-col justify-between items-center dark:bg-slate-100 bg-slate-800 text-slate-100 dark:text-slate-800 rounded-2xl  h-64 py-5 px-4">
              <AiFillPhone  className="rounded-full border-8 p-3 dark:border-slate-800 border-slate-100 h-28 w-28"/>
              <div className="w-full">
                <h1 className="dark:text-slate-400 text-slate-900 font-semibold xs:text-sm md:text-md lg:text-lg">Contact Number</h1>
                <small>+92 346 3336286</small>
              </div>
            </div>


        </div>
         </div>
        </div>
    </section>
  )
}

export default AboutData;