import React from 'react';
import './Landing.css';

export default class Landing extends React.Component {
    render() {
        return (
            <div className="Landing__main">
                {this.props.children}
            </div>
        );
    }
}