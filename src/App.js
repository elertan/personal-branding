import React from 'react';
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Footer from './components/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Landing>
                    <Header />
                </Landing>
                <About />
                <Footer />
            </div>
        );
    }
}

export default App;
