import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
import { getArticles } from "../services/apiService";
import ErrorModal from "../ErrorModal";
import Alert from "react-bootstrap/Alert";

function News({ newsList, setNewsList, info , setInfo }) {
  const [errorMessage, setErrorMessage] = useState(null);
 

  useEffect(() => {
    getArticles()
    .then(( { articles, info }) => {
      articles &&  setNewsList(articles.results);
      info ? setInfo(info) : setInfo(null);
    })
      // .then((data) => {
      //   setNewsList(data.articles.results);
      //   if (data.info) {
      //     setInfo(data.info);
      //   }
      // })
      .catch((error) => setErrorMessage(error.toString()));
  }, [setNewsList , setInfo]);

  return (
    <>
      {info && (
        <Alert variant="primary">
          {info}
        </Alert>
      )}
      <Row xs={1} md={2} lg={3} className="g-4">
        {newsList?.map((news, idx) => (
          <Col key={idx}>
            <NewsCard news={news} />
          </Col>
        ))}
      </Row>
      <ErrorModal
        errorMessage={errorMessage}
        handleClose={() => setErrorMessage(null)}
      />
    </>
  );
}

export default News;
