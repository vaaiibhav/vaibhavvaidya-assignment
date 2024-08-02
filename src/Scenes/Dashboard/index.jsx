import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button, Modal } from "react-bootstrap";
import StatsContainer from "./StatsContainer";
import AddEditTrip from "./AddEditTrip";
import DataTable from "react-data-table-component";
import { data } from "../../../frontendAssignment.json";

const index = () => {
  const [dataPending, setDataPending] = useState(true);
  const [selectedRow, setSelectedRow] = useState({});
  const [deliveredStatusCount, setDeliveredStatusCount] = useState(0);
  const [inTransitStatusCount, setInTransitStatusCount] = useState(0);

  useEffect(() => {
    setDataPending(false);
    const deliveredStatus = data.filter(
      (item) => item.currentStatusCode === "DEL"
    ).length;
    setDeliveredStatusCount(deliveredStatus);
    const inTransitStatus = data.filter(
      (item) => item.currentStatusCode === "INT"
    ).length;
    setInTransitStatusCount(inTransitStatus);
  }, []);

  const columns = [
    {
      name: "Trip id",
      selector: (row) => row.tripId,
      style: {
        color: "blue",
      },
    },
    {
      name: "Transporter",
      selector: (row) => row.transporter,
    },
    {
      name: "Source",
      selector: (row) => row.source,
      sortable: true,
    },
    {
      name: "Destination",
      selector: (row) => row.dest,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phoneNumber,
      sortable: true,
    },
    {
      name: "ETA",
      selector: (row) => row.etaDays,
      sortable: true,
    },
    {
      name: "Distance Remaining",
      selector: (row) => row.distanceRemaining,
      sortable: true,
    },
    {
      name: "Trip Status",
      selector: (row) => row.currenStatus,
      sortable: true,
      style: {
        color: (row) => (row.currentStatusCode === "BKD" ? "orange" : "blue"),
      },
    },
    {
      name: "TAT Status",
      selector: (row) => row.currentStatus,
      sortable: true,
    },
  ];
  const handleSelected = ({ selectedRows }) => {
    // You can set state or dispatch with something like Redux so we can use the retrieved data
    setSelectedRow(selectedRows[0]);
  };

  return (
    <Container fluid>
      <StatsContainer
        totaltrips={data.length}
        deliveredStatus={deliveredStatusCount}
        inTransitStatus={inTransitStatusCount}
      />
      <AddEditTrip />
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        progressPending={dataPending}
        onSelectedRowsChange={handleSelected}
      />
    </Container>
  );
};

export default index;
