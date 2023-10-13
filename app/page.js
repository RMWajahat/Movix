import Hero from "./components/hero"
import Videobar from "./components/videobar";

const page = async() => {
  
  await new Promise(res => setTimeout(res, 1500));
  const describe = (
    <>
      You look tired. Relax on sofa, take a coffee and watch <span className="font-semibold text-slate-900-600">Movix</span>.<br/>Let Movix wipeup you anxiety and smileup your face.
    </>
  );
  return (
    
      <main>
            <Hero title={"Let's take a chill pill"} describe={describe} image ={"/assets/home_svg.png"} linkk={"/movies"} linkkTxt={"Watch"}/>
            <Videobar stream={"/assets/cover_stream.mp4"}/>
                   </main>
  )
}

export default page;