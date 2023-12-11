import React from "react";
import Header from "./Header";
import Skills from "./Skills";
import Navbar from "./Navbar";
import Projects from "./Projects";
import ContactForm from "./ContactForm";
import Footer from "./Footer";


function App(){
    return(
        <div className="App">
            <Navbar/>
            <Header/>
            <Skills/>
            <Projects/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default App;