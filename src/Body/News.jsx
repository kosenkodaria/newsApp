import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NewsCard from './NewsCard';
import { useEffect, useState } from 'react';
import { getArticles } from '../services/apiService';


function News() {

    const [newsList,setNewsList] = useState (null);

    useEffect(() => {
        getArticles().then(data => {
            setNewsList(data.articles.results);
        });
    },[]);

    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {newsList?.map((news, idx) => (
                <Col key={idx}>   
                <NewsCard news={news} />
                </Col>
            ))}
        </Row>
    );
}

export default News;