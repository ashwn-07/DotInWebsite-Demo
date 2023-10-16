import React from "react";
import "../Assets/CSS/Footer.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="footer__style" id="contact">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once:false}}
                transition={{ duration: 0.8, ease: "easeOut" }}

                className="container mx-auto  row  text-white"
            >
                <div className="col-lg-4">
                    {" "}
                    <h3>OFFICE</h3>
                    <p>
                        1st Floor, C Wing,
                        <br />
                        Office No-C1-07, Chaithanya IT Building,
                        <br />
                        INFOPARK, PALLIPPURAM, CHERTHALA
                        <br />
                        Alappuzha, Kerala, 688541
                    </p>
                </div>
                <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                    <p>
                        <FaTwitter size={25} color="#6361ac"/> <FaFacebook size={25} color="#6361ac" />
                    </p>
                    <p>© 2020 Dotintechnologies. All rights reserved.</p>
                </div>
                <div className="col-lg-4 d-flex flex-column align-items-center">
                    <h3>CONTACT</h3>
                    <p className="text-md-end text-center ">
                        dotintechnologies@gmail.com
                        <br />
                        +91 833 008 2699
                    </p>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
