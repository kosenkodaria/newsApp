import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container className="header">
          <Link to="/newsApp" className="navbar-brand">
            News
          </Link>
          <Nav className="me-auto">
            <Link to="/newsApp/events" className="nav-link">
              Events
            </Link>
            <Link to="/newsApp/events/Barak Obama" className="nav-link">
              Barak Obama Events
            </Link>
            <Link to="/newsApp/events/Elon Musk" className="nav-link">
              Elon Musk Events
            </Link>
            <Link to="/newsApp/Barak Obama" className="nav-link">
              Barak Obama News
            </Link>
          </Nav>
          <img src="menu_icon.svg" alt="menu-icon" className="menu-icon" />
        </Container>
      </Navbar>
  );
}

export default Header;
