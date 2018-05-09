import React from 'react';
import './Landing.css';
import { 
    Fade,
} from 'react-reveal';

export default class Landing extends React.Component {
    render() {
        return (
            <div className="Landing__main">
                <div className="Landing__container">
                    <Fade top delay={300}>
                        <p className="Landing__slogan">Your vision, our solution.</p>
                    </Fade>
                    <Fade bottom delay={1500}>
                        <p className="Landing__slogan-extra">We craft applications that you love to use.</p>
                    </Fade>
                </div>
                {this.props.children}
            </div>
        );
    }
}