import { Button, CloseButton } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// import CloseButton from 'react-bootstrap/CloseButton';
import { useState } from 'react';


function SearchForm (){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(true);

    return(
        <>
        <Form className="d-flex">
        <button className='btn-close' show={show} onClick={handleClose}></button>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant='outline-success'>Search</Button>
        </Form>
        </>
        )
}

export default SearchForm; 