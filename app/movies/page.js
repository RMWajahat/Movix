import Link from "next/link";
import Image from "next/image";

const Movies = async () => {
  
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
  console.log(movies);
  return (
    <section className="w-screen md:min-h-fit min-h-screen overflow-hidden grid place-items-center md:gap-y-8 py-10 dark:text-slate-100 text-slate-200">
      <h1 className="lg:text-5xl text-4xl border-b-8 dark:border-b-slate-700 border-b-slate-300">
        Movies & Series
      </h1>
      <div className="dark:bg-slate-600 h-fit px-4 py-10 shadow-2xl rounded-2xl bg-slate-900 w-11/12 justify-between m-auto grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 place-items-center">
        {movies.map((movieElem) => (
          <Link
          href={`/movies/${movieElem.rank}`}>
          <div className="label relative flex flex-col gap-2 items-center dark:bg-slate-800 bg-slate-200 rounded-md px-4 py-5 hover:dark:bg-slate-900 hover:bg-slate-300 hover:shadow-2xl transition-all duration-200 hover:border-x-2 hover:border-y-2 border-slate-100">
            <Image src={movieElem.image} width={200} height={250} />
            <div>
              <h1 className="font-semibold text-2xl">
                {movieElem.title.substring(0, 18)} ..
              </h1>
              <br />
              <small className="text-xs md:text-sm lg:text-md dark:text-slate-200 text-slate-700">
                {movieElem.description.substring(0, 100)} ...
              </small>
              
            </div>
          </div>
            </Link>
        ))}
      </div>
    </section>
  );
};

export default Movies;
