import React from 'react';
import './Header.css';
import classnames from 'classnames';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerHasBackground: false,
            open: false,
        };
    }

    componentDidMount() {
        window.onscroll = () => {
            if (window.pageYOffset > 0 && !this.state.headerHasBackground) {
                this.setState({ headerHasBackground: true });
            } else if (window.pageYOffset === 0 && this.state.headerHasBackground) {
                this.setState({ headerHasBackground: false });
            }
        };
    }

    scrollToComponentByClass = (className) => {
        document.getElementsByClassName(className)[0].scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        return (
            <header className={classnames({
                'Header__main': true,
                'Header__main-scrolled': this.state.headerHasBackground
            })}>
                <div className="Header__container">
                    <a 
                        href="#"
                        className="Header__company-name"
                    >Alavon</a>
                    <nav className={classnames({
                        'Header__nav': true,
                        'Header__nav-open': this.state.open
                    })}>
                        <a className="Header__nav-menuicon" onClick={() => this.setState({ open: !this.state.open })}><i className="fa fa-bars"></i></a>
                        <a className="Header__nav-item active" onClick={() => this.scrollToComponentByClass('Landing__main')}>Home</a>
                        <a className="Header__nav-item" onClick={() => this.scrollToComponentByClass('About__main')}>About</a>
                        <a className="Header__nav-item" onClick={() => this.scrollToComponentByClass('Portfolio__main')}>Portfolio</a>
                        <a className="Header__nav-item" onClick={() => this.scrollToComponentByClass('Blogs__main')}>Blogs</a>
                    </nav>
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}