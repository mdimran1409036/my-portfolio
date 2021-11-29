import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Skill = ({ title, language }) => {
    return (
        <Row className="text-light">
            <Col xs={12} md={2}>
                <h2 className="text-start">{title}</h2>
            </Col>
            <Col xs={12} md={10} className="d-flex justify-content-between">
                {
                    language.map(item => {
                        return (
                            <div className="d-flex flex-column">
                                <img src={item.img} width="80" alt={item.name} />
                                <h4>{item.name}</h4>
                            </div>
                        )
                    })
                }


            </Col>
        </Row>
    );
};

export default Skill;