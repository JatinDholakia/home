import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Corrector extends Component {
    constructor() {
        super();
        this.apiURL = "https://fidsi6hi34.execute-api.us-east-1.amazonaws.com/test/demoapi"
        this.state = {
            edit_distance_1: '',
            edit_distance_2: '',
            closest_word: '',
            closest_sent: ''
        };
    }
    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = e => {
        e.preventDefault();
        const data = {
            "type" : e.target.name,
            "str1" : this.state.edit_distance_1, 
            "str2" : this.state.edit_distance_2
        }
        axios.post(this.apiURL, data)
            .then(response => {
                console.log(response)
            })
            .catch(error => { 
            console.log(error)
            })
    }
    render() {
        const {edit_distance_1, edit_distance_2, closest_word, closest_sent} = this.state;
        return (
            <div className="wrapper">
                <h1>Edit Distance</h1>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="str11">
                            <Form.Label>String 1</Form.Label>
                            <Form.Control type="text" name="edit_distance_1" placeholder="abc" value={edit_distance_1} onChange={this.changeHandler} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="str12">
                            <Form.Label>String 2</Form.Label>
                            <Form.Control type="text" name="edit_distance_2" placeholder="abcd" onChange={this.changeHandler}/>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" name="edit_distance" onClick={this.submitHandler}>
                        Submit
                    </Button>{' '}
                </Form>
            </div>
        )
    }
}


export default Corrector;