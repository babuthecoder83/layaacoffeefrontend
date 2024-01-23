import React, { useEffect, useState } from "react";

import "./footer-css.css";
import { Container, Row, Col } from "reactstrap";

import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import Logo from "../../assets/img/header/logo.png";
import { Link } from "react-router-dom";

import { quick_links_menu, quick_links_footer } from "../../assets/data/Links";
import SocialLinks from "./SocialLinks";

function Footer() {
  const currentYear = new Date().getFullYear();
  const apiurl = process.env.REACT_APP_API_URL + "/contacts/1";

  const [contact, setContact] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_API_ACCESS_TOKEN,
      },
    };

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(apiurl, options);
        const json = await res.json();

        setContact(json.data.attributes);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiurl]);

  return (
    <footer className="footer" id="contact">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={Logo} alt="logo" />
              <p>
                Forgot yourself with the Dip your Lip to sip Our Layaa Coffee
                Cup
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <SocialLinks />
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discovery</h5>
            <ul className="footer__quick-links">
              {quick_links_menu.map((item, index) => (
                <li key={index} className="ps-0 border-0 mb-2">
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ul className="footer__quick-links">
              {quick_links_footer.map((item, index) => (
                <li key={index} className="ps-0 border-0 mb-2">
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg="3">
            <ul className="footer__quick-links">
              <li className="ps-0 border-0 mb-2">
                <h6 className="d-flex gap-2">
                  <FaLocationDot className="text-white ml-5" />
                  <span className="text-white">Address</span>
                </h6>
                <address>
                  <p className="mb-0 text-white">
                    <small>{contact.addressLine1}</small>
                    <br />
                    <small>{contact.addressLine2}</small>
                    <br />
                    <small>{contact.city}</small>
                    <br />
                    <small>{contact.phoneNumber}</small>
                  </p>
                </address>
              </li>
              <li className="ps-0 border-0 mb-2">
                <h6 className="d-flex gap-2">
                  <IoMdMail className="text-white ml-5" />
                  <span className="text-white">Email</span>
                </h6>
                <p className="mb-0 text-white">
                  <small>{contact.emailAddress}</small>
                </p>
              </li>
            </ul>
          </Col>
          <Col lg="12" className="text-center pt-5 text-white">
            <p className="copyright">
              &#169; {currentYear} Laayaa Coffee, All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
