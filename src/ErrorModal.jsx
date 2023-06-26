import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { setErrorMessage } from "./services/stateService";
import { useSelector, useDispatch } from "react-redux";


function ErrorModal() {
  const errorMessage = useSelector((state) => state.errorMessage);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setErrorMessage(null));
  return (
    <Modal
      show={!!errorMessage}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      {/* <Modal.Header closeButton> */}
      <Modal.Header>
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
