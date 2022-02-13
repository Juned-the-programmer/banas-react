import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';
import "./addCustomer.css";
import * as routeActions from '../../redux/route/routeActions';
import * as routeReducers from '../../redux/route/routeReducers';
import * as customerActions from '../../redux/customer/customerActions';

const AddCustomer = () => {

    const [customer, setCustomer] = useState({
        name: "",
        route: "",
        rate: 25
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(routeActions.getRoutes());
    }, []);

    const routeInfo = useSelector((state) => {
        return state[routeReducers.routeFeatureKey];
    });

    const { errMessage, route } = routeInfo;

    if(errMessage) console.error(errMessage);

    const addCustomerAC = (e) => {
        e.preventDefault();
        dispatch(customerActions.addCutomer(customer));
    };


    return (
        <React.Fragment>
            <Container fluid className="mt-3">
                <h1>Add Customer</h1>
                <Row className="mt-5">
                    <Col lg="8" sm="12">
                        <Form onSubmit={addCustomerAC}>
                            <FormGroup>
                                <Input placeholder="Customer-name" required type="text" className="input_box" onChange={e => setCustomer({...customer, name: e.target.value})} />
                            </FormGroup>
                            <FormGroup>
                              <Input type="select" className="form-control input_box" required onChange={e => setCustomer({...customer, route: e.target.value})}>
                                <option value="">Select Route</option>
                                {
                                    route && route?.length > 0 && route.map((rot) => {
                                        return (
                                            <React.Fragment>
                                                <option key={rot?.id} value={rot?.id}>{rot?.route_name}</option>
                                            </React.Fragment>
                                        )
                                    })
                                }
                              </Input>
                            </FormGroup>
                            <FormGroup>
                              <Input type="number" required className="input_box" placeholder="Rate" defaultValue={customer?.rate} onChange={e => setCustomer({...customer, rate: e.target.value})} />
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