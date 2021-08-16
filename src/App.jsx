
import Container from './components/Container/Container';
import Filter from './components/Filter/Filter.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx'
import ContactList from './components/ContactList/ContactList'





export default function App(){

    return (
      <Container title="Phonebook">
        <ContactForm  />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    );
  }


