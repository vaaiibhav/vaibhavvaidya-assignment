import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
const StatsContainer = (props) => {
  return (
    <Container className="h-5 mt-4" fluid>
      <Row>
        <Col md={8} style={{ alignContent: "space-between" }}>
          <Row>
            <Col md={6}>
              <div>Total Trips</div>
              <div className="mt-2">
                <h4>{props.totaltrips}</h4>
              </div>
            </Col>
            <Col md={2}>
              <div>Delivered</div>
              <div className="mt-2">
                <h4 className="text-">{props.deliveredStatus}</h4>
              </div>
            </Col>
            <Col md={2}>
              <div className="d-flex justify-content-center">
                <Progress
                  type="circle"
                  theme={{
                    active: {
                      color: "rgb(46, 204, 113)",
                    },
                  }}
                  width={60}
                  percent={80}
                />
              </div>
              <div>
                Ontime: <span style={{ color: "blue" }}>1,23,456</span>
              </div>
            </Col>
            <Col md={2}>
              <div className="text-danger">
                <h6>Delayed</h6>
              </div>
              <div className="mt-3">
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
              <div className="mt-2">
                <h6>{props.inTransitStatus}</h6>
              </div>
            </Col>
            <Col>
              <div>Delivered</div>
              <div className="mt-2">
                <h6 className="align-text-bottom">{props.deliveredStatus}</h6>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default StatsContainer;
