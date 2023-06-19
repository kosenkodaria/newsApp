import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { getEvents } from "../services/apiService";
import ErrorModal from "../ErrorModal";
import Alert from "react-bootstrap/Alert";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import EventsCard from "./EventsCard";

function Events({ eventsList, setEventsList, info, setInfo }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [page, setPage] = useState(1);
  const params = useParams();
  const { keyword } = useParams();

  useEffect(() => {
    getEvents({
        resultType: 'events',
      articlesPage: page,
      ...(keyword ? { keyword } : {}),
    })
      .then(({ events, info }) => {
        events && setEventsList([...(eventsList || []), ...events.results]);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => setErrorMessage(error.toString()));
  }, [setEventsList, setInfo, page, keyword]);

  return( 
    <>
  <>Events List {params?.keyword}</>
  {info && <Alert variant="primary">{info}</Alert>}

      {eventsList?.length && (
        <InfiniteScroll
          dataLength={eventsList?.length}
          next={() => setPage(page + 1)}
          hasMore
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          scrollThreshold={1}
        >
          <Row xs={1} md={2} lg={3} className="g-4">
            {eventsList?.map((events, idx) => (
              <Col key={idx}>
                <EventsCard events={events} />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      )}
  <ErrorModal
        errorMessage={errorMessage}
        handleClose={() => setErrorMessage(null)}
      />
  </>
  );
}
export default Events;
