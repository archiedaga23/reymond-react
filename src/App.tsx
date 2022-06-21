import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Input, Row, Col, Button } from 'reactstrap';
import Cards from './components/Cards';
import './app.css'
import axios from 'axios';
import { URL_BASE } from './constant';
import { useDispatch } from 'react-redux';
import { setNotes } from './store/notes';
import { setNote } from './store/note';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const[id, setId] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    axios
      .get(`${URL_BASE}/note`)
      .then(response => dispatch(setNotes(response.data)))
      .catch(err => console.log(err));

  }, [])

  const searchById = () => {
    
    axios
      .get(`${URL_BASE}/note/${id}`)
      .then(response => {
        const { data } = response;

        if (data != null) {
          
          dispatch(setNote(data));
          navigate('/myNote');
        }

        setId('');
      })
      .catch(err => console.log(err));

  }

  return (
    <Container className='w-75'>
      <h1 className='mt-5 mb-5'>Notes</h1>
      <Row>
        <Col xs={10} md={8} lg={6}>
          <Input placeholder='Type ID to search...' value={id} onChange={(e) => setId(e.target.value)}></Input>
        </Col>
        <Col xs={2} md={4} lg={6}>
          <Button onClick={searchById}>Search</Button>
        </Col>
      </Row>
      <Cards />
    </Container>
  );
}

export default App;
