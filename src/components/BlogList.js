import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import axios from 'axios';
import BlogListItem from './BloglistItem';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Row>
        {currentPosts.map((post) => (
          <Col key={post.id} md={4}>
            <BlogListItem post={post} />
          </Col>
        ))}
      </Row>
      <Pagination>
        {[...Array(Math.ceil(posts.length / postsPerPage))].map((_, index) => (
          <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default BlogList;
