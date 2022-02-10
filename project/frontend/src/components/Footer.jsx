import React from "react";

const Footer = () => {
  return (
    <div className="footer text-center">
      <h3 className="footer-text">
        &copy;All Rights Reserved{new Date().getFullYear()}
      </h3>
    </div>
  );
};

export default Footer;
