import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Consumer} from '../context'
import axios from 'axios';
import { Link } from 'react-router-dom';


class Contact extends Component {
//this state is for toggle the contact details and it is in the contact.js and not contacts.js cos it is being done individually to one contact likewise the DELETE_CONTACT
    state= {
     showContactInfo: false,     
    };

    onDeleteClick= async (id, dispatch)=>{
        await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({type:'DELETE_CONTACT', payload:id})  
    }
    
    render() {
        //here we destructured the id,email and no from contact and we are usin props here because the state has been moved to a different page
        const {id, name, email, phone} = this.props.contact;
        const { showContactInfo } = this.state;
        return (
            //using consumer here because we want to access the context.js which acts like the store for our app
            <Consumer>
                {/* we used value here because it's the variable housing the state */}
                {value =>{
                    const {dispatch} = value;
                    return(
                        <div className="card card-body mb-3" style={{ width: '25rem' }}>
                            <h4 style={{ fontWeight: 'bold' }}>{name}<i onClick={()=>this.setState({showContactInfo:!this.state.showContactInfo})} className="fas fa-sort-down" style={{ cursor: 'pointer' }}></i><i onClick={this.onDeleteClick.bind(this, id, dispatch)}className="fas fa-times" style={{ cursor: 'pointer',float:"right", color:"red"}}></i>
                            <Link to= {`/contact/edit/${id}`}><i className="fas fa-pencil-alt"style={{ cursor:"pointer", float:'right', color:'black', marginRight:"1rem" }}></i></Link>
                            </h4>
                            {showContactInfo?(<ul className="list-group">
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul>):null}
                        </div>
                    )
                }}
            </Consumer>   
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    
}
export default Contact;