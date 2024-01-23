import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import CompanyLocation from "./CompanyLocation";

function Contact() {
  const apiurl = process.env.REACT_APP_API_URL + "/contacts";

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

        setContact(json.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiurl]);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience__content">
              <Subtitle subtitle={"We are Serve here"}></Subtitle>
              <div className="mt-4">
                <div className="d-flex gap-2 align-items-center">
                  <FaLocationDot className="ml-5" />
                  <span className="">Address</span>
                </div>
                <h6 className="d-flex flex-row gap-2 mt-3">
                  <Row className="gap-2">
                    {contact?.map((cont) => (
                      <h6>
                        <small className="fs-6" key={cont.id}>
                          <small>{cont.attributes.addressLine1}</small>
                          <br />
                          <small>{cont.attributes.addressLine2}</small>
                          <br />
                          <small className="fw-bold">
                            {cont.attributes.city}
                          </small>
                          <br />
                          <br />
                          <small>Phone Number: </small>
                          <small>{cont.attributes.phoneNumber}</small>
                          <br />
                          <br />
                          <small>Email: </small>
                          <small>{cont.attributes.emailAddress}</small>
                          <hr />
                        </small>
                      </h6>
                    ))}
                  </Row>
                </h6>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <CompanyLocation />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
