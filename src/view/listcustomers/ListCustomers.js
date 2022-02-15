import React , { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, ListGroupItem , Row , Col , Container} from 'reactstrap';
import "./ListCustomer.css";
import * as customerActions from '../../redux/customer/customerActions';
import * as customerReducer from '../../redux/customer/customerReducer';

const ListCustomers = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(customerActions.getcustomers());
    } , []);

    const customerinfo = useSelector((state) => {
        return state[customerReducer.customerFeatureKey];
    });

    const {errMessage , customers} = customerinfo;

    console.log(customers);

    return (
        <React.Fragment>
            <Container fluid className="mt-3">
                <h1>List customers</h1>
                <Row className="mt-5">
                    <Col lg="8" sm="12">
                        <ListGroup>
                            {
                            customers && customers?.length > 0 && customers.map((cus) => {
                                return (
                                    <React.Fragment>
                                        <ListGroupItem>{cus.name}</ListGroupItem>
                                    </React.Fragment>
                                    )
                                })
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
};

export default ListCustomers;