import HeroSection from "../HeroSection.jsx";
import MySkills from "../MySkills.jsx";
import AboutMe from "../AboutMe.jsx";
import MyPortfolio from "../MyPortfolio.jsx";
import Testimonial from "../Testimonials.jsx";
import ContactMe from "../ContactMe.jsx";

export default function Home () {
    return(
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <Testimonial />
            <ContactMe />

        </>
    );
}