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
            closest_sent: '',
            edit_distance_response: null,
            closest_word_response: null,
            closest_sent_response: null
        };
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    editDistanceHandler = e => {
        e.preventDefault();
        const data = {
            "type": e.target.name,
            "str1": this.state.edit_distance_1.toLowerCase(),
            "str2": this.state.edit_distance_2.toLowerCase()
        }
        axios.post(this.apiURL, data)
            .then(response => {
                this.setState({ edit_distance_response: response.data.message })

            })
            .catch(error => {
                console.log(error)
            })
    }

    closestWordHandler = e => {
        e.preventDefault();
        const data = {
            "type": e.target.name,
            "str1": this.state.closest_word.toLowerCase()
        }
        axios.post(this.apiURL, data)
            .then(response => {
                this.setState({ closest_word_response: response.data.message })
            })
            .catch(error => {
                console.log(error)
            })
    }

    closestSentHandler = e => {
        e.preventDefault();
        const data = {
            "type": e.target.name,
            "str1": this.state.closest_sent.toLowerCase()
        }
        axios.post(this.apiURL, data)
            .then(response => {
                this.setState({ closest_sent_response: response.data.message })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { edit_distance_1, edit_distance_2, closest_word, closest_sent } = this.state;
        return (
            <div className="wrapper">
                <div align="center">
                    <h1>Real Word Spelling Correction</h1>
                </div>
                <h2>Edit Distance</h2>
                <p>Computes Edit Distance between two strings</p>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="str11">
                            <Form.Label>String 1</Form.Label>
                            <Form.Control type="text" name="edit_distance_1" placeholder="eg: abc" value={edit_distance_1} onChange={this.changeHandler} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="str12">
                            <Form.Label>String 2</Form.Label>
                            <Form.Control type="text" name="edit_distance_2" placeholder="eg: abcd" value={edit_distance_2} onChange={this.changeHandler} />
                        </Form.Group>
                    </Form.Row>
                    <div align="center">
                        <Button variant="primary" name="edit_distance" onClick={this.editDistanceHandler}>
                            Submit
                        </Button>{' '}
                        {this.state.edit_distance_response &&
                            <div>
                                Edit Distance between {this.state.edit_distance_1} and {this.state.edit_distance_2} = {this.state.edit_distance_response}
                            </div>}
                    </div>
                    <h2>Closest Word</h2>
                    <p>Chooses closest word according to their frequency. Highest priority given to words with least edit distance.</p>
                    <Form.Group>
                        <Form.Label>String</Form.Label>
                        <Form.Control type="text" name="closest_word" placeholder="eg: acress" value={closest_word} onChange={this.changeHandler}></Form.Control>
                    </Form.Group>
                    <div align="center">
                        <Button variant="primary" name="closest_word" onClick={this.closestWordHandler}>
                            Submit
                        </Button>{' '}
                        {this.state.closest_word_response &&
                            <div>
                                Closest word to {this.state.closest_word} is {this.state.closest_word_response}
                            </div>}
                    </div>
                    <h2>Closest Sentence</h2>
                    <p>Corrects sentence according to the context present.</p>
                    <Form.Group>
                        <Form.Label>String</Form.Label>
                        <Form.Control type="text" name="closest_sent" placeholder="eg: I have an apply" value={closest_sent} onChange={this.changeHandler}></Form.Control>
                    </Form.Group>
                    <div align="center">
                        <Button variant="primary" name="closest_sent" onClick={this.closestSentHandler}>
                            Submit
                        </Button>{' '}
                        {this.state.closest_sent_response &&
                            <div>
                                Closest sentence to "{this.state.closest_sent}" is "{this.state.closest_sent_response}".
                            </div>}
                    </div>
                </Form>
            </div>
        )
    }
}


export default Corrector;