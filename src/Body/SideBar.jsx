import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchForm from './SearchForm';
import { defaultData } from '../services/apiService';



function SideBar() {

  const [show, setShow] = useState(false);
  const [submittedData, setSubmittedData] = useState(defaultData);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRestore = () => setSubmittedData(defaultData);

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
        <SearchForm  closeSideBar= {handleClose}
         submittedData={submittedData}
          setSubmittedData={setSubmittedData} 
          handleRestore={handleRestore}
          />
        </Offcanvas.Body>

      </Offcanvas>
    </>
  );
}

export default SideBar;