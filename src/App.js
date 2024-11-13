import Header from "./Components/Header";
import "./Assets/CSS/App.css";
import { TbBrandLaravel } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GrSwift } from "react-icons/gr";
import { AiFillAndroid } from "react-icons/ai";
import { SiExpress } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import AnimatedBlob from "./Components/AnimatedBlob";
import webappimg from "./Assets/Img/01.png";
import mobilePng from "./Assesssts/Img/DotinTechMobileService.png";
import service from "./Assets/Img/ccccDotinTechnologiesService.png";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import MobSideNav from "./Components/MobSideNav";

function App() {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);
    const [open, setIsOpen] = useState(false)



    useEffect(() => {
        //create new instance and pass a callback function
        observer.current = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
                //Update state with the visible section ID
                if (visibleSection) {
                    setActiveSection(visibleSection.id);
                }
            },
            {
                root: null, // Use the viewport as the root
                rootMargin: "0px", // No margin
                threshold: 0.2, // Trigger when 20% of the section is in the viewport, initally tried 50%, but for better perfomance in mobile had to  set it to 20%
            }
        );

        //Get custom attribute data-section from all sections
        const sections = document.querySelectorAll("[data-section]");

        sections.forEach((section) => {
            observer.current.observe(section);
        });

        //Cleanup function to remove observer
        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <Header activeSection={activeSection} setIsOpen={setIsOpen}/>
            <MobSideNav open={open} setIsOpen={setIsOpen}/>
            <section className="hero__section mb-5" data-section id="home">
                <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="container"
                >
                    <div className="row flex-row-reverse">
                        <div className="col-lg-7">
                            <img
                                src="https://dotintech.com/wp-content/themes/dotin/assets/img/intro-carousel/banner-img2.png"
                                alt="Dot In Technologies"
                                class="img-fluid"
                            />
                        </div>
                        <div className="col-lg-5 d-flex flex-column text-white justify-content-center">
                            <h3 class="hero__heading">
                                Transforming Your Business To Smart Business
                            </h3>
                            <p className="hero__desc">
                                Whether you are doing small or big business, we can help you to
                                promote your business to the peek level with the help of
                                <br />
                                smart technologies.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className=" tech__section container-lg">
                <h3 className="tech__section__heading text-center">OUR EXPERTISE STACK</h3>

                <p>
                    Our web developers holding vast experience in latest technology to build custom
                    applications. We analysis the business model, business processes, objectives and
                    then propose a custom app development solution with the appropriate technology
                    stack tailored to specific needs.
                </p>
                <div className="row tech__icons">
                    <div className="col-lg-2 col-6 col-md-3 icon__hover">
                        
                        <TbBrandLaravel size={100} color="#fd4f31"  />
                        
                        <h4 className="icon__before"> Laravel</h4>
                    </div>
                    <div className="col-lg-2 col-6 col-md-3 icon__hover">
                        <FaReact size={100} color="#61dafb" />
                        <h4 className="">React</h4>
                    </div>
                    <div className="col-lg-2 col-6 col-md-3 icon__hover">
                        <FaVuejs size={100} color="#41B883" />
                        <h4>Vue.js</h4>
                    </div>
                    <div className="col-lg-2 col-6 col-md-3 icon__hover">
                        <SiExpress size={100} color="#444" />
                        <h4>Express</h4>
                    </div>
                    <div className="col-lg-2 col-6 col-md-3 icon__hover">
                        <AiFillAndroid size={100} color="#A4C439" />
                        <h4>Android</h4>
                    </div>
                    <div className="col-lg-2 col-6 col-md-3 icon__hover">
                        <GrSwift size={100} color="#F05138" />
                        <h4>Swift</h4>
                    </div>
                </div>
            </section>

            <section className="bg-light services__style" data-section id="services">
                <div className=" tech__section container">
                    <h3 className="tech__section__heading text-center">WHAT WE CAN OFFER YOU</h3>

                    <p className="text-center">
                        Whether it's websites, e-commerce or App - we've been at home in the digital
                        world for years. So we know exactly how to bring your website forward, get
                        your customers on the web and conquer your goals digitally.
                    </p>

                    <div className="row pt-5">
                        <motion.div
                            initial={{ opacity: 0, x: -120 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="col-lg-6 col-12 col-md-6"
                        >
                            <h2>
                                <span className="fs-1"  style={{ color: "#4a2fb4" }}>01.</span>
                                <br /> Website & Web apps
                            </h2>
                            <p className="mt-5">
                                A perfectly designed website will increase the chances of visitors
                                easily finding the right information, products and services, thereby
                                enabling you to convert them as customers. We focus on delivering
                                innovative, high-quality services at reasonable cost to our clients.
                            </p>
                            <hr className="blink__line" />
                        </motion.div>
                        <div className="col-lg-6 col-12 col-md-6 position-relative">
                            <AnimatedBlob />

                            <img
                                className="img-fluid position-absolute image__position1"
                                src={webappimg}
                                alt="dotin web service"
                            />
                        </div>
                    </div>
                    <div className="row flex-row-reverse" style={{overflow:"hidden"}}>
                        <motion.div
                            className="col-lg-6 col-12 col-md-6"
                           
                            initial={{ opacity: 0, x: 120}}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2>
                                <span className="fs-1" style={{ color: "#4a2fb4" }}>02.</span>
                                <br /> Mobile App
                            </h2>
                            <p className="mt-5">
                                Looking for a reliable Mobile App Development Service Provider? We
                                help you define your business needs and align them with the latest
                                mobile technologies and create mobile solutions accordingly.
                            </p>
                            <hr className="blink__line" />
                        </motion.div>
                        <div className="col-lg-6 col-12 col-md-6 position-relative">
                            {" "}
                            <AnimatedBlob />
                            <img
                                className="img-fluid position-absolute image__position2 "
                                src={mobilePng}
                                alt="Dot In Mobile Service"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <motion.div
                            initial={{ opacity: 0, x: -120 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="col-lg-6 col-12 col-md-6"
                        >
                            <h2>
                                <span className="fs-1" style={{ color: "#4a2fb4" }}> 03.</span>
                                <br /> UI/UX
                            </h2>
                            <p className="mt-5">
                                A well designed site is a worthy business tool to build strong
                                relationships with customers, and keep users coming back.
                            </p>
                            <hr className="blink__line" />
                        </motion.div>
                        <div className="col-lg-6 col-12 col-md-6 position-relative">
                            {" "}
                            <AnimatedBlob />
                            <img
                                className="img-fluid position-absolute image__position3"
                                src={service}
                                alt="Dot in UI/UX"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="mt-5 d-flex flex-column align-items-center justify-content-center"
                data-section
                id="contactus"
            >
                <h3 className="tech__section__heading text-center">START YOUR PROJECT TODAY</h3>

                <ContactForm />
            </section>

            <Footer />
        </>
    );
}

export default App;
