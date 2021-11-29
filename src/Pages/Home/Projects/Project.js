import React from 'react';
import { Card } from 'react-bootstrap';
import './project.css'
import { GoPrimitiveDot } from 'react-icons/go';

const Project = ({ title, details, tech }) => {
    return (
        <Card style={{ background: "rgba(255, 255, 255, 0.1)" }} className="h-100 cardItem">
            <Card.Body className="cardBody" >
                <Card.Title className="text-uppercase">{title}</Card.Title>
                <hr className="w-25 mx-auto text-warning hr" />
                <div className="d-flex flex-wrap">
                    {
                        tech.map((item, index) => <li key={index} className="listItem me-1 list-unstyled"> <GoPrimitiveDot className="me-1" />{item} </li>)
                    }
                </div>
                <p className="mt-4 text-justify">
                    {details}
                </p>

            </Card.Body>
        </Card>
    );
};

export default Project;