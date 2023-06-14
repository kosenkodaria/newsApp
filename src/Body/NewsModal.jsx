import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';

function NewsModal({handleClose, news}) {
    return (
      <Modal
        show 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Published: {moment(news.dateTimePub).format("DD.MM.YYYY  HH:mm:ss")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{news.title}</h4>
          <p>
          <Image src={news.image} fluid />
           {news.body}
          </p>
          <div>Source:{" "} 
          <a href={news.url} target="_blank" rel="noreferrer">
            {news.source.title}
            </a>
            </div>
        </Modal.Body>
      </Modal>
    );
  }

  export default NewsModal;
  