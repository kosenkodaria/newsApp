import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ErrorModal({ handleClose, errorMessage }) {
    return(
  <Modal show={!!errorMessage} onHide={handleClose} backdrop="static" keyboard={false}>
    {/* <Modal.Header closeButton> */}
    <Modal.Header >
      <Modal.Title>Error</Modal.Title>
    </Modal.Header>
    <Modal.Body>{errorMessage}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  );
}

export default ErrorModal;
