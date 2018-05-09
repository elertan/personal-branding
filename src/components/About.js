import React from 'react';
import './About.css';
import Fade from 'react-reveal/Fade';

export default class About extends React.Component {
    render() {
        return (
            <div className="About__main">
                <Fade bottom cascade>
                    <h3 className="About__main-heading">About</h3>
                </Fade>
                <blockquote>
                    <Fade bottom cascade delay={500}>
                        <p className="About__quote">We have always put our focus on really changing the way you interact with your business, your hobbies or even the things you love.</p>
                    </Fade>
                </blockquote>
                <Fade bottom cascade delay={1500}>
                    <p className="About__description">
                        We specialise in creating high quality applications for mobile, web and desktop environments by using the latest technologies to provide safety and smoothness to the user's experience.
                    </p>
                </Fade>
            </div>
        );
    }
}