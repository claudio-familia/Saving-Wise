import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { ENV } from "../../../utils/env";

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        fetch(`${ENV.apiUrl}/auth/login`, 
        { method: 'POST', 
        body: JSON.stringify({username, password}), 
        headers: {
            'Content-Type': 'application/json',
            'Accept':'*/*'
        }})
        .then(e => {
            console.log(e)
        })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Card style={{ width: "80%" }}>
                <Card.Body>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LoginPage;
