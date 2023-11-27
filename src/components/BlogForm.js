
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required(),
});

const BlogForm = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const onSubmit = async (data) => {
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: data.title,
        body: data.body,
        userId: 1,
      });
      console.log("Post successful");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <h2>Create Blog Post</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" ref={register} />
          {errors && errors.title && <p>{errors.title.message}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" name="body" ref={register} />
          {errors && errors.body && <p>{errors.body.message}</p>}
        </Form.Group>
        <Button type="submit" variant='success'>Submit</Button>
      </Form>
    </Container>
  );
};

export default BlogForm;
