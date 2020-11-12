import React, { Component } from 'react'
import {Consumer} from "../context"
import TextInputGroup from '../Components/TextInputGroup'
import axios from 'axios'


class AddContact extends Component {

    state = {
        name: "",
        email:"",
        phone:"",
        errors:{}

    }

    onSubmit =async(dispatch, e) => {
        e.preventDefault();
        const {name, email, phone}= this.state;


        //check for errors
        if(name === '') {
            this.setState({
                errors: {name: 'Name is required'}
            })
            return;
        }
        if(email === '') {
            this.setState({
                errors: {email: 'Email is required'}
            })
            return;
        }
        if(phone === '') {
            this.setState({
                errors: {phone: 'Phone is required'}
            })
            return;
        }


        const newContact = {
            name,
            email,
            phone
        }

        const res = await axios.post('http://jsonplaceholder.typicode.com/users', newContact)
        dispatch({type:"ADD_CONTACT", payload:res.data})

        //return the state to default after submitting
        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        })
        this.props.history.push('/')
    };
    onChange = (e) => this.setState({[e.target.name]: e.target.value})


    render() {
        const {name, email, phone, errors} = this.state;

            return(
            <Consumer>
                {value => {
                const {dispatch}= value;
                return(
                    <div className="card" style={{width:'25rem'}}>
                        <div className="card-header">Add Contact</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <TextInputGroup
                                    label="Name"
                                    name="name"
                                    placeholder = "Enter Name"
                                    value={name}
                                    onChange= {this.onChange}
                                    error={errors.name}
                                />
                                <TextInputGroup
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder = "Enter Email"
                                    value={email}
                                    onChange= {this.onChange}
                                    error={errors.email}
                                />
                                <TextInputGroup
                                    label="Phone"
                                    name="phone"
                                    placeholder = "Enter Phone"
                                    value={phone}
                                    onChange= {this.onChange}
                                    error={errors.phone}
                                />
                                {/* This is the standard way of using a form field if you don't want to use a dry code, */}
                                {/* <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" className="form-control" name="name" placeholder="Enter Name..." value={name} onChange={this.onChange} />
                                </div>
                                {/* <div className="form-group">
                                    <label htmlFor="name">Email:</label>
                                    <input type="text" className="form-control" name="email" placeholder="Enter Email..." value={email} onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Phone:</label>
                                    <input type="text" className="form-control" name="phone" placeholder="Enter Phone No...." value={phone} onChange={this.onChange}/>
                                </div> */}
                                <input type="submit" value="Add Contact" className="btn btn-primary btn-block" />
                            </form>
                        </div>
                    </div>
                ) 
                }}
            </Consumer>
            )
    }
}

export default AddContact;