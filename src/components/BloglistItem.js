import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogListItem = ({ post }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Link to={`/edit/${post.id}`}>
          <Button variant="primary">Update</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BlogListItem;
