import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Label, Input, ButtonAdd, Span } from './ContactForm.styles'

import { useSelector, useDispatch  } from "react-redux";
import *as actions from '../../redux/phonebook/phonebook-actions';
import { getContacts } from "../../redux/phonebook/pnonebook-selector";


export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('')
  
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts)
   
     
  const nameInputId = uuidv4();
  const numberInputId = uuidv4();
  
  
  
    
  const  handleChange = event => {
  const { name, value } = event.target;
      
switch(name){
    case "name":
        setName(value);
        break;
    
    case "number":
        setNumber(value);
        break;

    default: return;
      };
    };


  const handleSubmit = (event) => {
    event.preventDefault();
     
      
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in the contacts.`)
      return
    } 
    dispatch(actions.addContact({ name, number }));
    
    reset();
  };
  
    
  
    const reset = () => {
        setName('');
        setNumber('');
    }

     return (
            <form onSubmit={handleSubmit}>
            <Label>
                <Span>Name</Span>
                    <Input
                        type="text"
                        name="name"
                        placeholder= "Enter name"
                         onChange={handleChange}
                        value={name}
                         id={nameInputId} 
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                          
                    />
            </Label>
        
            <Label>
                <Span >Number</Span>
                 <Input
                  type="tel"
                    name="number"
                 placeholder="Enter number"
                  onChange={handleChange}
                    value={number}
                     id={numberInputId}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                   
                />
                 </Label>
               
               <ButtonAdd
                    type="submit"
                    disabled={!name || !number}>Add contact</ButtonAdd>
              </form>
        )
}

//=========REDUX==================

// const mapDispatchToProps = dispatch => ({
//   onSubmit:( name, number) => dispatch(actions.addContact(name, number)),
// });

// export default connect(null, mapDispatchToProps)(ContactForm);
