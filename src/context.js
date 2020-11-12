import React, { Component } from 'react'
import axios from "axios"

const Context = React.createContext();

//The context acts like a store but in store; the actions, reducers and combine reducres are in different files, while the contaxt is a mini store, it houses both the state, the reducers and the dispatch and inside dispatch, we pass the action to be carried out


//reducer send the data based on the action received
const reducer = (state, action)=>{
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact=>contact.id !==action.payload)
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            }
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map(contact=>contact.id === action.payload.id ? (contact=action.payload):contact
                )
            }
         default:
        return state;
    }
    
}
//we use provider here so it can accomodate the state and it can be used anywhere
export class Provider extends Component {

    state ={
        contacts: [
            
        ],

        dispatch: action => this.setState(state =>reducer(state,action))
    };

    async componentDidMount(){
      const res = await axios.get("http://jsonplaceholder.typicode.com/users")
      this.setState({contacts: res.data })
    }

    render() {
        return (
            <div>
                {/* we use value here to hold the state, so anywhere we want to use the state, we just call value */}
                <Context.Provider value= {this.state}>
                    {this.props.children}
                </Context.Provider>  
            </div>
        )
    }
}

export const Consumer = Context.Consumer;
