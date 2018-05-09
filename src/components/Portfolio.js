import React from 'react';
import './Portfolio.css';
import Fade from 'react-reveal/Fade';

const items = [
    { 
        title: 'ASP Systeem',
        imageUrl: '/images/portfolio/asp-systeem.png',
        content: 'A multifunctional DBMS (Database Management System) for Splash Lease, used by the employers of the company to easily maintain a lot of user and product information via a very flexable user interface conforming to Google\'s Material UI design.',
    },
    {
        title: 'Amino Tools',
        imageUrl: '/images/portfolio/amino-tools.png',
        content: 'A cross-platform application running on iOS and Android, providing many utilities the main application \'Amino\' doesn\'t offer to its users. Such as a chatting functionality that works across all communities, having one single profile for every community and much more!',
    }
];

export default class Portfolio extends React.Component {
    render() {
        return (
            <div className="Portfolio__main">
                <Fade bottom cascade>
                    <h3 className="Portfolio__heading">Portfolio</h3>
                </Fade>
                <div className="Portfolio__items-container">
                    {items.map((item, index) => {
                        return (
                            <Fade left={!(index % 2)} right={index % 2} delay={500 + 750 * index}>
                                <div className="Portfolio__item">
                                    <Fade cascade delay={800}>
                                        <h2 className="Portfolio__item-title">{item.title}</h2>
                                    </Fade>
                                    <div 
                                        className="Portfolio__item-media" 
                                        style={{ backgroundImage: 'url(' + item.imageUrl + ')' }}
                                    />
                                    <Fade delay={500}I>
                                        <div className="Portfolio__item-content">
                                            {item.content}
                                        </div>
                                    </Fade>
                                </div>
                            </Fade>
                        );
                    })}
                </div>
            </div>
        );
    }
}