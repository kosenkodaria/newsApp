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
    {/* className="my-3" */}
    <nav className="subNav">
      <Button variant="dark" onClick={handleShow} className='search'>
        Search
      </Button>
      </nav>


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