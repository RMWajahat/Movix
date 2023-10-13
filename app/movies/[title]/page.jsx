import Image from "next/image";
const SoloFilm = async ({ params }) => {
  const my_rank = params.title;

  const url = process.env.DATA_API_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5b84f97fe3mshf74f9f06b00ea71p100282jsnfcfe965c716a",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const my_data = await fetch(url, options);
  const movies = await my_data.json();

  return (
    <section className="w-screen md:min-h-fit min-h-screen overflow-hidden grid place-items-center md:gap-y-8 py-10 dark:text-slate-100 text-slate-200">
      {movies.map((movi) => (
        movi.rank == my_rank ? <>
          <h1 className=" w-3/5 m-auto text-center font-semibold lg:text-5xl sm:text-4xl text-3xl border-b-8 dark:border-b-slate-700 border-b-slate-300">
            {movi.title} {movi.genre.map((genn)=>(<span className="text-red-700 font-normal lg:text-4xl sm:text-3xl text-3xl"> <span className="text-slate-200 sm:text-3xl text-2xl">\</span> {genn}</span>))}
          </h1>
          <div className="relative mt-6 flex flex-col gap-2 w-8/12 min-h-full items-center dark:bg-slate-800 bg-slate-200 rounded-md px-7 py-8 shadow-2xl">
            <div className="flex flex-wrap xs:gap-x-6 xs:gap-y-1 sm:gap-x-4 md:justify-between justify-center w-11/12 pb-3 text-slate-300 items-baseline">
              <h4 className="font-semibold xs:text-sm md:text-md">Rank: {movi.rank}</h4>
              <h4 className="font-semibold xs:text-sm md:text-xl">Release: {movi.year}</h4>
              <h4 className="font-semibold xs:text-sm md:text-md">Rating: {movi.rating}</h4>
            </div>
            <Image src={movi.image} width={200} height={250} />
            <div className="flex flex-col md:flex-row gap-3 items-baseline justify-items-start w-full">
              <h1 className="text-md md:text-xl lg:text-2xl dark:text-slate-400 font-semibold text-slate-700">
                Description:
              </h1>
              <small className="text-sm md:text-md lg:text-lg text-justify dark:text-slate-200 text-slate-700">
                {movi.description}
              </small>
            </div>
          </div>
        </>:null
      ))}
    </section>
  );
};

export default SoloFilm;
