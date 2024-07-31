import "./App.css";
import { Button, Container } from "react-bootstrap";

import Dashboard from "./Scenes/Dashboard";
import TopNavbar from "./Components/TopNavbar";
function App() {
  return (
    <Container fluid>
      <TopNavbar />
      <Dashboard />
    </Container>
  );
}

export default App;
