import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import PodcastLinks from "../components/PodcastLinks";

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-container cc-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <div className="cc-card">
          <div className="cc-padding cc-support">
            <h3 className="color-offgray mt-0">Thanks for tuning in!</h3>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* <br/>
            <br/> */}
            {/* <br/> */}
            <div className="follow-us-wrapper">
              <hr/>
              <h2>Follow me!</h2>
              <PodcastLinks/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;