import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NewsCard from './NewsCard';
import { getArticles } from '../services/apiService';

function News() {

    const defaultData = {
        keyword: null,
        articlesSortBy: "date",
        dataType: ["news"],
        dateStart: "2023-05-01",
        dateEnd: "2023-06-06",
        lang: ['eng'],
        resultType: "articles"
      };
     
      getArticles(defaultData).then(x => console.log(x))




    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>   
                <NewsCard />
                </Col>
            ))}
        </Row>
    );
}

export default News;