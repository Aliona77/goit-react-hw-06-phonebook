import {Component} from "react";
import { Label, Input, ButtonAdd, Span } from './ContactForm.styles'
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import action from '../../redux/phonebook/phonebook-actions';


 class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    nameInputId = uuidv4();
    numberInputId = uuidv4();

    handleChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        const { name, number } = this.state;
    return (
       
            <form onSubmit={this.handleSubmit}>
            <Label>
                <Span htmlFor={this.numberInputId}>Name</Span>
                    <Input
                        type="text"
                         name="name"
                        placeholder= "Enter name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.handleChange}
                        id={this.nameInputId}
                        value={name}
                    />
            </Label>
        
            <Label>
                <Span htmlFor={this.numberInputId}>Number</Span>
                 <Input
                  type="tel"
                    name="number"
                    placeholder="Enter number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={this.handleChange}
                    value={number}
                    id={this.nameInputId}
                />
                </Label>
               
               <ButtonAdd
                    type="submit"
                    disabled={!name|| !number} >Add contact</ButtonAdd>
              </form>
        )
        }
}

const mapDispatchToProps = dispatch => ({
  onSubmit:( value) => dispatch(action.addContact(value)),
});

export default connect(null, mapDispatchToProps)(ContactForm);

// import {useState} from "react";
// import { Label, Input, ButtonAdd, Span } from './ContactForm.styles'
// import { v4 as uuidv4 } from 'uuid';
// import { addContact } from "../../redux/action/contact";
// import { useDispatch } from "react-redux";

// //import { nanoid } from 'nanoid'

    
// const ContactForm = () =>{
//     const [name, setName] = useState("");
//     const [number, setNumber] = useState("")
//   const dispatch = useDispatch();
  
//    const  nameInputId = uuidv4();
//     const  numberInputId = uuidv4();
    
//   const  handleChange = e => {
//   const { name, value } = e.currentTarget;
      
// switch(name){
//     case "name":
//         setName(value);
//         break;
    
//     case "number":
//         setNumber(value);
//         break;

//     default: return;
//       };
//     };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addContact(name, number));
//     reset();
//     };

  
//     const reset = () => {
//         setName('');
//         setNumber('');
//     }

//      return (
//             <form onSubmit={handleSubmit}>
//             <Label>
//                 <Span htmlFor={numberInputId}>Name</Span>
//                     <Input
//                         type="text"
//                          name="name"
//                         placeholder= "Enter name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//                         required
//                         onChange={handleChange}
//                         id={nameInputId}
//                         value={name}
//                     />
//             </Label>
        
//             <Label>
//                 <Span htmlFor={numberInputId}>Number</Span>
//                  <Input
//                   type="tel"
//                     name="number"
//                     placeholder="Enter number"
//                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                     title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//                     required
//                     onChange={handleChange}
//                     value={number}
//                     id={nameInputId}
//                 />
//                  </Label>
               
//                <ButtonAdd
//                     type="submit"
//                     disabled={!name|| !number} >Add contact</ButtonAdd>
//               </form>
//         )
    
// }

// export default ContactForm;