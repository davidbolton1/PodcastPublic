import React from "react";

const Footer = (props) => {
  const { config } = props;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }

  return (
    <footer className="footer">
      <p>Made with <span role="img" aria-label="heart" className="mr-1">💛</span>Gatsby. </p>
    </footer>
  )
}

export default Footer;
