import PropTypes from 'prop-types';
import { Contact, ContactItem, ButtonDelete, Text } from './ContactList.styles'

 export default function ContactList ({ contacts, onDeleteContact }) {
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
