import React from "react";
import "../contact/contact-styles.css";
import Header from "@/components/Header";

export default function Contact() {
  return (
    <div className="Contact">
      <Header />
      <div className="contact-div">
        <div className="contact-div1">
          <img src="toyo.png" alt="" />
        </div>
        <div className="contact-div2">
          <h1>
            Send a <br /> Message
          </h1>
          <p>
            Songwriter. She Ministers both with the Pure Streams <br /> and as
            an independent artist with Glory Music.
          </p>
          <div className="contact-social">
            <img src="facebook.png" alt="" />
            <img src="twitter.png" alt="" />
            <img src="instagram.png" alt="" />
          </div>
          <div className="contact-form">
            <input className="input1" type="email" placeholder="Email" />
            <input className="input2" type="text" placeholder="Full Name" />
            <textarea
              name=""
              className="input3"
              cols={30}
              rows={10}
              placeholder="Message"
            ></textarea>
          </div>
          <div className="contact-button">Send</div>
        </div>
      </div>
    </div>
  );
}
