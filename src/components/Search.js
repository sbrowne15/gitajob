import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

const Search = (props) => {
    const [state, setState] = useState({
        description: '',
        location: '',
        full_time: false
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'full_time') {
            setState((prevState) => ({...state, [name]: !prevState.full_time}));
        } else {
            setState({...state, [name]: value });
        }
    };

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(state);
    };

    return (
        <div className="search-section">
            <Form className="search-form" onSubmit={handleSearch}>
                <Row>
                    <Col>
                        <FormGroup controlId="description">
                            <Input // Input Field for Job Description
                                type="text"
                                name="description"
                                value={state.description || ''}
                                placeholder="Enter Desired Position"
                                onChange={handleInputChange} // invoked to handle input field updates
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup controlId="location">
                            <Input // Input Field for Location to Search
                                type="text"
                                name="location"
                                value={state.location || ''}
                                placeholder="Enter Location"
                                onChange={handleInputChange} // invoked to handle input field updates
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <Button color="primary" type="submit" className="btn-search">
                            Search
                        </Button>
                    </Col>
                </Row>
                <div className="filters">
                    <FormGroup check controlId="full_time">
                        <Label check>
                            <Input // Checkbox to search only for full-time jobs Cheated to get spacing between label and checkbox will fix later
                                type="checkbox"
                                name="full_time"
                                className="full-time_checkbox"                                
                                checked={state.full_time}
                                onChange={handleInputChange}
                            />
                            &nbsp;&nbsp;Full-Time Only
                        </Label>
                    </FormGroup>
                </div>
            </Form>
        </div>
    );
};

export default Search;