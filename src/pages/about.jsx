import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import dbImg from "../../static/logos/profile.png";
import socialTwitter from "../assets/social-twitter.svg";
import socialGlobe from "../assets/social-globe.svg";
import socialGithub from "../assets/social-github-lightblue.svg";

const AboutPage = () => {
  return (
    <Layout>
      <section className="about-container cc-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <div className="cc-header cc-card">
          <div className="cc-padding cc-intro">
            <h3 className="color-offgray mt-0">Welcome to David's Podcast</h3>
            <p className="my-0">Thanks for stopping by, I plan to discuss:</p>
            <ul>
              <li>JavaScript + Various Frameworks </li>
              <li>Aug/Virtual Reality News</li>
              <li>......and Food!</li>
            </ul>
          </div>
          <div className="cc-portraits">
            <div className="cc-padding cc-portrait">
              <div className="header">
              </div> 
              <div className="img-wrapper">
                <img className="img-portait" src={dbImg} alt="David Bolton"/>
              </div>
              <div className="desc-wrapper">
              <div className="personal-links">
                  <a href="https://twitter.com/davidbolton23">
                    <img src={socialTwitter} alt="social twitter"/>
                  </a>
                  <a href="https://github.com/davidbolton1">
                    <img src={socialGithub} alt="social github"/>
                  </a>
                  <a href="www.davidboltondev.com">
                    <img src={socialGlobe} alt="social globe"/>
                  </a>
                </div>
                <div className="description">David Bolton is a full-stack developer residing in Atlanta, Georgia. He enjoys playing tennis and reading post-Republican era history when not learning new technologies.</div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
