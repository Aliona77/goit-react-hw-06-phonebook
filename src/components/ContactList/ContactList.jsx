import { Contact, ContactItem, ButtonDelete, Text } from './ContactList.styles'
import { useSelector, useDispatch } from 'react-redux';
//import { connect } from 'react-redux';
import * as actions from '../../redux/phonebook/phonebook-actions';
import { onFilteredContacts } from '../../redux/phonebook/pnonebook-selector';



const ContactList = () =>{
    const contacts = useSelector(onFilteredContacts);
    const dispatch = useDispatch();
    const onDeleteContact = (id) => dispatch(actions.deleteContact(id));

    return(
        <Contact>
            {contacts.map(({id, name, number}) => (
                <ContactItem
                    key={id}>
                    <Text>{name}:{number}
                    </Text>
            <ButtonDelete  type ="button" onClick={()=>onDeleteContact(id)}>Delete</ButtonDelete>
            </ContactItem>
        ))}
        </Contact>
    )
}
export default ContactList;

//=========REDUX==================

//  const onFilteredContacts = (contacts, filter) => {
//      const normalizedFilter = filter.toLowerCase()
//     return contacts.filter(({contact}) =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
// };
  

// const mapStateToPropes = ({ contacts: { items, filter } }) => ({
//     contacts: onFilteredContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//  onDeleteContact:(id)=>dispatch(actions.deleteContact(id)),
// });


//export default connect(mapStateToPropes, mapDispatchToProps)(ContactList );