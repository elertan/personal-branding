import React from 'react';
import './Landing.css';

export default class Landing extends React.Component {
    render() {
        return (
            <div className="Landing__main">
                <div className="Landing__container">
                    <p className="Landing__slogan">Your vision, our target.</p>
                    <p className="Landing__slogan-extra">We create software that works.</p>
                </div>
                {this.props.children}
            </div>
        );
    }
}