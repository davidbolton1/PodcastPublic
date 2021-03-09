import React, {useEffect, useState} from "react";
import { Link } from "gatsby";
import MainLogo from "../../static/logos/logo.png";
import {ReactComponent as PodcastGithub} from "../assets/podcastGithub.svg";
import {ReactComponent as PodcastSpotify} from "../assets/podcastSpotify.svg";
import {ReactComponent as PodcastRss} from "../assets/podcastRss.svg";
import {ReactComponent as PodcastTwitter} from "../assets/podcastTwitter.svg";


const Navbar = (props) => {

    return (
      <>
      <section className="cc-container">
        <div className="cc-logo-hero">
          <Link to={'/'}>
            <img className="main-logo" alt="Db Dev Logo" src={MainLogo}/>
          </Link>
        </div>
        <div className="cc-hero-description text-center">
          <p className="my-0 color-offgray">A blog to share what I've been working on lately.</p>
        </div>
        <div className="social-links-wrapper">
          <div className="social-links">
            <a className="podcast-links" target="_blank" rel="noreferrer" href="https://twitter.com/davidbolton23" title="Twitter">
              <PodcastTwitter/>
            </a>
            <a className="podcast-links" target="_blank" rel="noreferrer" href="https://github.com/davidbolton1" title="Github">
              <PodcastGithub/>
            </a>
            <a className="podcast-links" target="_blank" rel="noreferrer" href="https://open.spotify.com/user/5wx7y10hoyq54dxqqtm4igo6b?si=PLa-14sMTSy9snmEUZCuAQ" title="Spotify">
              <PodcastSpotify/>
            </a>
          </div>
        </div>
  
        <nav className="cc-navbar">
          <div className="cc-navitem">
            <Link to="/" 
              activeClassName="active-link"
              // partiallyActive={pathname !== "/about/" && pathname !== "/about" && pathname && "/support/" && pathname !=="/support/" ? true: false}
            >
              Posts
            </Link>
          </div>
          <div className="cc-navitem">
            <Link to="/about/" activeClassName="active-link">About</Link>
          </div>
          {/* <div className="cc-navitem support-icon">
            <Link to="/support/" activeClassName="active-link">Support</Link>
          </div> */}
        </nav>
     
      </section>
      </>
    );
  
}

export default Navbar;
