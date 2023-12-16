import React, {useState} from "react";

function ContactForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return(
        <div>
        <section id="contact">
            <h2>Contact Me:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
            <section className="social-icons">
            <i className="fa-brands fa-linkedin" />
            </section>
        </div>
    );
}

export default ContactForm;