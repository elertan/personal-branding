import React from 'react';
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Landing>
                    <Header />
                </Landing>
                <About />
                <Portfolio />
                <Blogs />
                <Footer />
            </div>
        );
    }
}

export default App;
