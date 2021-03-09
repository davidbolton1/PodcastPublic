import React from "react";
import { Link } from "gatsby";
import MainLogo from "../../static/logos/logo.png";
import {ReactComponent as PodcastGithub} from "../assets/podcastGithub.svg";
import {ReactComponent as PodcastSpotify} from "../assets/podcastSpotify.svg";
// import {ReactComponent as PodcastRss} from "../assets/podcastRss.svg";
import {ReactComponent as PodcastTwitter} from "../assets/podcastTwitter.svg";

import Pocketcasts from "../assets/pocketcasts.png"
import Itunes from "../assets/itunes.png"
import Rss from "../assets/rss.svg";

const PodcastLinks = (props) => {
  return (
    <div className="follow-us">
      <a className="btn-social btn-spotify" target="_blank" rel="noreferrer" href="https://open.spotify.com/user/5wx7y10hoyq54dxqqtm4igo6b?si=zWAsYV7OQz27F8kwHMoIRQ">
        <PodcastSpotify/>
        <span>Spotify</span>
      </a>
      {/* (If I decide to put it on ITunes/Rss)
      
      <a className="btn-social btn-itunes" target="_blank" rel="noreferrer" href="https://gitub.com/davidbolton1">
        <img alt="itunes" src={Itunes}/>
        <span>Itunes</span>
      </a> */}
      
      <a className="btn-social btn-twitter" target="_blank" rel="noreferrer" href="https://twitter.com/DavidBolton23">
        <PodcastTwitter/>
        <span>Twitter</span>
      </a>
    </div>
  )
}

export default PodcastLinks