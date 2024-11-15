import React from 'react';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/NavBar/Navbar';
import Project from './components/Project/Project';
import Sketches from './components/Sketches/Sketches';
import Skills from './components/Skills/Skills';

function App(){
    return(
        <div className="App">
        <Navbar />
        <Homepage/>
        <About />
        <Skills />
        <Project />
        <Sketches />
        <Footer />
        </div>
    );
}

export default App;

