import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import '../App.css';
import Header from "./Header";
import { useState } from "react";
function Blog() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Happy", content: "happy to write my first blog" },
    { id: 2, title: "Happy", content: "happy to write my second blog" }
  ]);

  const handleDelete = (blogId) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== blogId);
    setBlogs(updatedBlogs);
  };

  return (
    <>
    <Header/>
    {blogs.map(blog =>(
      <Card key={blog.id}>
      <Card.Body>
        <Card.Title>Happy</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">my story</Card.Subtitle>
        <Card.Text>
          happy to write my frist blog 
        </Card.Text>
        <Card.Link href="/update">Update</Card.Link>
        <Button variant="danger" type="button"  onClick={() => handleDelete(blog.id)}> Delete </Button>
      </Card.Body>
    </Card>
    ))}
  
    {blogs.map(blog =>(
      <Card>
      <Card.Body>
      <Card.Title>Happy</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">my story 2</Card.Subtitle>
      <Card.Text>
        happy to write my second blog 
      </Card.Text>
      <Card.Link href="/update">Update</Card.Link>
      <Button variant="danger" type="button"  onClick={() => handleDelete(blog.id)}> Delete </Button>
    </Card.Body>
    </Card>))}
    
    </>
  );
}

export default Blog;