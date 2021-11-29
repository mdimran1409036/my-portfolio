import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './project.css'
import { GoPrimitiveDot } from 'react-icons/go';


const Project = ({ title, details, tech, links, credentials }) => {
    return (
        <Col xs={12} md={6} className="pb-4 ">
            <Card className="h-100 card-hover">
                <Card.Body>
                    <Card.Title className="title p-2 w-75 mx-auto text-uppercase">{title}</Card.Title>
                    <div className=" w-25 mx-auto hr" style={{ height: "2px" }}></div>
                    <div className="d-flex flex-wrap justify-content-center my-2">
                        {
                            tech.map(
                                (item, index) => <li
                                    key={index}
                                    className="listItem me-1 list-unstyled"
                                >
                                    <GoPrimitiveDot className="me-1" />{item}
                                </li>)
                        }
                    </div>
                    <Card.Text className="details">
                        {details}
                    </Card.Text>
                    {
                        credentials && <div className="d-flex justify-content-start">
                            <li className="list-unstyled me-4">{credentials?.email}</li>
                            <li className="list-unstyled"> password: {credentials?.password}</li>
                        </div>
                    }
                </Card.Body>
                <Card.Body>
                    {
                        links.map(link => <Button
                            className="bg-light border-dark me-2 mb-2">
                            <Card.Link
                                className="text-decoration-none text-dark"
                                href={link.url}
                                target="_blank"
                            >
                                {link.link}
                            </Card.Link>
                        </Button>)
                    }
                </Card.Body>
            </Card>
        </Col>
        // <Card style={{ background: "rgba(255, 255, 255, 0.1)" }} className="h-100 cardItem">
        //     <Card.Body className="cardBody" >
        //         <Card.Title className="text-uppercase">{title}</Card.Title>
        //         <hr className="w-25 mx-auto text-warning hr" />
        //         <div className="d-flex flex-wrap">
        //             {
        //                 tech.map((item, index) => <li key={index} className="listItem me-1 list-unstyled"> <GoPrimitiveDot className="me-1" />{item} </li>)
        //             }
        //         </div>
        //         <p className="mt-4 text-justify">
        //             {details}
        //         </p>

        //     </Card.Body>
        // </Card>
    );
};

export default Project;