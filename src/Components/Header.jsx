import React, { useState } from "react";
import "../Assets/CSS/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ activeSection, setIsOpen }) => {
    const [scrolled, setScrolled] = useState(false);

    const onScrollChange = () => {
        if (window.scrollY >= 90) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    window.addEventListener("scroll", onScrollChange);

    return (
        <>
            <header
                className={`d-flex position-fixed w-100 ${scrolled ? `nav__scroll` : `m-0 p-0`}`}
            >
                <div className="container d-flex align-items-center justify-content-between">
                    <div id="logo" className="py-1">
                        <a href="https://dotintech.com">
                            <img
                                src="https://dotintech.com/wp-content/themes/dotin/assets/img/logo.png"
                                alt="DotIn"
                                title="DotIn"
                            />
                        </a>
                    </div>
                    <button
                        className=" btn d-md-none d-block nav__button"
                        onClick={() => setIsOpen((curr) => !curr)}
                    >
                        <GiHamburgerMenu size={30} />
                    </button>

                    <nav className="d-md-block d-none">
                        <ul className="nav-menu  d-flex">
                            <li className={`${activeSection === "home" ? "active" : null}`}>
                                <a href="/">Home</a>
                            </li>
                            <li className={`${activeSection === "services" ? "active" : null}`}>
                                <a href="#services" className="scroll">
                                    Service
                                </a>
                            </li>
                            <li className={`${activeSection === "contactus" ? "active" : null}`}>
                                <a href="#contactus" className="scroll">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a href="https://dotintech.com/blog">Blog</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
