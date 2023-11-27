import React from 'react';
import BlogList from '../components/BlogList';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
const Home = () => {
  return (
  
    <Container>
      <Header/>
      <BlogList />
    </Container>
  );
};

export default Home;
