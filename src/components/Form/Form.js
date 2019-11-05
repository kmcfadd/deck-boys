import React, { Component } from 'react';
import Wrapper from '../Wrapper/Wrapper';

class Form extends Component {

    state = {
        Username: "",
        Email: "",
        Password: "",
    }

    handleInput = e => {
        const { name, value } = e.target;
        
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault();

        // do stuff here

        this.setState({
            Username: "",
            Email: "",
            Password: "",
        })
    }

    render() {
        return (
            <Wrapper>
                <div className="row">
                    <label>Username</label>
                    <div>
                        <input type="text" id="Username" name="Username" data-val-required="Username is required."
                        data-val="true" value={this.state.Username} onChange={this.handleInput} />
                    </div>
                </div>
                <div className="row">
                    <label>Email</label>
                    <div>
                        <input type="text" id="Email" name="Email" data-val-required="Email is required." 
                        data-val="true" value={this.state.Email} onChange={this.handleInput} />
                    </div>
                </div>
                <div className="row">
                    <label>Password</label>
                    <div>
                        <input type="password" name="Password" id="Password" data-val-required="Password is required" data-val="true"
                        data-val-length-min="6" data-val-length="Password must be at least 6 characters." value={this.state.Password} 
                        onChange={this.handleInput} />
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Register" onClick={this.handleFormSubmit} />
                </div>
            </Wrapper>
        )
    }
}

export default Form;