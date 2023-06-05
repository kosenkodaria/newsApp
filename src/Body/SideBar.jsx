import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchForm from './SearchForm';



function SideBar() {
 

  const [show, setShow] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="my-3">
        Search
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search</Offcanvas.Title>
        </Offcanvas.Header>

      
        <Offcanvas.Body>
        <SearchForm  closeSideBar= {handleClose} submittedData={submittedData} setSubmittedData={setSubmittedData} />
        </Offcanvas.Body>

      </Offcanvas>
    </>
  );
}

export default SideBar;