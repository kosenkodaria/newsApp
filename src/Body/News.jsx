import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";
import { getArticles } from "../services/apiService";
import ErrorModal from "../ErrorModal";
import Alert from "react-bootstrap/Alert";
import InfiniteScroll from 'react-infinite-scroll-component';


function News({ newsList, setNewsList, info , setInfo }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [page, setPage] = useState(1);
 

  useEffect(() => {
    getArticles({ articlesPage: page })
    .then(( { articles, info }) => {
      articles &&  setNewsList([...(newsList || []), ...articles.results]);
      info ? setInfo(info) : setInfo(null);
    })
      // .then((data) => {
      //   setNewsList(data.articles.results);
      //   if (data.info) {
      //     setInfo(data.info);
      //   }
      // })
      .catch((error) => setErrorMessage(error.toString()));
  }, [setNewsList , setInfo , page]);

  
  return (
    <>
      {info && (
        <Alert variant="primary">
          {info}
        </Alert>
      )}
   
      {newsList?.length && (
      <InfiniteScroll 
      dataLength={newsList?.length}
      next={() => setPage(page + 1)}
      hasMore
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
      scrollThreshold={1}
      >
         <Row xs={1} md={2} lg={3} className="g-4">
        {newsList?.map((news, idx) => (
          <Col key={idx}>
            <NewsCard news={news} />
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

export default News;
