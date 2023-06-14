import Card from "react-bootstrap/Card";
import NewsModal from "./NewsModal";
import { useState } from "react";
import moment from "moment";

function NewsCard({ news }) {

    const [ showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const noImageUrl = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';

  return (
    <>
    <Card onClick={() => setShowModal(true)}> 
      <Card.Img variant="top" src={news.image || noImageUrl} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>
          {news.authors.map((author, idx) => (
            <span key ={idx}>
                <b>Authors name: </b> {author.name} <br/>
            </span>
          ))}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{moment(news.dateTime).format("DD.MM.YYYY HH:mm:ss")}</small>
      </Card.Footer>
    </Card>
    {showModal && <NewsModal news = {news} handleClose={handleClose}/>}

    </>
  );
}
export default NewsCard;
