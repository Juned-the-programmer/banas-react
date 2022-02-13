import React, { useState } from 'react';
import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';
import "./Addroute.css";
import * as routeActions from '../../redux/route/routeActions';
import { useDispatch } from 'react-redux';

const AddRoute = () => {

    const dispatch = useDispatch();

    const [route_name, setRouteName] = useState("");


    const addRouteAC = (e) => {
        e.preventDefault();
        dispatch(routeActions.addRoute({route_name}));
    };

    return (
        <React.Fragment>
            <Container fluid className="mt-3">
                <h1>Add Customer</h1>
                <Row className="mt-5">
                    <Col lg="8" sm="12">
                        <Form onSubmit={addRouteAC}>
                            <FormGroup>
                                <Input type="text" required className="input_box" placeholder="Enter the Route Route Name" onChange={e => setRouteName(e.target.value)} />
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