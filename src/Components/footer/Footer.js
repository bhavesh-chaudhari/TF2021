import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "./assets/arrow.svg";
import { ReactComponent as Square } from "./assets/square.svg";
import { ReactComponent as FacebookIcon } from "./assets/social/facebook.svg";
import { ReactComponent as InstagramIcon } from "./assets/social/instagram.svg";
import { ReactComponent as LinkedInIcon } from "./assets/social/linkedin.svg";
import { ReactComponent as DiscordIcon} from "./assets/social/discord.svg"
import { ReactComponent as YoutubeIcon} from "./assets/social/youtube.svg"
import SkillLync from "./assets/sponsors/skillync-icon.png"
import Dtoc from "./assets/sponsors/d2c-icon.png"
import Mentro from "./assets/sponsors/mentro-icon.png"
import Gfg from "./assets/sponsors/gfg-icon.png"
import MadeEasy from "./assets/sponsors/madeasy-icon.png"

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="query-follow">
          <div className="query">
            <h2>For Queries Contact</h2>
            <a href="">
              <p>
                Event Co-ordinators <Arrow></Arrow>{" "}
              </p>
            </a>
            <a href="mailto:tantrahelp@iiitn.ac.in">
              <p>tantrahelp@iiitn.ac.in</p>
            </a>
          </div>
          <div className="follow">
            <h2>Follow us on</h2>
            <div className="icons">
              <a
                href=" https://www.instagram.com/tantrafiesta/"
                target="_blank"
              >
                <InstagramIcon></InstagramIcon>
              </a>
              <a
                href="https://business.facebook.com/iiitntantra/"
                target="_blank"
              >
                <FacebookIcon></FacebookIcon>
              </a>
              <a
                href="https://www.linkedin.com/in/tantrafiesta-iiit-nagpur-53578b222/"
                target="_blank"
              >
                <LinkedInIcon></LinkedInIcon>
              </a>
              <a href="https://discord.gg/4zWEYA5VZv" target="_blank">
                <DiscordIcon></DiscordIcon>
              </a>
              <a href="https://www.youtube.com/channel/UC7xty40bNXvYPw_nrOQPB1Q/featured" target="_blank">
                <YoutubeIcon></YoutubeIcon>
              </a>
            </div>
            <p>Connect with us here</p>
          </div>
        </div>
        <div className="sponsors">
          <div className="main-sponsors">
            <h2>Our Sponsors</h2>
            <div className="square">
              <a href="https://skill-lync.com/"  target="_blank"><img src={SkillLync} alt="SkillLync" className="skillLync"/></a>
              <a href="https://dare2compete.com/" target="_blank"><img src={Dtoc} alt="D2C" /></a>
            </div>
          </div>
          <div className="co-sponsors">
            <h2>Our Co-Sponsors</h2>
            <div className="square">
              <a href="https://www.geeksforgeeks.org/" target="_blank"><img src={Gfg} alt="GFG" /></a>
              <a href="https://mentro.tech/" target="_blank"><img src={Mentro} alt="Mentro" /></a>
              <a href="https://www.madeeasy.in/" target="_blank"><img src={MadeEasy} alt="MadeEasy" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
