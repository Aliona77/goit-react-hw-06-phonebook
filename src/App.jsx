import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import contacts from './components/Data/contacts.json';
import Container from './components/Container/Container';
import Filter from './components/Filter/Filter.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx'
import ContactList from './components/ContactList/ContactList'




export default class App extends Component{
  state = {
    contacts: contacts,
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const usher = {
      id: uuidv4(),
      name,
      number,
    };
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in the contacts.`);
      return;
    }
    this.setState((prevState) => ({
      ...prevState,
      contacts: [usher, ...prevState.contacts],
    }));
  };

  changeFilterInput = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };
  onFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  DeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  componentDidMount() {
   
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
  

    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { filter } = this.state;
    const filteredContacts = this.onFilteredContacts();
    return (
      <Container title="Phonebook">
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilterInput} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.DeleteContact}
        />
      </Container>
    );
  }
}

