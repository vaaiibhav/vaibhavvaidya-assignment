import React, { useState } from "react";
import { Container, Col, Row, Button, Modal } from "react-bootstrap";

const AddEditTrip = () => {
  const [addModalShow, setAddModalShow] = useState(false);
  const [updateModalShow, setUpdateModalShow] = useState(false);
  const [updateVariant, setUpdateVariant] = useState("");
  // Update Trip Modal Component
  const UpdateTripModalViewer = (props) => {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Trip
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
          <Container>
            <Row>
              <Col>
                <span style={{ color: "red" }}>* </span> Transporter
                <div>
                  <select type="text" placeholder="transporter">
                    <option value="Blue dart">Blue dart</option>
                    <option value="DTDC">DTDC</option>
                    <option value="Delhivery">Delhivery</option>
                    <option value="Merks">Merks</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <span style={{ color: "red" }}>* </span> Time
                <div>
                  <input type="text" placeholder="Time" />
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.onHide}>
            Cancel
          </Button>
          <Button onClick={props.onHide}>Update Status</Button>
        </Modal.Footer>
      </Modal>
    );
  };

  //Add Trip Modal Component
  const AddTripModalViewer = (props) => {
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
                <div>
                  <select type="text" placeholder="transporter">
                    <option value="Blue dart">Blue dart</option>
                    <option value="DTDC">DTDC</option>
                    <option value="Delhivery">Delhivery</option>
                    <option value="Merks">Merks</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <span style={{ color: "red" }}>* </span> Source
                <input type="text" placeholder="source" />
              </Col>
              <Col>
                <span style={{ color: "red" }}>* </span> Destination
                <input type="text" placeholder="destination" />
              </Col>
            </Row>
            <Row>
              <Col>
                <span style={{ color: "red" }}>* </span> Phone
                <input type="phone" placeholder="phone " />
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
          <Button
            variant=""
            onClick={() => {
              setUpdateModalShow(true);
            }}
            className="ml-2 mr-2 text-nowrap"
          >
            Update Status
          </Button>
          <Button
            onClick={() => {
              setAddModalShow(true);
            }}
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
      <AddTripModalViewer
        show={addModalShow}
        onHide={() => setAddModalShow(false)}
      />
      <UpdateTripModalViewer
        show={updateModalShow}
        onHide={() => setUpdateModalShow(false)}
      />
    </>
  );
};

export default AddEditTrip;
