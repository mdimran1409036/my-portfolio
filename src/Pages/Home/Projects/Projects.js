import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Project from './Project';

const Projects = () => {
    return (
        <div id='projects' className="pt-5">
            <div className="pt-2 pb-4">
                <h2 className="heading text-light">
                    Projects
                </h2>
            </div>
            <Container className="mt-5">

                <Row>
                    <Col xs={12} md={4}>
                        <Project
                            title="Chip autocomplete"
                            tech={['React', 'Node', 'MongoDB', 'Bootstrap']}
                            details="An npm package built on Angular and angular material where chips can be managed with reactive form and handle filtering for both client side and server side"

                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <Project
                            title="Chip autocomplete"
                            tech={['React', 'Node', 'MongoDB', 'Bootstrap']}
                            details="An npm package built on Angular and angular material where chips can be managed with reactive form and handle filtering for both client side and server side"
                        ></Project>
                    </Col>
                    <Col xs={12} md={4}>
                        <Project
                            title="Chip autocomplete"
                            tech={['React', 'Node', 'MongoDB', 'Bootstrap']}
                            details="An npm package built on Angular and angular material where chips can be managed with reactive form and handle filtering for both client side and server side"></Project>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;