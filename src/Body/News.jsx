import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
import { getArticles } from "../services/apiService";
import ErrorModal from "../ErrorModal";

function News({newsList , setNewsList}) {
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getArticles()
      .then((data) => {
        setNewsList(data.articles.results);
      })
      .catch((error) => setErrorMessage(error.toString()));
  }, []);

  return (
    <>
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
