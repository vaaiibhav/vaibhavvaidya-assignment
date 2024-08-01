import React, { useState } from "react";
import { Container, Col, Row, Button, Modal } from "react-bootstrap";

const AddEditTrip = () => {
  const [modalShow, setModalShow] = useState(false);

  const ModalViewer = (props) => {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Container>
            <Row>
              <Col>
                <span style={{ color: "red" }}>* </span> Trip ID
                <input type="text" placeholder="trip id" />
              </Col>
              <Col>
                <span style={{ color: "red" }}>* </span> Transporter
                <input type="text" placeholder="trip id" />
              </Col>
            </Row>
            <Row>
              <Col>
                <span style={{ color: "red" }}>* </span> Source
                <input type="text" placeholder="trip id" />
              </Col>
              <Col>
                <span style={{ color: "red" }}>* </span> Destination
                <input type="text" placeholder="trip id" />
              </Col>
            </Row>
            <Row>
              <Col>
                <span style={{ color: "red" }}>* </span> Phone
                <input type="phone" placeholder="trip id" />
              </Col>
              <Col> </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.onHide}>
            Close
          </Button>
          <Button onClick={props.onHide}>Add Trip</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  const AddTripContainer = () => {
    return (
      <div className="d-flex justify-content-between m-3">
        <div className="d-flex align-items-center">
          <h6>Trip List</h6>
        </div>
        <div className="d-flex align-items-center">
          <Button variant="">Update Status</Button>
          <Button
            onClick={() => setModalShow(true)}
            className="ml-2 mr-2 text-nowrap"
          >
            Add Trip
          </Button>
        </div>
      </div>
    );
  };
  return (
    <>
      <AddTripContainer />
      <ModalViewer show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default AddEditTrip;
