import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import TopNavbar from "../../Components/TopNavbar";
const index = () => {
  const TripStats = () => {
    return (
      <Container className="h-5" style={{ background: "yellow" }}>
        <Row>
          <Col md={8} style={{ alignContent: "space-between" }}>
            <Row>
              <Col md={6}>
                <div>Total Trips</div>
                <div>
                  <h4> 18033</h4>
                </div>
              </Col>
              <Col md={2}>
                <div>Delivered</div>
                <div>
                  <h4 className="text-"> 18033</h4>
                </div>
              </Col>
              <Col md={2}>Donut</Col>
              <Col md={2}>
                <div className="text-danger"> Delayed</div>
                <div>
                  <h6> 18033</h6>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            md={4}
            style={{
              borderLeft: "1px solid red",
              alignContent: "space-between",
            }}
          >
            <Row>
              <Col>
                <div>In Transit</div>
                <div>
                  <h6> 18033</h6>
                </div>
              </Col>
              <Col>
                <div>Delivered</div>
                <div>
                  <h6 className="align-text-bottom"> 18033</h6>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  };
  return (
    <Container>
      <TripStats />
    </Container>
  );
};

export default index;
