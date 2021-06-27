import React, { useState } from 'react';
// import logo from './logo.svg';
import loader from './loader.gif';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button, Form, Row, Col, Container} from 'react-bootstrap';

import ImageCard from './ImageCard';

let photosList=[];

function App() {
  const[albumId, setAlbumId] = useState(0);
  const[error, setError] = useState('');
  const[loading, setLoading] = useState(false);
  const[photo, setPhoto] = useState(false);

  const inputChanged = (e) =>{
    console.log( Number.isNaN(parseInt(e.target.value)) );
    if(Number.isNaN( parseInt(e.target.value) ) || parseInt(e.target.value) < 0 ){
      setError('Only number allowed greater than zero!');
    }else{
      setError('');
      setAlbumId( parseInt(e.target.value) );
    }
  }
  const getAlbum = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/albums/" + albumId + "/photos")
      .then(res => res.json())
      .then((result) => {
          setPhoto(true);
          var photos = result;
          // console.log(photos);
          photos.forEach((photo, index) => {
            photosList.push( <ImageCard key={index} photo={photo}/> )
          });
          setLoading(false);
        },
        (error) => {
          setError(error);
        }
      )
  }

  
  
  return (
    <Container fluid>
        
        
        <h4 className={"text-center main-title"}>Album Finder</h4>
        <p className={"text-danger text-center"} style={{ fontWeight: 600 }}>{ error }</p>
        <Row>
            <Col md={4}></Col>
            <Col md={4}>
            <Form.Control type="text"  placeholder="Enter Album ID" onChange={ inputChanged }/>
            <br/>
            <Button type="button" onClick={ getAlbum } className={"btn-block"}>
                Get Album
            </Button>
            </Col>
            <Col md={4}></Col>
        </Row>
        <hr className={"hr"}/>
        <Container>
          <Row>
              { photo ? photosList : '' }
          </Row>
        </Container>
        
        { loading && <div id="loader"></div> }

    </Container>
  );
}

export default App;
