import React from 'react';
import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';
import "./Addroute.css";

const AddRoute = () => {
    return (
        <React.Fragment>
            <Container fluid className="mt-3">
                <h1>Add Customer</h1>
                <Row className="mt-5">
                    <Col lg="8" sm="12">
                        <Form>
                            <FormGroup>
                                <Input type="text" className="input_box" placeholder="Enter the Route Route Name" />
                            </FormGroup>
                            <FormGroup>
                                <Input type="submit" value="Add Route" className="btn btn-success"/>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default AddRoute;