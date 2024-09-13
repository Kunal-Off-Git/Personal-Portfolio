import { IoNewspaperOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-md-6 footer-left">
            <h3>Thanks for visiting my Portfolio</h3>
            <p>You can access my resume here</p>
            <a href="">
              <span>
                Resume <IoNewspaperOutline />
              </span>
            </a>
          </div>
          <div className="col-md-6 footer-right">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h3>
                    <span className="hglgt"> Quick Links</span>
                  </h3>
                  <ul>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Skills</a>
                    </li>
                    <li>
                      <a href="">Projects</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <h3>
                    <span className="hglgt">Socials</span>{" "}
                  </h3>
                  <ul>
                    <li>
                      <a href="">
                        <span>
                          <FaLinkedinIn />
                        </span>
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span>
                          <FaGithub />
                        </span>
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span>
                          <SiGmail />
                        </span>
                        GMail
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <FaRegCopyright />
        Copyright 2024. All Rights Reserved
      </footer>
    </div>
  );
};

export default Footer;
