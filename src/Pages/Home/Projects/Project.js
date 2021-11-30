import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './project.css'
import { GoPrimitiveDot } from 'react-icons/go';
import { useNavigate } from 'react-router';


const Project = ({ projectId, title, details, tech, links, credentials, images }) => {
    const navigate = useNavigate()
    const handleProjectDetails = () => {
        navigate(`/projects/${projectId}`)
    }
    const styleCursor = {
        cursor: "pointer"
    }
    const unstyleCursor = {
        cursor: "auto"
    }
    console.log(images);
    return (
        <Col xs={12} md={6} className="pb-4 ">
            <Card className="h-100 card-hover" style={images?.length > 0 ? styleCursor : unstyleCursor} onClick={images?.length > 0 ? () => handleProjectDetails(projectId) : console.log('no description found')}>
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
                            className="btn-2 border-dark me-2 mb-2">
                            <Card.Link
                                className="text-decoration-none"
                                href={link.url}
                                target="_blank"
                            >
                                {link.link}
                            </Card.Link>
                        </Button>)
                    }
                </Card.Body>

            </Card>
        </Col >
    );
};

export default Project;