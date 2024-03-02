export default function ContactMe() {
    return(
        <section id="contant" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, veritatis.</p>
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contant--label">
                        <span className="text-md">First Name</span>
                        <input type="text" className="contact--input text-md" name="first-name" id="first-name" required />
                    </label>
                    <label htmlFor="last-name" className="contant--label">
                        <span className="text-md">Last Name</span>
                        <input type="text" className="contact--input text-md" name="last-name" id="last-name" required />
                    </label>
                    <label htmlFor="email" className="contant--label">
                        <span className="text-md">Email</span>
                        <input type="email" className="contact--input text-md" name="email" id="email" required />
                    </label>
                    <label htmlFor="phone-number" className="contant--label">
                        <span className="text-md">Phone Number</span>
                        <input type="number" className="contact--input text-md" name="phone-number" id="phone-number" required />
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contant--label">
                        <span className="text-md">Choose a topic</span>
                        <select id="choose-topic" className="contant--input text-md">
                            <option>Select One...</option>
                            <option>Item 1</option>
                            <option>Item 2</option>
                            <option>Item 3</option>
                        </select>
                    </label>
                    <label htmlFor="message" className="contant--label">
                        <span className="text-md">Message</span>
                        <textarea className="contact--input text-md" id="message" />
                    </label>
            </form>
        </section>
    );
}