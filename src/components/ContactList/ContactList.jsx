// import PropTypes from 'prop-types';
// import { Contact, ContactItem, ButtonDelete, Text } from './ContactList.styles';
// import { useSelector } from 'react-redux';


// const ContactList = (onDeleteContact) => {
//     const contacts = useSelector((state) => state.items);

//     return(
//         <Contact>
//             {contacts.map(({ id, name, number }) => (
//                 <ContactItem key={id}><Text>{name}:{number}</Text>
//             <ButtonDelete onClick={()=>onDeleteContact(id)}>Delete</ButtonDelete>
//             </ContactItem>
//         ))}
//         </Contact>
//     )
// }
// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//         })
//     ).isRequired,
//     onDeleteContact: PropTypes.func.isRequired, 
// }

// export default ContactList;

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import action from '../../redux/phonebook/phonebook-actions';
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
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
};
  

const mapStateToPropes = ({ contacts: { items, filter } }) => ({
    contacts: onFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
 onDeleteContact:(id)=>dispatch(action.deleteContact(id)),
});


export default connect(mapStateToPropes, mapDispatchToProps)(ContactList );