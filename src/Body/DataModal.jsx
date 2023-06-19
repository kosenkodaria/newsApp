import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import moment from "moment";

const TitleNews = ({ dateTimePub }) => (
  <>Published: {moment(dateTimePub).format("DD.MM.YYYY  HH:mm:ss")}</>
);
const TitleEvents = ({ eventDate, eventDateEnd }) => (
  <>
    {" "}
    Start date: {moment(eventDate).format("DD.MM.YYYY")}
    End date:{moment(eventDateEnd).format("DD.MM.YYYY")}
  </>
);
const BodyNews = ({ title, image, body, source, url}) => {
  <>
    {" "}
    <h4>{title}</h4>
    <p>
      <Image src={image} fluid />
      {body}
    </p>
    <div>
      Source:{" "}
      <a href={url} target="_blank" rel="noreferrer">
        {source.title}
      </a>
    </div>
  </>;
};

const BodyEvent =({ summary}) => <>{summary[Object.keys(summary)[0]]}</>

function DataModal({ handleClose, data }) {
  const ViewData = {
    Title: data.dateTimePub ? TitleNews : TitleEvents,
    Body: data.image ? BodyNews : BodyEvent,
  };
  return (
    <Modal show size="lg" centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <ViewData.Title {...data} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ViewData.Body {...data} />
        </Modal.Body>
    </Modal>
  );
}

export default DataModal;
