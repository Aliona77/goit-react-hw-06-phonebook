// import { useState, useEffect, useRef} from 'react'
//  import { v4 as uuidv4 } from "uuid";
// //import { nanoid } from 'nanoid'
// import ContactsData from './components/Data/contacts.json';
// import Container from './components/Container/Container';
// import Filter from './components/Filter/Filter.jsx';
// import ContactForm from './components/ContactForm/ContactForm.jsx'
// import ContactList from './components/ContactList/ContactList'



// export default function App() {
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(localStorage.getItem('contacts')) ?? ContactsData
//   });

//   const [filter, setFilter] = useState('');
//   const contactFirstRender = useRef(true);

//   useEffect(() => {
//     if (contactFirstRender.current) {
//       const parsedContacts = JSON.parse(localStorage.getItem('contacts'))

//       if (parsedContacts) {
//         setContacts(parsedContacts)
//       }
//       contactFirstRender.current = false
//       return
//     }
//   localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

// const formSubmitHandler = (name, number) => {
//   const contact = {
//     id: uuidv4(),
//     name,
//     number,
//   };

//   if (contacts.some((contact) => contact.name === name)) {
//     alert(`${name} is already in the contacts.`);
//     return;
//   }
   
//   setContacts((contacts) => [contact, ...contacts])
 
// }
//   const changeFilterInput = (e) => {
//     setFilter(e.currentTarget.value);
    
//   };
 
//  const onFilteredContacts = () => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     )
//  }
   
//  const deleteContact = (contactId) => {
//     setContacts(contacts.filter((contact)=> contact.id !== contactId))
//   }

//     return (
//       <Container title="Phonebook">
//         <ContactForm onSubmit={formSubmitHandler}></ContactForm>
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={changeFilterInput}></Filter>
//         {contacts.length > 0 && (
//           <ContactList contacts={onFilteredContacts()} onDeleteContact={deleteContact}></ContactList>)}
//       </Container>
//     );
//     }





import React, { Component } from "react";
//import { v4 as uuidv4 } from "uuid";
import contacts from './components/Data/contacts.json';
import Container from './components/Container/Container';
import Filter from './components/Filter/Filter.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx'
import ContactList from './components/ContactList/ContactList'




export default class App extends Component{
  state = {
    contacts: contacts,
  };

  
  render() {
    // const { filter } = this.state;
    // const filteredContacts = this.onFilteredContacts();
    return (
      <Container title="Phonebook">
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList
          // contacts={filteredContacts}
          // onDeleteContact={this.DeleteContact}
        />
      </Container>
    );
  }
}

