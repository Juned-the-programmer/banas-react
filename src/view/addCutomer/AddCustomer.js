import React from 'react';
import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';
import "./addCustomer.css";

const AddCustomer = () => {
    return (
        <React.Fragment>
            <Container fluid className="mt-3">
                <h1>Add Customer</h1>
                <Row className="mt-5">
                    <Col lg="8" sm="12">
                        <Form>
                            <FormGroup>
                                <Input placeholder="Customer-name" type="text" className="input_box" />
                            </FormGroup>
                            <FormGroup>
                              <Input type="select" className="form-control input_box">
                                <option value="">Select Route</option>
                              </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="submit" value="Add Customer" className="btn btn-success"/>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default AddCustomer;