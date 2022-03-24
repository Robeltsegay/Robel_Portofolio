import { useContext, useRef, useState } from "react";
import "./Contact.css";
import Phone from "./img/phone.png";
import Email from "./img/email.png";
import Address from "./img/address.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "./context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  //   const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_utpob6q",
        "template_j5za17g",
        formRef.current,
        "gm9tymCWLfuN8CTG0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact component__space" id="Contact">
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Lets talk about your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +251963557315
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" />
                robeltsegay1212@gmail.com
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Address} alt="" />
                Addis Ababa,Ethiopia
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>Hello! what is in your mind?</b> Feel free to email me.i will
              Check your request as soon as possible.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                //   style={{ backgroundColor: "red" }}
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                //   style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="subject"
                name="user_subject"
              />
              <input
                //   style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                //   style={{ backgroundColor: darkMode && "#333" }}
                rows="5"
                placeholder="Message"
                name="message"
              />
              <button>Submit</button>
              {done && <h6 style={{ color: "green" }}>Massage Sent.</h6>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
