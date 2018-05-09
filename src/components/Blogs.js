import React from 'react';
import './Blogs.css';
import Fade from 'react-reveal/Fade';

export default class Blogs extends React.Component {
    render() {
        return (
            <div className="Blogs__main">
                <Fade bottom cascade>
                    <h3 className="Blogs__heading">Blogs</h3>
                </Fade>
            </div>
        );
    }
}