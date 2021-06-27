import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Form, Row, Col, Card} from 'react-bootstrap';

function ImageCard(props) {
  return (
    <Col md={4} sm={6} xs={6} className={"image-card"}>
        <Card style={{ width: '100%' }} className={"shadow"}>
        <Card.Img variant="top" src={props.photo.thumbnailUrl} />
        <Card.Body>
            <Card.Title>{props.photo.title}</Card.Title>
        </Card.Body>
        </Card>

    </Col>
  );
}

export default ImageCard;
