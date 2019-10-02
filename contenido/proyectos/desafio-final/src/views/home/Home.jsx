import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home">
            <Container>
                <Row>
                    <Col>
                    <Link to="login">Iniciar Sesión</Link>
                    </Col>
                </Row>
            </Container>
       </div>
    );
};

export default Home;
