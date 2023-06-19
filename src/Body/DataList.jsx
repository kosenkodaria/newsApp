import Alert from "react-bootstrap/Alert";
import InfiniteScroll from "react-infinite-scroll-component";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DataCard from "./DataCard";


function DataList ({ info , dataList, page, setPage}){

    return( <>
        {info && <Alert variant="primary">{info}</Alert>}
  
        {dataList?.length && (
          <InfiniteScroll
            dataLength={dataList?.length}
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
              {dataList?.map((data, idx) => (
                <Col key={idx}>
                  <DataCard data={data} />
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        )}
  
        
      </>);
}

export default DataList;