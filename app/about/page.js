import Hero from '../components/hero'
import AboutData from './aboutus/page';
const describe = (
  <>
    <strong>Developed in 2023 with Next.js 13.</strong> <br /><br />
    An independent platform that provides you the latest movies free of cost.
  </>
);

const About = () => {
  return (
    <>
    <Hero title={"About Us"} describe={describe} image ={"/assets/about_svg.png"} linkk={"/about/aboutus"} linkkTxt={"Explore"}/>
    </>
  )
}

export default About;