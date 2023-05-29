import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NewsCard from './NewsCard';

function News() {
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