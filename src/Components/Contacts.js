import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from "../context"

 class Contacts extends Component {
 

    // deleteContact=(id)=>{
    //     const { contacts } = this.state;

    //     const newContact = contacts.filter(contact => contact.id !== id);

    //     this.setState({
    //         contacts: newContact
    //     })
    // }

    render() {
        return(
            //we have to call in the consumer here so we can access data from the contaxt.js and the valuse passed in is the parameter holding the {this.state} so with it, we can access the state from here
            <Consumer>
                {value => {
                    //destructuring contacts from value which in this cas is the state
                    const {contacts} = value;
                    return(
                        //React.fragment is used when you dont want unneceesary divs
                        <React.Fragment>
                        <h1 className="display-4 mb-3"><span className="text-danger">Contact</span> List</h1>
                        {contacts.map(contact=>(
                            <Contact key={contact.id}  contact={contact}/>
                        ))}
                        {/* deleteClickHandler = {this.deleteContact.bind(this, contact.id)} */}
                    </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}
export default Contacts;