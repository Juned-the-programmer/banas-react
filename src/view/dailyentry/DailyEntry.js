import React from "react";
import {
  Col,
  Container,
  Row,
  Toast,
  ToastHeader,
  Form,
  FormGroup,
  Input,
  ToastBody,
} from "reactstrap";
import "./DailyEntry.css";

const DailyEntry = () => {
  return (
    <React.Fragment>
      <Container fluid className="mt-3">
        <h1>Add Daily Entry</h1>
        <Row>
          <Col lg="8" sm="12">
            <div className="p-2 my-2 rounded">
              <Toast>
                <ToastHeader>Customer Name</ToastHeader>
                <ToastBody>
                  <Form>
                    <FormGroup>
                      <Input
                        type="text"
                        className="input_box"
                        placeholder="Enter Cooler"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="submit"
                        value="Add Cooler"
                        className="btn btn-success"
                      />
                    </FormGroup>
                  </Form>
                </ToastBody>
              </Toast>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default DailyEntry;
