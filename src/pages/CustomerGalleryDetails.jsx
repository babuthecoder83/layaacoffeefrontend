import React from "react";
import { Container } from "reactstrap";
import Mansory, { ResponsiveMasonry } from "react-responsive-masonry";

import CommonSection from "../shared/CommonSection";
import Subtitle from "./../shared/Subtitle";

import customerGalleryImages from "../assets/data/CustomerGallary";

function CustomerGalleryDetails() {
  return (
    <>
      <CommonSection title={"Gallery"} />
      <section>
        <Container>
          <Subtitle subtitle={"Customer Gallery"} />
        </Container>
      </section>
      <Container>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
          <Mansory gutter="1rem">
            {customerGalleryImages.map((item, index) => (
              <img
                className="masonry__img"
                src={item}
                alt="gallery"
                key={index}
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: "10px",
                }}
              />
            ))}
          </Mansory>
        </ResponsiveMasonry>
      </Container>
    </>
  );
}

export default CustomerGalleryDetails;
