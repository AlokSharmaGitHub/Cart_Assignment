import React from "react";
import { Component } from "react";
import fire from "../config/firebase";
import { Form, Button } from "react-bootstrap";
import Header from "../containers/headerContainer";

class Login extends Component {
    constructor(props) {
        super(props);
        this.signin = this.signin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: "",
            password: ""
        }
    }
    signin(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
            this.setState({email:""});
            this.setState({password:""});
            localStorage.setItem("login", "successfull");
            this.props.history.push('/product');
            alert("Successfully logged in");


        }).catch((error) => {
            alert("Something went wrong");
        })


    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((result) => {
            this.setState({email:""});
            this.setState({password:""});
            alert("Registration Successfull");
        }).catch((error) => {
            console.log(error);
            alert("Something went wrong");
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="heading container">
                <Header />
                <h4>Login/Registration</h4>
                <Form>
                    <Form.Group>
                        <Form.Label><strong>Email</strong></Form.Label>
                        <Form.Control
                         type="email"
                         id="email"
                         name="email"
                         placeholder="Enter Email"
                         onChange={this.handleChange}
                         value={this.state.email}
                         />
                        
                    </Form.Group>

                    <Form.Group>
                        <Form.Label><strong>Password</strong></Form.Label>
                        <Form.Control
                           type="password"
                           id="password"
                           name="password"
                           placeholder="Enter Password"
                           onChange={this.handleChange}
                           value={this.state.password}
                         />
                    </Form.Group>
                    <Button variant="primary" onClick={this.signin}>
                        Login
                    </Button>&nbsp;
                    <Button variant="primary" onClick={this.signup}>
                        Registration
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login;