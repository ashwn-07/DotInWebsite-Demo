import React, { useState } from "react";
import "../Assets/CSS/ContactForm.css";
const ContactForm = () => {
    const [email, setEmail] = useState(undefined);
    const [name, setName] = useState(undefined);
    const [phone, setPhone] = useState(undefined);
    const [message, setMessage] = useState(undefined);
    const [showMsg, setShowMsg] = useState();
    const [msg, setMsg] = useState();
    const [success, setSuccess] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
         

        if (
          !email ||
          email.trim() === "" ||
          !name ||
          name.trim() === ""  ||
          !phone ||
          phone.trim() === "" ||
          !message ||
          message.trim() === ""
        ) {
          // valdiations with regex can be done as well
            setMsg("All fileds are required");
            setShowMsg(true);
            setSuccess(false);
            console.log(name);

            setTimeout(() => {
                setShowMsg(false);
            }, 6000);
        } else {
            //API endpoint to handle the submitted data

            //if submiission is successfull...
            setMsg("We'll get back to you, soon!");
            setShowMsg(true);
            setSuccess(true);

            setTimeout(() => {
                setShowMsg(false);
            }, 6000);

            //handle the error from server
        }
    };

    return (
        <div className=" col-lg-3 col-md-3 col-12">
            <form className="contact__form d-flex flex-column">
                <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    type="text"
                />

                <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="text"
                />

                <input
                    id="phoneno"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone no"
                    type="text"
                />

                <textarea
                    className="textArea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    placeholder="Additonal message"
                    type="textarea"
                />

                {showMsg && (
                    <p className="ps-5" style={{ color: success ? "green" : "red" }}>
                        {msg}
                    </p>
                )}

                <button className="btn " onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
