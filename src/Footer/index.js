import React, { Component } from 'react';
import { Element } from 'react-scroll'
import Resume from '../Resume/Elkholy_Saif_CV_Fall_2019.pdf'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import axios from 'axios';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            error: false,
            submitting: false,
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handleChange = event =>{
        const inputName = event.target.name;
        const targetValue = event.target.value;
        const prevState = this.state;
        prevState[inputName] = targetValue;
        this.setState (prevState);
    };

    handleSubmit = () => {
        this.setState({submitting: true, error: false});
        return axios.post(
            "/php/sendForm.php",{
                name: this.state.name,
                email: this.state.email,
                subject: this.state.subject,
                body: this.state.message
            }
        ).then( () => {
            this.setState({submitting: false, success: true});
        }).catch( () => {
            this.setState({submitting: false, error: true});
        })
    };

    render() {
        return (
            <Element name="where-element">
                <div className="App-footer">
                    <h4>With all that out of the way</h4>
                    <h3>You can find my <a target="_blank" href={Resume}>CV</a>, <a target="_blank" href="https://github.com/kholysa">Github</a> and <a target="_blank"  href="https://www.linkedin.com/in/saif-elkholy/">LinkedIn</a> here</h3>
                    <h3>Or you can directly contact me here!</h3>
                    <div className="Footer-form">
                        <Form>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input disabled={this.state.submitting} onChange={this.handleChange} value={this.state.name} type="text" name="name"/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input disabled={this.state.submitting} onChange={this.handleChange} value={this.state.email} type="email" name="email" />
                            </FormGroup>
                            <FormGroup>
                                <Label>Subject</Label>
                                <Input disabled={this.state.submitting} onChange={this.handleChange} type="text" name="subject" value={this.state.subject} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Message</Label>
                                <Input disabled={this.state.submitting} onChange={this.handleChange} type="textarea" name="message" value={this.state.message} />
                            </FormGroup>
                            {this.state.error && <Alert color="danger">An error occured, please try again</Alert>}
                            {this.state.success && <Alert color="success">Message has been successfully sent</Alert>}
                            <Button block color="primary" disabled={this.state.submitting} onClick={this.handleSubmit}>Message Me!</Button>
                        </Form>
                    </div>
                </div>
            </Element>
        );
    }
}

export default Footer;
