import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <Link to='/aboutme'> <a className="link link-hover" alt=''>About Me</a>
                    </Link>
                    <Link to='/contactme'>
                        <a className="link link-hover" alt=''>Contact Me</a>
                    </Link>

                </div>

                <div>
                    <p>Copyright © 2022 - All right reserved by Property Homie Rocco</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;