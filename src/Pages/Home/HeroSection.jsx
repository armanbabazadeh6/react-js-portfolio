export default function HeroSection(){
    return(
        <section id="heroSection" className="hero--section ">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Arman</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Full Stack</span> {" "}
                        <br />
                        Developer 
                    </h1>
                    <p className="hero--section-description">
                        React JS Portfolio Website Project
                        <br /> I hope you like it!
                    </p>
                </div>
                <a href="https://www.linkedin.com/in/arman-babazadeh-a49ab71b9/">
                <button className="btn btn-primary">Get In Touch</button>
                </a>
            </div>
            <div className="hero-section--img">
                <img src="./img/arman_profile.jpeg" alt="Hero Section" />
            </div>
        </section>
    );

}
