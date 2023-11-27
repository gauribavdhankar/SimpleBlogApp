import React from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { Container, Form, Button } from 'react-bootstrap';

const Login = () => {
    const { register, handleSubmit, errors } = useForm();

    const handleLogin = async (data) => {
        try {
          
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: data.title,
                body: data.body,
                userId: 1,
              });
            console.log('Login successful!', response.data);
           
        } catch (error) {
            
            if (error.response) {

                console.error('Server responded with status:', error.response.status);
                console.error('Server response data:', error.response.data);
             
            } else if (error.request) {
                
                console.error('No response received from the server');
              
            } else {
                
                console.error('Error setting up the request:', error.message);
             
            }
        }
    };

    return (
            <Container>
                <h1>Login</h1>
                <Form onSubmit={handleSubmit(handleLogin)}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            className={`form-control ${errors?.email ? 'is-invalid' : ''}`}
                            {...register('email',{ required: 'Email is required' })}
                        />
                        <div className="invalid-feedback">
                            {errors?.email?.message}
                        </div>
                    </Form.Group>
    
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            className={`form-control ${errors?.password ? 'is-invalid' : ''}`}
                            {...register('password',{ required: 'Password is required' })}
                        />
                        <div className="invalid-feedback">
                            {errors?.password?.message}
                        </div>
                    </Form.Group>
    
                    <Button type="submit" variant="primary">Login</Button>
                </Form>
            </Container>
    );
};

export default Login;
