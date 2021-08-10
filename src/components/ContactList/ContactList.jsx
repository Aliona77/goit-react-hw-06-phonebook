
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactActions from '../../redux/phonebook/phonebook-actions';
import { Contact, ContactItem, ButtonDelete, Text } from './ContactList.styles'



 const ContactList = ({ contacts, onDeleteContact })=> {
    return(
        <Contact>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id}><Text>{name}:{number}</Text>
            <ButtonDelete onClick={()=>onDeleteContact(id)}>Delete</ButtonDelete>
            </ContactItem>
        ))}
        </Contact>
    )
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired, 
}


 const onFilteredContacts = (allContacts, filter) => {
     const normalizedFilter = filter.toLowerCase();
     
    return allContacts.filter(({contact}) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
};
  

const mapStateToPropes = ({ contacts: { items, filter } }) => ({
    contacts: onFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
 onDeleteContact:(id)=>dispatch(contactActions.deleteContact(id)),
});


export default connect(mapStateToPropes, mapDispatchToProps)(ContactList );