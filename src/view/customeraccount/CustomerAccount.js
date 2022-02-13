import React from 'react';
import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';
import "./CustomerAccount.css";

const CustomerAccount = () => {
    return (
        <React.Fragment>
            <Container fluid className="mt-3">
                <h1>Add Customer</h1>
                <Row className="mt-5">
                    <Col lg="8" sm="12">
                        <Form>
                            <FormGroup>
                                <Input type="select" className="form-control input_box">
                                <option value="">Select Customer</option>
                              </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" className="form-control input_box" placeholder="Customer Due Amount" value="0"/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="submit" value="Update Customer Account" className="btn btn-success"/>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default CustomerAccount;