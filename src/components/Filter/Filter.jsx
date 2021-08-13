import PropTypes from 'prop-types';
import { Input } from '../ContactForm/ContactForm.styles';
import { Text } from './Filter.styles';
import { connect } from 'react-redux';
import contactActions from '../../redux/phonebook/phonebook-actions';

const Filter= ({ value, onChange })=>{
    return (
        <>
            <Text>Find contact by name</Text>
               <Input
                        type="text"
                         name="name"
                        placeholder= "Name to search"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                onChange={onChange}
                value={value}
                    required>
                </Input>
        </>
    )
}
Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};


const mapStateToPropes = (state) => ({
    value: state.contacts.filter
})
const mapDispatchToProps = dispatch => ({
 onChange:(e)=>dispatch(contactActions.changeFilter(e.target.value)),
});

export default connect(mapStateToPropes, mapDispatchToProps)(Filter); 