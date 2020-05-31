import React from "react";

const Footer = props => (
  <div className="footer">
    <ul className="bg-dark text-white-50 text-center list">
      {props.hotelInfos.map((info, index) => (
        <li key={index}>{info}</li>
      ))}
    </ul>
  </div>
);

export default Footer;