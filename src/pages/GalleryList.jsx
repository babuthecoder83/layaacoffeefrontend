import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import CommonSection from "../shared/CommonSection";
import Subtitle from "./../shared/Subtitle";

import FactoryImg from "../assets/img/gallery/Factory1.jpg";
import CustomerImg from "../assets/img/gallery/Factory2.jpg";

import "./Gallery-css.css";

const serviceData = [
  {
    Img: FactoryImg,
    title: "Factory Image",
    link: "/gallery/factory",
  },
  {
    Img: CustomerImg,
    title: "Customer Image",
    link: "/gallery/customer",
  },
];

function GalleryList() {
  return (
    <>
      <CommonSection title={"Gallery"} />
      <section>
        <Container>
          <Subtitle subtitle={"Image Gallery"} />
          <Row>{/* <SearchBar title={'Categories'} /> */}</Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {serviceData.map((item, index) => (
              <Col lg="4" className="item-center" key={index}>
                <div className="tour__card">
                  <Card>
                    <div className="tour__img">
                      <img src={item.Img} alt="shop-img" />
                    </div>
                    <CardBody>
                      <div className="card__top d-flex align-items-center justify-content-between">
                        <span className="tour__location d-flex align-items-center gap-1">
                          {/** */}
                        </span>
                        <span className="tour__rating d-flex align-items-center gap-1">
                          {/** */}
                        </span>
                      </div>
                      <div className="card__top d-flex align-items-center justify-content-between">
                        <Link to={item.link}>
                          <h5 className="tour__title">{item.title}</h5>
                        </Link>
                      </div>
                      <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                        <h5>{/** */}</h5>
                        <button className="btn booking__btn">
                          <Link to={item.link}>More...</Link>
                        </button>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default GalleryList;
