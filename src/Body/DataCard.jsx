import Card from "react-bootstrap/Card";
import DataModal from "./DataModal";
import { useState } from "react";
import moment from "moment";

function DataCard({ data }) {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const noImageUrl =
    "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";

  const title = data.title;

  const viewData = {
    image: data.image || noImageUrl,
    title: typeof title === "string" ? title : title[Object.keys(title)[0]],
    text: data.authors
      ? data.authors.map((author, idx) => (
          <span key={idx}>
            <b>Authors name: </b> {author.name} <br />
          </span>
        ))
      : data.summary[Object.keys(data.summary)[0]],
    footer: moment(data.dateTime || data.eventDate).format("DD.MM.YYYY"),
  };

  return (
    <>
      <Card onClick={() => setShowModal(true)}>
        <Card.Img variant="top" src={viewData.image || noImageUrl} />
        <Card.Body>
          <Card.Title>{viewData.title}</Card.Title>
          <Card.Text>{viewData.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{viewData.footer}</small>
        </Card.Footer>
      </Card>
      {showModal && <DataModal data={data} handleClose={handleClose} />}
    </>
  );
}
export default DataCard;
